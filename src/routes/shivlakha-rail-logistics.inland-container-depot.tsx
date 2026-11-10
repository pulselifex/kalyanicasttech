import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/shivlakha-rail-logistics/inland-container-depot")({
  beforeLoad: () => {
    throw redirect({
      to: "/shivlakha-rail-logistics/inland-container-terminal",
      statusCode: 301,
    });
  },
  component: () => null,
});
