import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { UpsellPage } from "../app-coachluca/components/UpsellPage";
import { UserSession } from "../app-coachluca/types";
import { loadUserSessionFromBackend, saveUserSessionToBackend } from "../app-coachluca/utils/mockBackendService";
import { useGeoTime } from "../app-coachluca/utils/useGeoTime";
import {
  fbq,
  trackPageView,
  trackPlanCheckoutClick,
  trackViewContent,
} from "../pixel";

export const Route = createFileRoute("/upsell")({
  head: () => ({
    meta: [
      { title: "⚠️ Paso 2 de 2: Oferta Única VIP · Protocolo Acelerador 3X" },
      {
        name: "description",
        content:
          "Oferta exclusiva de un solo clic para triplicar los resultados de tus glúteos en 7 a 14 días con el Protocolo Acelerador 3X VIP.",
      },
      { property: "og:title", content: "⚠️ Oferta Única VIP · Protocolo Acelerador Glúteos 3X" },
      {
        property: "og:description",
        content:
          "Desbloquea la máxima hipertrofia glútea en tiempo récord con activación neuromuscular profunda y guía nutricional anti-grasa.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: UpsellRouteComponent,
});

export default function UpsellRouteComponent() {
  const navigate = useNavigate();
  const geoTime = useGeoTime();

  const [userSession, setUserSession] = useState<UserSession>(() => {
    const existing = loadUserSessionFromBackend();
    if (existing) return existing;
    return {
      email: "alumna.vip@gluteos28.com",
      name: "Alumna VIP",
      plan: "Desafío Glúteos 28 Días · Acceso Vitalicio",
      purchasedAt: "Hoy",
      isVerified: true,
      ip: "187.19.120.45",
      hasUpsell: false,
      savedVia: "Cookie + IP Backend",
    };
  });

  // Metrificação oficial do Pixel na página de Upsell
  useEffect(() => {
    trackPageView("Upsell - Protocolo Acelerador 3X VIP");
    trackViewContent("Upsell Protocolo Acelerador 3X", {
      value: 19.0,
      currency: "USD",
      content_category: "Upsell OTO",
      content_ids: ["ACELERADOR3X_VIP"],
    });
  }, []);

  const handleAcceptUpsell = (updated: UserSession) => {
    setUserSession(updated);
    saveUserSessionToBackend(updated, geoTime.ip);

    // Rastreia conversão do Upsell no Pixel
    trackPlanCheckoutClick("vip", 19.0, "upsell_page_accept");
    fbq("track", "Purchase", {
      content_name: "Protocolo Acelerador 3X VIP",
      content_category: "Upsell OTO",
      content_ids: ["ACELERADOR3X_VIP"],
      value: 19.0,
      currency: "USD",
      num_items: 1,
    });

    setTimeout(() => {
      window.location.href = "/app-coachluca";
    }, 1200);
  };

  const handleDeclineUpsell = () => {
    window.location.href = "/app-coachluca";
  };

  const handleGoToApp = () => {
    window.location.href = "/app-coachluca";
  };

  return (
    <UpsellPage
      userSession={userSession}
      onAcceptUpsell={handleAcceptUpsell}
      onDeclineUpsell={handleDeclineUpsell}
      onGoToApp={handleGoToApp}
    />
  );
}
