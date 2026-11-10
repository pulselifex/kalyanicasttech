import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => pageHead("/"),
  component: HomePage,
});
