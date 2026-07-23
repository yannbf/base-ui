/**
 * @droppy/theme — theme-only package, milestone 1.
 *
 * This package ships a single stylesheet (`@droppy/theme/styles.css`) with
 * the Droppy design tokens and `md-*` component classes, plus this lookup
 * object mapping Base UI part names to those class names. There are no
 * component wrappers: import `@base-ui/react` parts directly and bind the
 * class at each call site —
 *
 *   import { Button } from '@base-ui/react/button';
 *   import theme from '@droppy/theme';
 *
 *   <Button className={theme.Button}>Order now</Button>
 *
 * This is deliberate, not an oversight: milestone 1 is raw Base UI
 * consumption, friction included. A richer "Droppy" component layer that
 * removes the per-call-site tax is a later phase — see the README.
 */

const theme = {
  Button: 'md-Button',

  FieldRoot: 'md-FieldRoot',
  FieldLabel: 'md-FieldLabel',
  FieldDescription: 'md-FieldDescription',
  FieldError: 'md-FieldError',

  Input: 'md-Input',

  DialogBackdrop: 'md-DialogBackdrop',
  DialogPopup: 'md-DialogPopup',
  DialogTitle: 'md-DialogTitle',
  DialogDescription: 'md-DialogDescription',

  DrawerBackdrop: 'md-DrawerBackdrop',
  DrawerPopup: 'md-DrawerPopup',
  DrawerTitle: 'md-DrawerTitle',

  TooltipPopup: 'md-TooltipPopup',
} as const;

export default theme;

// Named constants, kept for convenience (docs, tests, avoiding typos) —
// mirror the same class names as `theme`.
export const buttonClass = theme.Button;

export const fieldRootClass = theme.FieldRoot;
export const fieldLabelClass = theme.FieldLabel;
export const fieldDescriptionClass = theme.FieldDescription;
export const fieldErrorClass = theme.FieldError;

export const inputClass = theme.Input;

export const dialogBackdropClass = theme.DialogBackdrop;
export const dialogPopupClass = theme.DialogPopup;
export const dialogTitleClass = theme.DialogTitle;
export const dialogDescriptionClass = theme.DialogDescription;

export const drawerBackdropClass = theme.DrawerBackdrop;
export const drawerPopupClass = theme.DrawerPopup;
export const drawerTitleClass = theme.DrawerTitle;

export const tooltipPopupClass = theme.TooltipPopup;
