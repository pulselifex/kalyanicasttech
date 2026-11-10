import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/containers-solutions/application-specific-designs")({
  head: () => pageHead("/containers-solutions/application-specific-designs"),
  component: Page,
});

function Page() {
  return <ContentPage url="/containers-solutions/application-specific-designs" />;
}
