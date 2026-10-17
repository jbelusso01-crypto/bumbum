import { createFileRoute } from "@tanstack/react-router";
import App from "../app-coachluca/App";

export const Route = createFileRoute("/app-coachluca")({
  head: () => ({
    meta: [
      { title: "App Oficial Coach Luca · Desafío Glúteos 28 Días" },
      {
        name: "description",
        content:
          "Plataforma oficial de entrenamiento biomecánico, nutrición aceleradora de glúteos y asesoría del Coach Luca.",
      },
      { property: "og:title", content: "App Coach Luca · Desafío Glúteos 28 Días" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AppRouteComponent,
});

export default function AppRouteComponent() {
  // Entregável oficial - Pixel é 100% desligado nesta rota
  return <App />;
}
