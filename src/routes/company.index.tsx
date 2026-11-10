import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/company/")({
  beforeLoad: () => {
    throw redirect({ to: "/about-us", statusCode: 301 });
  },
  component: () => null,
});
