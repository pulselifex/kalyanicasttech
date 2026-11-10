import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/resources/quality-certifications")({
  head: () => pageHead("/resources/quality-certifications"),
  component: Page,
});

function Page() {
  return <ContentPage url="/resources/quality-certifications" />;
}
