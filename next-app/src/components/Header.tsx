import {ComponentProps, ReactNode} from "react";

type Props = {
  children: ReactNode | string,
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
} & ComponentProps<"h1">

export default function Header({children, type, className, ...props}: Props) {
  const Tag = type || "h1";

  return (
    <Tag {...props} className={`text-accent-purple text-center ${className}`}>
      {children}
    </Tag>
  )
}