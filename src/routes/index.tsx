import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { loadStudio } from "@/content/studio";

export const Route = createFileRoute("/")({
  loader: async () => ({ studio: await loadStudio() }),
  component: function Home() {
    const { studio } = Route.useLoaderData();
    return <HomePage studio={studio} />;
  },
});
