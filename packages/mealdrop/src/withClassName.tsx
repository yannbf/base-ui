import * as React from 'react';

type AnyComponent = React.ElementType;

/**
 * Returns a wrapper around a Base UI part that always carries the given
 * package className, merged with (and after) any user-provided className —
 * including Base UI's state-callback form. All other props and the ref pass
 * straight through.
 */
export function withClassName<C extends AnyComponent>(Part: C, mdClassName: string): C {
  const Comp = Part as React.ElementType;
  const Wrapped = React.forwardRef<unknown, { className?: unknown; [key: string]: unknown }>(
    function Wrapped(props, ref) {
      const { className, ...other } = props;
      const mergedClassName =
        typeof className === 'function'
          ? (...args: unknown[]) => {
              const result = (className as (...a: unknown[]) => string | undefined)(...args);
              return result ? `${mdClassName} ${result}` : mdClassName;
            }
          : className
            ? `${mdClassName} ${className as string}`
            : mdClassName;
      return <Comp ref={ref} {...other} className={mergedClassName} />;
    },
  );
  Wrapped.displayName = `Mealdrop(${mdClassName})`;
  return Wrapped as unknown as C;
}
