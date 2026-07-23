/**
 * @base-ui/mealdrop — theme-only package.
 *
 * This package ships a single stylesheet (`@base-ui/mealdrop/styles.css`)
 * with the Mealdrop design tokens and `md-*` component classes. There are
 * no component wrappers: apply the classes directly to `@base-ui/react`
 * parts at your call sites (see the README for an example).
 *
 * The constants below mirror the class names documented in `styles.css`.
 * They're offered for convenience (docs, tests, avoiding typos) — using the
 * literal string is equally correct.
 */

export const buttonClass = 'md-Button';

export const fieldRootClass = 'md-FieldRoot';
export const fieldLabelClass = 'md-FieldLabel';
export const fieldDescriptionClass = 'md-FieldDescription';
export const fieldErrorClass = 'md-FieldError';

export const inputClass = 'md-Input';

export const dialogBackdropClass = 'md-DialogBackdrop';
export const dialogPopupClass = 'md-DialogPopup';
export const dialogTitleClass = 'md-DialogTitle';
export const dialogDescriptionClass = 'md-DialogDescription';

export const drawerBackdropClass = 'md-DrawerBackdrop';
export const drawerPopupClass = 'md-DrawerPopup';
export const drawerTitleClass = 'md-DrawerTitle';

export const tooltipPopupClass = 'md-TooltipPopup';
