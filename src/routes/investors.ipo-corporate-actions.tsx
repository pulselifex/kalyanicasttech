import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/investors/ipo-corporate-actions")({
  head: () => pageHead("/investors/ipo-corporate-actions"),
  component: Page,
});

function Page() {
  return <ContentPage url="/investors/ipo-corporate-actions" />;
}
