import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {}

export function IconButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "p-1.5 size-9 flex items-center justify-center bg-gray-500 cursor-pointer text-blue rounded-md hover:bg-blue hover:text-gray-900 transition-colors duration-300",
        className
      )}
      {...props}
    />
  );
}
