'use client';
import { Drawer as BaseDrawer } from '@base-ui/react/drawer';
import { withClassName } from './withClassName';

/**
 * Mealdrop-themed Base UI Drawer parts: right-side sheet with leading-edge
 * radius, overlay shadow, scrimmed backdrop, 300ms ease-in slide. Panel
 * width defaults to var(--md-drawer-width, 420px). Styled via `md-Drawer*`
 * classes; unthemed parts re-export unchanged.
 */
export const Drawer = {
  ...BaseDrawer,
  Backdrop: withClassName(BaseDrawer.Backdrop, 'md-DrawerBackdrop'),
  Popup: withClassName(BaseDrawer.Popup, 'md-DrawerPopup'),
  Title: withClassName(BaseDrawer.Title, 'md-DrawerTitle'),
};
