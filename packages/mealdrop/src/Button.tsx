'use client';
import { Button as BaseButton } from '@base-ui/react/button';
import { withClassName } from './withClassName';

/**
 * Mealdrop-themed Base UI Button. Styled by `@base-ui/mealdrop/styles.css`
 * via the `md-Button` class; all Base UI props and the ref pass through.
 */
export const Button = withClassName(BaseButton, 'md-Button');
