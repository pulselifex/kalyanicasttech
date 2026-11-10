import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/shivlakha-rail-logistics/gati-shakti-terminal")({
  head: () => pageHead("/shivlakha-rail-logistics/gati-shakti-terminal"),
  component: Page,
});

function Page() {
  return <ContentPage url="/shivlakha-rail-logistics/gati-shakti-terminal" />;
}
