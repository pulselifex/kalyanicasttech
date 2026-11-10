import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/resources/corporate-profile-brochures")({
  head: () => pageHead("/resources/corporate-profile-brochures"),
  component: Page,
});

function Page() {
  return <ContentPage url="/resources/corporate-profile-brochures" />;
}
