import { Link, useRouter } from "@tanstack/react-router";
import type { ComponentProps } from "react";

/** Link for content-driven paths that are known to exist as route files. */
export function SiteLink({
  to,
  children,
  activeProps,
  ...props
}: Omit<ComponentProps<typeof Link>, "to"> & { to: string }) {
  const router = useRouter({ warn: false });

  if (!router) {
    return (
      <a href={to} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to as "/"} activeProps={activeProps} {...props}>
      {children}
    </Link>
  );
}
