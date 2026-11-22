# Image Lightbox Gallery

## When to Use

Use this pattern when content images are reduced by the page width and readers need to inspect detail or move among images in the same post or document. Decide from the content and the project's existing UI. Do not add a lightbox to logos, icons, decorative images, or every standalone image by default. Reuse established dialog, image, and gallery components when they meet the needed behavior; this guidance does not require a particular library.

## Images in the Page

- Preserve each image's aspect ratio and scale it within the content width. Do not create an internal scroll region merely to expose the image's full size.
- On pointer hover, show an **Enlarge view** action at the image's upper-left. The action opens the gallery at that image. On touch devices, keep an equivalent action visible or otherwise directly reachable without hover.
- Keep image-click behavior separate from the enlarge action. Preserve an existing image link or action; do not make the whole image open the gallery by accident.

## Gallery Layout

- Present a modal overlay covering the viewport. Use a dark backdrop that distinguishes the gallery from the page without prescribing a fixed color.
- Place the current image number and total count at the upper-left. Put zoom in, zoom out, fit-to-view, and close controls at the upper-right. Center the selected image with previous and next controls on its sides, and place the thumbnail strip below it.
- Fit the selected image inside the available viewing area while preserving its aspect ratio. Let users switch between fit-to-view and original 100% size, zoom with the mouse wheel, and drag a zoomed image to pan. Do not make wheel zoom intercept unrelated page or thumbnail scrolling.
- Move between images with the side controls or left and right arrow keys. Reset zoom and pan to the fit state when the selected image changes unless the product explicitly calls for per-image state preservation. Keep the controls and image bounds stable during the transition.

## Thumbnail Strip

- Include the images from the same content item in their content order. Selecting a thumbnail changes the central image. Distinguish the selected thumbnail with a visible border and programmatic selected state.
- Center the whole strip when it is narrower than its container. Allow horizontal scrolling when it overflows; bring the selected thumbnail toward the center when possible.
- Clamp scrolling to the strip's real bounds. At the first and last images, do not scroll past an edge; selecting the last image should align the strip's end with the right edge. Avoid smooth scrolling unless it improves orientation without delaying selection.
- For a one-image gallery, omit previous/next controls and the thumbnail strip when they add no useful action.

## Closing and Page Context

- Close through the close button, Escape, or a direct click on the backdrop outside the image and gallery controls.
- Clicking the image, dragging it, selecting a thumbnail, or using the toolbar must not dismiss the gallery. Keep pointer events for those targets separate from the backdrop dismissal target.
- Preserve the underlying page's scroll position across opening and closing, including when background scrolling is temporarily locked. Return focus to the invoking enlarge control when it still exists.

## Accessibility and Responsive Behavior

- Use a modal dialog pattern with an accessible name. Move focus into the gallery when it opens, contain Tab and Shift+Tab within it, show visible focus, and make the underlying page unavailable while it is open. Follow the [W3C modal dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) for focus and Escape behavior.
- Give every icon-only control an accessible action name. Expose the current image and count without relying only on border color. Keep meaningful alternative text or an equivalent description for the selected image.
- Make enlarge, close, navigation, zoom, and thumbnail actions usable by keyboard and touch. Keep controls reachable on narrow screens while reserving useful viewing space for the image. Do not let gallery arrow shortcuts interfere with focused controls or browser and assistive-technology commands.
- If an image cannot load, keep the gallery usable and provide a clear recovery or next-image action. Follow the existing [feedback guidance](./feedback.md) for error presentation.

## Optional Toolbar Icons

Use the project's shared icons first. When Lucide React is the chosen icon library, these are candidates for actions the product actually provides. They do not require adding fullscreen, download, rotation, or slideshow features. Check exports in the installed version and use explicit accessible names, especially for `Scan` and `Ratio`.

| Action | Lucide candidate | Meaning |
| --- | --- | --- |
| Zoom in / out | `ZoomIn` / `ZoomOut` | Increase / decrease magnification |
| Fit / actual size | `Scan` / `Ratio` | Fit the image / show original 100% size |
| Fullscreen | `Expand` | Enter browser fullscreen when supported |
| Download | `Download` | Save the image when permitted |
| Rotate | `RotateCw` | Rotate 90° clockwise |
| Slideshow | `CirclePlay` | Start automatic advancement; show a distinct running or paused state |
| Close | `X` | Dismiss the gallery |

If fullscreen is offered, account for the browser using Escape to exit fullscreen before the gallery receives it; keep the close button operable and ensure Escape closes the gallery when it is no longer fullscreen. Follow the general [iconography guidance](../foundations/iconography.md) for semantics, sizing, and accessible names.

## Reference Image and Boundaries

The [user-provided layout preview](./lightbox-gallery-preview.png) illustrates the counter, toolbar, image, side navigation, and thumbnails. Its colors, photograph, extra actions, and exact dimensions are examples, not requirements. The image was supplied for this Skill; reuse outside this repository has not been specified.

Use [layout guidance](../foundations/layout.md) for the page's scroll regions, [scrollbar guidance](../foundations/scrollbars.md) only when styling the thumbnail scrollbar, and [navigation guidance](./navigation.md) for general focus and context preservation. This reference owns the gallery-specific behavior above.
