'use client';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { withClassName } from './withClassName';

/**
 * Mealdrop-themed Base UI Dialog parts: sheet radius, overlay surface and
 * shadow, scrimmed backdrop, brief ease-in open/close motion. Styled via
 * `md-Dialog*` classes; unthemed parts re-export unchanged.
 */
export const Dialog = {
  ...BaseDialog,
  Backdrop: withClassName(BaseDialog.Backdrop, 'md-DialogBackdrop'),
  Popup: withClassName(BaseDialog.Popup, 'md-DialogPopup'),
  Title: withClassName(BaseDialog.Title, 'md-DialogTitle'),
  Description: withClassName(BaseDialog.Description, 'md-DialogDescription'),
};
