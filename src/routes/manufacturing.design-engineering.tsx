import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/manufacturing/design-engineering")({
  head: () => pageHead("/manufacturing/design-engineering"),
  component: Page,
});

function Page() {
  return <ContentPage url="/manufacturing/design-engineering" />;
}
