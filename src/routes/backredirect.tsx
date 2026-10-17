import { createFileRoute } from "@tanstack/react-router";
import OfertaEspecialPage from "./oferta-especial";

export const Route = createFileRoute("/backredirect")({
  head: () => ({
    meta: [
      { title: "¡Espera! Oferta Especial Exclusiva | BrazilianBooty 28 Días" },
      {
        name: "description",
        content:
          "No te vayas con las manos vacías. Reclama tu cupón exclusivo con 90% de descuento y llévate el Desafío de 28 Días.",
      },
      { property: "og:title", content: "¡Espera! Oferta Especial Exclusiva" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: OfertaEspecialPage,
});

