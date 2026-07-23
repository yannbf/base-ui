/**
 * @droppy/theme — theme-only package.
 *
 * This package ships a single stylesheet (`@droppy/theme/styles.css`) with
 * the Droppy design tokens and plain PascalCase component classes (one per
 * Base UI part, named `{Component}{Part}`), plus this lookup object mapping
 * Base UI part names to those class names. There are no component wrappers:
 * import `@base-ui/react` parts directly and bind the class at each call
 * site —
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
  Button: 'Button',

  FieldRoot: 'FieldRoot',
  FieldLabel: 'FieldLabel',
  FieldDescription: 'FieldDescription',
  FieldError: 'FieldError',

  Input: 'Input',

  DialogBackdrop: 'DialogBackdrop',
  DialogPopup: 'DialogPopup',
  DialogTitle: 'DialogTitle',
  DialogDescription: 'DialogDescription',

  DrawerBackdrop: 'DrawerBackdrop',
  DrawerPopup: 'DrawerPopup',
  DrawerTitle: 'DrawerTitle',

  TooltipPopup: 'TooltipPopup',

  AccordionRoot: 'AccordionRoot',
  AccordionItem: 'AccordionItem',
  AccordionHeader: 'AccordionHeader',
  AccordionTrigger: 'AccordionTrigger',
  AccordionIcon: 'AccordionIcon',
  AccordionPanel: 'AccordionPanel',
  AccordionContent: 'AccordionContent',

  AvatarRoot: 'AvatarRoot',
  AvatarImage: 'AvatarImage',
  AvatarFallback: 'AvatarFallback',

  CheckboxLabel: 'CheckboxLabel',
  CheckboxRoot: 'CheckboxRoot',
  CheckboxIndicator: 'CheckboxIndicator',

  CheckboxGroupRoot: 'CheckboxGroupRoot',
  CheckboxGroupItem: 'CheckboxGroupItem',

  FieldsetRoot: 'FieldsetRoot',
  FieldsetLegend: 'FieldsetLegend',

  RadioGroupRoot: 'RadioGroupRoot',
  RadioGroupItem: 'RadioGroupItem',
  RadioRoot: 'RadioRoot',
  RadioIndicator: 'RadioIndicator',

  SwitchLabel: 'SwitchLabel',
  SwitchRoot: 'SwitchRoot',
  SwitchThumb: 'SwitchThumb',

  ToggleRoot: 'ToggleRoot',

  ToggleGroupRoot: 'ToggleGroupRoot',
  ToggleGroupItem: 'ToggleGroupItem',

  MeterRoot: 'MeterRoot',
  MeterLabel: 'MeterLabel',
  MeterValue: 'MeterValue',
  MeterTrack: 'MeterTrack',
  MeterIndicator: 'MeterIndicator',
  MeterIndicatorLow: 'MeterIndicatorLow',
  MeterIndicatorHigh: 'MeterIndicatorHigh',

  ProgressRoot: 'ProgressRoot',
  ProgressLabel: 'ProgressLabel',
  ProgressValue: 'ProgressValue',
  ProgressTrack: 'ProgressTrack',
  ProgressIndicator: 'ProgressIndicator',
} as const;

export default theme;
