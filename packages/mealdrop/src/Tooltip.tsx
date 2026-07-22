'use client';
import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import { withClassName } from './withClassName';

/**
 * Mealdrop-themed Base UI Tooltip: small floater on the overlay surface with
 * card radius, lift shadow, fast ease-in fade/scale. Styled via the
 * `md-TooltipPopup` class; unthemed parts re-export unchanged.
 */
export const Tooltip = {
  ...BaseTooltip,
  Popup: withClassName(BaseTooltip.Popup, 'md-TooltipPopup'),
};
