import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/business-enquiry")({
  beforeLoad: () => {
    throw redirect({ to: "/contact", statusCode: 301 });
  },
  component: () => null,
});
