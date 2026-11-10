import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/containers-solutions/rail-parcel-vehicle-cargo")({
  head: () => pageHead("/containers-solutions/rail-parcel-vehicle-cargo"),
  component: Page,
});

function Page() {
  return <ContentPage url="/containers-solutions/rail-parcel-vehicle-cargo" />;
}
