import { forwardRef } from 'react';
import { Button } from '@mantine/core';

const PrimaryButton = forwardRef(
  (
    {
      variant = 'filled',
      rootClassName,
      titleClassName,
      isDisabled,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <Button
        variant={variant}
        disabled={isDisabled}
        classNames={{
          root: `${rootClassName}`,
          label: `${titleClassName}`,
        }}
        {...rest}
        ref={ref}
      >
        {children}
      </Button>
    );
  }
);
PrimaryButton.displayName = 'PrimaryButton';
export default PrimaryButton;
