import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/containers-solutions/")({
  beforeLoad: () => {
    throw redirect({ to: "/products-applications", statusCode: 301 });
  },
  component: () => null,
});
