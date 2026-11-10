import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/containers-solutions/specialised-containers")({
  head: () => pageHead("/containers-solutions/specialised-containers"),
  component: Page,
});

function Page() {
  return <ContentPage url="/containers-solutions/specialised-containers" />;
}
