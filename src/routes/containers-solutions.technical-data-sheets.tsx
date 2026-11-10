import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/containers-solutions/technical-data-sheets")({
  head: () => pageHead("/containers-solutions/technical-data-sheets"),
  component: Page,
});

function Page() {
  return <ContentPage url="/containers-solutions/technical-data-sheets" />;
}
