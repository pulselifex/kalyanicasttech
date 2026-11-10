import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/investors/stock-exchange-disclosures")({
  head: () => pageHead("/investors/stock-exchange-disclosures"),
  component: Page,
});

function Page() {
  return <ContentPage url="/investors/stock-exchange-disclosures" />;
}
