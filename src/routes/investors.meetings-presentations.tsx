import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/investors/meetings-presentations")({
  head: () => pageHead("/investors/meetings-presentations"),
  component: Page,
});

function Page() {
  return <ContentPage url="/investors/meetings-presentations" />;
}
