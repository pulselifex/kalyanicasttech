import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/shivlakha-rail-logistics/gati-shakti-cargo-terminal")({
  beforeLoad: () => {
    throw redirect({
      to: "/shivlakha-rail-logistics/gati-shakti-terminal",
      statusCode: 301,
    });
  },
  component: () => null,
});
