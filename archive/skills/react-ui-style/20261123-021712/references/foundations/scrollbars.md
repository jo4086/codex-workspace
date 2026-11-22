# Scrollbar Appearance

## Scope

Use this reference when a React UI task specifies scrollbar appearance or visibility. [Layout](./layout.md) owns the choice between document scrolling and independent scroll regions. First inspect the project's design system and existing scrollbar behavior; preserve an established style unless the task changes it.

## Choose a Visibility Pattern

| Pattern | Appearance and behavior | When to use |
| --- | --- | --- |
| Thin default | Use a thin scrollbar when the project has no conflicting established style. Keep the thumb distinguishable from its surroundings. | No special visibility requirement. |
| Activity reveal | While idle, keep the thumb and track transparent. Reveal the thumb while the region scrolls or the pointer hovers over its scrollbar area. Keep the track transparent unless the product explicitly asks to show it. | The product requests a scrollbar that appears during interaction. |
| Always transparent | Keep thumb and track visually transparent during idle, scroll, and hover while preserving the region's ability to scroll. | The product explicitly requests a hidden visual cue. |

Choose per scroll region. A document and a compact panel may need different patterns. Do not infer the activity or always-transparent pattern from a general request for a thin scrollbar.

## Activity Reveal States

1. On scroll, reveal the thumb. Keep it visible while scrolling continues.
2. On pointer hover over the scrollbar region, reveal the thumb even when content is stationary. Make sure the invisible idle scrollbar region can still receive the intended pointer interaction in the target environment.
3. When scrolling has stopped **and** the pointer is no longer over the scrollbar region, wait a short idle period, then return the thumb to transparent. Do not hide it while either activity remains.
4. Keep the track transparent by default. If the request raises track visibility without deciding it, ask whether the track should remain transparent or appear with the thumb. If shown, use partial transparency rather than a fully opaque track.

Select thickness, delay, thumb color, and optional track opacity from the product's tokens and context. Preserve scrollbar geometry across states so appearance changes do not shift content. A simple color or opacity change is preferable when the target platform supports it; use interaction state only where CSS alone cannot express the required scroll and idle timing.

## Interaction and Compatibility Checks

- Confirm the content still scrolls with keyboard, pointer wheel or trackpad, touch where relevant, and a dragged thumb where the platform provides one. Do not confuse a transparent scrollbar with `overflow: hidden`.
- Check hover detection, idle return, thumb contrast while visible, and whether the scroll region remains discoverable. Treat the always-transparent pattern as an explicit product choice because it removes a visual cue.
- Check document and panel regions separately, including narrow layouts. Avoid a visibility change that resizes the content area or causes distracting layout shifts.
- Native scrollbar drawing and styling vary by browser and operating system. Verify the required visual states on the target platforms and document any state the platform cannot reproduce exactly. The [CSS Scrollbars specification](https://drafts.csswg.org/css-scrollbars-1/) defines width and color controls, but leaves parts of native rendering to the user agent.
