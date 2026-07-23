# @droppy/theme

Droppy theme for Base UI — a stylesheet plus a class-name lookup object. No component
wrappers: bind the class at every site of use, in feature code.

```bash
npm install "@droppy/theme@https://pkg.pr.new/storybook-tmp/base-ui/@droppy/theme@<sha>"
```

```tsx
// app entry, once:
import '@droppy/theme/styles.css';
```

```tsx
// anywhere in feature code:
import { Select } from '@base-ui/react/select';
import theme from '@droppy/theme';

<Select className={theme.Select} ... />
```

Dark mode: set `data-theme="dark"` on `<html>` (falls back to the system preference when
unset). `theme` has one entry per `md-*` class in `styles.css` — `theme.Button`,
`theme.FieldRoot`, `theme.DialogPopup`, `theme.DrawerPopup`, `theme.TooltipPopup`, and so on;
see `src/styles.css` for the full list. Named constants (`buttonClass`, `dialogPopupClass`, …)
are also exported for convenience — same strings, just not namespaced under `theme`.

## Why no component layer (yet)

This is milestone 1, and the lack of a component layer is deliberate, not an oversight:
class binding happens at every call site, in feature code, with no wrapper hiding it. That
friction is the point — it's meant to demonstrate what raw Base UI consumption actually
costs before a design system layer exists. Composed/variant styling (an icon button's
padding, a modal's position, a drawer's width) is app-level CSS or `styled()` composed at
the call site, not a shared wrapper.

A richer "Droppy" component layer that removes this per-call-site tax — the shape the earlier
`@base-ui/mealdrop` wrappers previewed — is a later phase, built once the milestone-1 cost is
measured.
