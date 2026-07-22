# @base-ui/mealdrop

Mealdrop-themed wrappers around [`@base-ui/react`](https://www.npmjs.com/package/@base-ui/react) — components come pre-styled; import one stylesheet and you're done.

```bash
npm install "@base-ui/mealdrop@https://pkg.pr.new/storybook-tmp/base-ui/@base-ui/mealdrop@<sha>"
```

```tsx
import '@base-ui/mealdrop/styles.css'; // once, at your app entry
import { Button, Dialog, Drawer, Field, Input, Tooltip } from '@base-ui/mealdrop';
```

Dark mode: set `data-theme="dark"` on `<html>` (falls back to the system preference when unset). Currently wrapped: Button, Field, Input, Dialog, Drawer, Tooltip — every Base UI prop and ref passes through; unthemed parts of each namespace re-export unchanged.
