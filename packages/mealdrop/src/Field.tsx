'use client';
import { Field as BaseField } from '@base-ui/react/field';
import { withClassName } from './withClassName';

/**
 * Mealdrop-themed Base UI Field parts. Styled via `md-Field*` classes in
 * `@base-ui/mealdrop/styles.css`; unthemed parts re-export unchanged.
 */
export const Field = {
  ...BaseField,
  Root: withClassName(BaseField.Root, 'md-FieldRoot'),
  Label: withClassName(BaseField.Label, 'md-FieldLabel'),
  Description: withClassName(BaseField.Description, 'md-FieldDescription'),
  Error: withClassName(BaseField.Error, 'md-FieldError'),
};
