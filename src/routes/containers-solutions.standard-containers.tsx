import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/containers-solutions/standard-containers")({
  head: () => pageHead("/containers-solutions/standard-containers"),
  component: Page,
});

function Page() {
  return <ContentPage url="/containers-solutions/standard-containers" />;
}
