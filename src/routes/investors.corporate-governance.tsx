import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/investors/corporate-governance")({
  head: () => pageHead("/investors/corporate-governance"),
  component: Page,
});

function Page() {
  return <ContentPage url="/investors/corporate-governance" />;
}
