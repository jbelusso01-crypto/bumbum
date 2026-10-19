import { createFileRoute } from "@tanstack/react-router";
import { Index as QuizScreen } from "./index";

// Preview interno do funil: quiz + VSL com o botão de compra liberado na hora.
// O Pixel não dispara nesta rota (ver PIXEL_BLOCKED_PREFIXES em pixel.ts).
export const Route = createFileRoute("/preview")({
  validateSearch: (search: Record<string, unknown>) => ({
    etapa: typeof search.etapa === "string" ? search.etapa : undefined,
    step: typeof search.step === "string" ? search.step : undefined,
    slug: typeof search.slug === "string" ? search.slug : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Preview | BrazilianBooty" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PreviewScreen,
});

function PreviewScreen() {
  return <QuizScreen skipVslDelay />;
}
