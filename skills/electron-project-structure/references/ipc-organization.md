# IPC Organization

Locate each IPC handler with the Main-side service or responsibility it serves. Keep Preload bridge methods close to the API they expose. Store message and API types in a shared contract location only when both sides consume them; avoid duplicate definitions and dependencies on Main or Renderer implementations.

Trace every existing channel from Renderer call through Preload to Main handler before moving it. Preserve channel names, payload shapes, validation, return values, and error behavior in a structure-only task. Do not add privileged methods or alter an IPC contract without an explicit request. Verify the bridge and handlers still connect after updating imports and build paths.
