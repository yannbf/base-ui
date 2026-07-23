# @base-ui/mealdrop

Mealdrop theme for Base UI — import `@base-ui/react` directly, apply the documented `md-*`
classes, import this stylesheet once.

```bash
npm install "@base-ui/mealdrop@https://pkg.pr.new/storybook-tmp/base-ui/@base-ui/mealdrop@<sha>"
```

```tsx
import '@base-ui/mealdrop/styles.css'; // once, at your app entry
import { Button } from '@base-ui/react/button';

function Example() {
  return <Button className="md-Button">Order now</Button>;
}
```

Dark mode: set `data-theme="dark"` on `<html>` (falls back to the system preference when
unset). The stylesheet documents tokens and classes for Button, Field, Input, Dialog, Drawer,
and Tooltip — see `src/styles.css` for the full `md-*` class list (e.g. `md-FieldRoot`,
`md-DialogPopup`, `md-DrawerPopup`, `md-TooltipPopup`). This package ships no component code;
`export`s from `.` are just string constants mirroring those class names for convenience.
