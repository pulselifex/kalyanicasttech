import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/investors/investor-grievance-contact")({
  head: () => pageHead("/investors/investor-grievance-contact"),
  component: Page,
});

function Page() {
  return <ContentPage url="/investors/investor-grievance-contact" />;
}
