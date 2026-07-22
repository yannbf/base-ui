'use client';
import { Input as BaseInput } from '@base-ui/react/input';
import { withClassName } from './withClassName';

/**
 * Mealdrop-themed Base UI Input (sunken surface, control radius, single
 * focus ring). Styled via the `md-Input` class.
 */
export const Input = withClassName(BaseInput, 'md-Input');
