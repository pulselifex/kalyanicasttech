import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/manufacturing/facilities-locations")({
  beforeLoad: () => {
    throw redirect({ to: "/facilities", statusCode: 301 });
  },
  component: () => null,
});
