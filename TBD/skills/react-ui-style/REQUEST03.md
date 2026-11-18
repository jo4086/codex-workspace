# REQUEST03 — Image Lightbox Gallery Pattern

- **Requested:** 2026-11-18
- **Status:** Implemented and validated
- **Target:** Existing [`react-ui-style` Skill](../../../skills/react-ui-style/SKILL.md)
- **Implementation owner:** `my-skill-creator`

## Purpose and Activation

Plan reusable React UI guidance for content images that become too small within a page and for browsing several images from the same post or document. Apply it when a blog, forum, cafe, documentation page, or similar content area needs enlargement, detail inspection, or movement among its images. Choose the pattern from the content and user experience; do not apply it automatically to logos, icons, decorative images, or every standalone image.

This request is the source specification. The resulting [gallery Reference](../../../skills/react-ui-style/references/interactions/image-lightbox-gallery.md) contains the implemented guidance; no application UI or library integration was added.

## Confirmed Behavior

### Images in the Page

- Preserve each image's original aspect ratio. Scale it down when it exceeds the available content width; do not create a scroll area inside the image merely to show its full size.
- Reveal an **Enlarge view** button at the image's upper-left on pointer hover. Activating that button opens the gallery at the corresponding image.
- Keep the image's own click action distinct from the enlarge button. Preserve any established image-click behavior rather than silently assigning enlargement to the whole image.
- Provide a way to reach the enlarge action on touch devices without relying on hover.

### Gallery Layout and Navigation

- Cover the viewport with a dark overlay. Show the current position and total image count at the upper-left, a toolbar with zoom in, zoom out, fit-to-view, and close controls at the upper-right, the selected image in the center, previous/next controls on either side, and a thumbnail strip below.
- Keep the selected image's aspect ratio and fit it within the available viewing area before the user zooms it.
- Show images from the same content item in their content order. Mark the selected thumbnail with a prominent border and let a thumbnail select its image.
- Center the entire thumbnail list when it is narrower than its container. When it overflows, allow horizontal scrolling and move the selected thumbnail toward the center when possible. Clamp scrolling at both ends; selecting the final image should leave the end of the list aligned with the right edge. Avoid unnecessary scrolling animation.
- Support previous/next with the left and right arrow keys, zoom with the mouse wheel, drag to pan a zoomed image, and switching between original size and fit-to-view. Define how zoom and pan state behave when the selected image changes.

### Toolbar Icon Candidates

The user supplied these Lucide React names as common toolbar examples. They are **optional icon choices**, not a required set of controls or a rule that overrides a project's established icon system. Use a control only when its behavior exists and the product calls for it. The core gallery behavior above includes zoom, fit, original size, and close; fullscreen, download, rotation, and slideshow remain product-specific options.

| Action | Lucide React candidate | Intended behavior |
| --- | --- | --- |
| Zoom in | `ZoomIn` | Increase image magnification |
| Zoom out | `ZoomOut` | Decrease image magnification |
| Fit to screen | `Scan` | Fit the whole image in the viewing area |
| Actual size | `Ratio` | Show the image at its original 100% size |
| Fullscreen | `Expand` | Enter the browser's fullscreen mode |
| Download | `Download` | Save the image when downloading is allowed |
| Rotate | `RotateCw` | Rotate the image 90° clockwise |
| Slideshow | `CirclePlay` | Start automatic image advancement |
| Close | `X` | Close the gallery |

All nine icon names have pages in the [official Lucide catalog](https://lucide.dev/icons); verify the exports against the project's installed `lucide-react` version before implementation. `Scan` and `Ratio` may not communicate fit and 100% size clearly by themselves, so pair icon-only controls with explicit accessible names and check whether the target audience understands them. A slideshow toggle also needs a clear running or paused state if that optional feature is added.

### Closing and Context Preservation

- Close only through the upper-right close button, Escape, or a click on the overlay background outside the image.
- Do not close when the user clicks the image, drags a zoomed image, selects a thumbnail, or operates the toolbar.
- Preserve the underlying page's scroll position when the gallery closes.

## Reference Image

The supplied [lightbox layout preview](../../../skills/react-ui-style/references/interactions/lightbox-gallery-preview.png) shows the counter, toolbar, centered image, side navigation, and thumbnail strip. It is a **layout reference**, not a required color palette, icon set, or list of toolbar actions; its extra playback, download, and display controls do not become requirements from the screenshot alone.

The requested path `screenshots/references/lightbox-gallery-preview.png` did not exist. The user-provided root image was copied beside the implemented Reference so the Skill remains self-contained. The source root file was left untouched. Its use outside this repository has not been specified.

## Proposed Skill Integration

- Add one focused Reference, proposed as `skills/react-ui-style/references/interactions/image-lightbox-gallery.md`. It should own application conditions, page-image affordance, gallery layout, thumbnail behavior, zoom/pan/navigation states, and dismissal boundaries. Keep implementation examples optional and library-neutral.
- Link the new Reference from `references/interactions/README.md`. Add a brief condition to `SKILL.md` routing so tasks involving enlarged content images or a multi-image gallery reach the interactions index. Avoid loading the Reference for unrelated React UI work.
- Keep general page scrolling and overflow rules in `foundations/layout.md`, scrollbar appearance in `foundations/scrollbars.md`, generic navigation and focus rules in `interactions/navigation.md`, and icon semantics in `foundations/iconography.md`. The new Reference should link to those rules only where needed, without repeating them.
- Keep the detailed toolbar candidates in the gallery Reference if examples improve implementation. Do not add the full table as universal rules to `foundations/iconography.md`; its existing semantic selection, project-priority, and accessible-name guidance already applies. `X` and `Download` are already covered there as general actions.
- Reuse the project's existing dialog, overlay, image, and interaction primitives where suitable. Do not prescribe a gallery package, React state library, or one CSS technique.

## Accessibility and Responsive Review for Implementation

These are proposed checks for the future Reference, not additional visual requirements from the screenshot:

- Treat the gallery as a modal interaction: give controls accessible names, provide a visible focus indicator, keep keyboard focus inside while open, and restore focus to the invoking enlarge control when it closes if that control still exists.
- Make the image count and selected image understandable beyond color or border alone. Preserve meaningful image alternative text or equivalent descriptions.
- Make close, previous/next, zoom, and thumbnail actions reachable without a pointer. Avoid keyboard shortcuts that interfere with a focused control or browser and assistive-technology commands.
- Keep controls usable on narrow screens and touch devices; maintain sufficient viewing space for the image and a reachable thumbnail strip. Preserve the page scroll position when any temporary background scroll lock is removed.
- Review loading and failure behavior for unavailable images, and ensure zoom/pan does not accidentally trigger overlay dismissal.

## Implementation Decisions

- **Image transition state:** Reset zoom and pan to fit-to-view when the selected image changes unless the product explicitly requires per-image state preservation.
- **Touch enlarge affordance:** Keep the enlarge action visible or otherwise directly reachable without hover on touch devices.
- **Reference image location:** Store the user-provided preview beside the gallery Reference. Do not imply that the missing `screenshots/references/` path exists or that external reuse rights were established.
- **Single-image case:** Allow the same modal viewing pattern for one image while omitting previous/next and thumbnails when they provide no useful action.

## Completion Evidence Required Later

- [x] `SKILL.md` and the interactions index route relevant content-image tasks to one focused Reference; unrelated UI work remains on its existing routes.
- [x] The Reference covers the confirmed page-image, gallery, thumbnail, image-operation, and closing behavior without prescribing a library or copying the screenshot's visual style.
- [x] The toolbar icon examples remain optional, require installed-library verification and accessible names, and do not create optional actions solely to use an icon.
- [x] Reviewed documentation scenarios for desktop and narrow screens, keyboard, pointer, and touch: first/last thumbnail clamping, zoomed dragging, allowed and forbidden dismissal, and preserved page scroll position. No application UI was rendered or tested.
- [x] The decisions above are recorded; the preview is included within the Skill with its source noted. `quick_validate.py skills/react-ui-style`, local link/LF/image-integrity checks, and `git diff --check` passed on 2026-11-18.
