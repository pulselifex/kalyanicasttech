import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/resources/product-data-sheets")({
  head: () => pageHead("/resources/product-data-sheets"),
  component: Page,
});

function Page() {
  return <ContentPage url="/resources/product-data-sheets" />;
}
