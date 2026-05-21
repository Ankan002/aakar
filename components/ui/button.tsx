"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	[
		"inline-flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer",
		"font-medium tracking-tight transition-colors",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		"disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
		"[&_svg]:size-3.5 [&_svg]:shrink-0",
	].join(" "),
	{
		variants: {
			variant: {
				primary:
					"bg-primary text-primary-foreground border border-accent-2/40 hover:bg-accent-2 hover:border-accent-2",
				ghost: "border border-border text-fg-2 hover:bg-hover hover:text-fg",
				subtle: "bg-surface border border-border text-fg hover:bg-hover",
				danger:
					"border border-err-soft text-err hover:bg-err-soft hover:text-err",
			},
			size: {
				sm: "h-7 rounded-sm px-2.5 text-xs",
				md: "h-8 rounded-md px-3 text-sm",
				lg: "h-10 rounded-md px-4 text-sm",
				icon: "h-8 w-8 rounded-md",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				ref={ref}
				className={cn(buttonVariants({ variant, size }), className)}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
