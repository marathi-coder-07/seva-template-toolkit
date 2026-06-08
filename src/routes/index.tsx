import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplatesPage } from "@/pages/SolutionTemplates/SolutionTemplates";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solution Templates · SevaPremi Ghatkopar" },
      { name: "description", content: "Expert-verified climate solution playbooks for Ghatkopar T-Ward — search, filter, and adopt." },
      { property: "og:title", content: "SevaPremi · Solution Templates" },
      { property: "og:description", content: "Eight expert-verified solution templates built on real Ghatkopar data." },
    ],
  }),
  component: SolutionTemplatesPage,
});
