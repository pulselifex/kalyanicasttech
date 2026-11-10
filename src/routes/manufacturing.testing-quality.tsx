import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/manufacturing/testing-quality")({
  beforeLoad: () => {
    throw redirect({ to: "/engineering-quality", statusCode: 301 });
  },
  component: () => null,
});
