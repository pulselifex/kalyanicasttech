import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/manufacturing/container-manufacturing")({
  head: () => pageHead("/manufacturing/container-manufacturing"),
  component: Page,
});

function Page() {
  return <ContentPage url="/manufacturing/container-manufacturing" />;
}
