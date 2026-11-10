import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/company/our-business")({
  head: () => pageHead("/company/our-business"),
  component: Page,
});

function Page() {
  return <ContentPage url="/company/our-business" />;
}
