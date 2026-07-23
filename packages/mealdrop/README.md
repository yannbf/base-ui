# @base-ui/mealdrop

Mealdrop theme for Base UI — a stylesheet of design tokens and `md-*` classes, no component
wrappers. Consuming apps import `@base-ui/react` directly and apply the classes in their own
thin wrapper components.

```bash
npm install "@base-ui/mealdrop@https://pkg.pr.new/storybook-tmp/base-ui/@base-ui/mealdrop@<sha>"
```

```tsx
// app entry, once:
import '@base-ui/mealdrop/styles.css';
```

```tsx
// src/components/Button/Button.tsx — the app's own thin wrapper
import { Button as BaseButton } from '@base-ui/react/button';
import type { ComponentProps } from 'react';

export function Button(props: ComponentProps<typeof BaseButton>) {
  return <BaseButton {...props} className="md-Button" />;
}
```

```tsx
// anywhere else in the app:
import { Button } from '../components/Button';

<Button>Order now</Button>;
```

Dark mode: set `data-theme="dark"` on `<html>` (falls back to the system preference when
unset). The stylesheet documents tokens and classes for Button, Field, Input, Dialog, Drawer,
and Tooltip — see `src/styles.css` for the full `md-*` class list (e.g. `md-FieldRoot`,
`md-DialogPopup`, `md-DrawerPopup`, `md-TooltipPopup`). This package ships no component code;
`export`s from `.` are just string constants mirroring those class names for convenience.

## Why classes instead of wrapped components?

Earlier versions of this package exported themed component wrappers (`import { Button } from
'@base-ui/mealdrop'`). We moved to a stylesheet-only package so that code written against
`@base-ui/react` looks like normal, upstream Base UI usage — the import paths match
base-ui.com and any Base UI-aware tooling, docs comparison, or community skill exactly, with
no Mealdrop-specific detour. Branding is layered on afterward, as a `className`, at the one
place in a consuming app that already owns component composition: its own wrapper layer (e.g.
`src/components/Button`). The design system stays pure Base UI; the app stays the only place
that knows it's themed.
