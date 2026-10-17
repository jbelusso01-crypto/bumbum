import { createFileRoute } from "@tanstack/react-router";
import { Index as QuizScreen } from "./index";

export const Route = createFileRoute("/quiz")({
  validateSearch: (search: Record<string, unknown>) => ({
    etapa: typeof search.etapa === "string" ? search.etapa : undefined,
    step: typeof search.step === "string" ? search.step : undefined,
    slug: typeof search.slug === "string" ? search.slug : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Quiz de Glúteos 28 Días | Coach Luca" },
      {
        name: "description",
        content:
          "Responde un test breve y descubre una ruta de entrenamiento en casa adaptada a tu tiempo, objetivo y nivel.",
      },
      { property: "og:title", content: "Quiz Glúteos 28 Días - Coach Luca" },
      { property: "og:description", content: "Descubre tu ruta personalizada de activación glútea." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: QuizScreen,
});
