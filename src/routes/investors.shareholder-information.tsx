import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/investors/shareholder-information")({
  head: () => pageHead("/investors/shareholder-information"),
  component: Page,
});

function Page() {
  return <ContentPage url="/investors/shareholder-information" />;
}
