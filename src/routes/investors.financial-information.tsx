import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/investors/financial-information")({
  head: () => pageHead("/investors/financial-information"),
  component: Page,
});

function Page() {
  return <ContentPage url="/investors/financial-information" />;
}
