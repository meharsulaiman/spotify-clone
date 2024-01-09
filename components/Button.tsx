import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, type = 'button', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={twMerge(
          `
      w-full rounded-full bg-green-500 px-3 py-3 border border-transparent disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition
    `,
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
