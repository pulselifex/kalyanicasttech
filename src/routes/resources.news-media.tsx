import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/resources/news-media")({
  head: () => pageHead("/resources/news-media"),
  component: Page,
});

function Page() {
  return <ContentPage url="/resources/news-media" />;
}
