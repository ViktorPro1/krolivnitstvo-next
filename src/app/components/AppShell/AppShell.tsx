"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useCallback, type ReactNode } from "react";
import { supabase } from "../../lib/supabase";
import type { Session } from "@supabase/supabase-js";
import CopyProtection from "../CopyProtection/CopyProtection";
const Assistant = dynamic(() => import("../Assistant/Assistant"), {
  ssr: false,
});
import WelcomePopup from "../WelcomePopup/WelcomePopup";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { UpdatePrompt } from "../UpdatePrompt/UpdatePrompt";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
const AssistantPromo = dynamic(
  () => import("../AssistantPromo/AssistantPromo"),
  { ssr: false },
);
const CookieConsentBanner = dynamic(
  () => import("../CookieConsent/CookieConsent"),
  { ssr: false },
);
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { usePublicPresence } from "../../hooks/usePublicPresence";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import PrintButton from "../PrintButton/PrintButton";
import { SessionContext } from "../../context/SessionContext";

function cleanInvisibleUnicodeFromPath() {
  const invisibleCharsRegex = /[\u200B-\u200D\uFEFF\u2060-\u2064\u00AD]/g;
  const { pathname, search, hash } = window.location;
  const cleanPath = pathname.replace(invisibleCharsRegex, "");

  if (cleanPath !== pathname) {
    window.history.replaceState({}, "", (cleanPath || "/") + search + hash);
  }
}

function SubscriptionExpired() {
  async function handleLogout() {
    await supabase.auth.signOut();
  }

  return (
    <div className="subscription-expired-wrap">
      <div className="subscription-expired-card">
        <div className="subscription-expired-icon">Lock</div>
        <h2 className="subscription-expired-title">Підписка закінчилась</h2>

        <p className="subscription-expired-text">
          Вибачте, ваша підписка була деактивована. Для поновлення доступу
          зверніться до адміністратора:
        </p>

        <p className="subscription-expired-contact">
          Email:{" "}
          <a href="mailto:webstartstudio978@gmail.com">
            webstartstudio978@gmail.com
          </a>
        </p>

        <p className="subscription-expired-contact">
          Telegram:{" "}
          <a
            href="https://t.me/Viktor_freelancer_recruiting_pit"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </p>

        <button className="subscription-expired-btn" onClick={handleLogout}>
          Вийти
        </button>
      </div>
    </div>
  );
}

export default function AppShell({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasProfile, setHasProfile] = useState(true);
  const [loadingTimeout, setLoadingTimeout] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  const checkProfile = useCallback(async (userId: string) => {
    const { data } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", userId)
      .single();

    setHasProfile(!!data);
    setLoading(false);
  }, []);

  usePublicPresence();

  useEffect(() => {
    cleanInvisibleUnicodeFromPath();
  }, []);

  useEffect(() => {
    if (!loading) {
      const splash = document.getElementById("splash");
      if (splash) {
        splash.classList.add("splash--hidden");
      }
    }
  }, [loading]);

  useEffect(() => {
    const updateStatus = () => setIsOffline(!navigator.onLine);
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    updateStatus();
    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingTimeout(true);
    }, 30000);

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) checkProfile(session.user.id);
      else setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: string, session: Session | null) => {
        setSession(session);
        if (session) checkProfile(session.user.id);
        else setHasProfile(true);
      },
    );

    return () => {
      subscription.unsubscribe();
      clearTimeout(timer);
    };
  }, [checkProfile]);

  if (isOffline) {
    return (
      <div className="status-screen-wrap">
        <div className="status-screen-card">
          <div className="status-screen-icon">Offline</div>
          <h2 className="status-screen-title">Немає інтернету</h2>
          <p className="status-screen-text">
            Перевірте підключення і спробуйте ще раз
          </p>
          <button
            className="status-screen-btn"
            onClick={() => window.location.reload()}
          >
            Оновити сторінку
          </button>
        </div>
      </div>
    );
  }

  if (loading && loadingTimeout) {
    return (
      <div className="status-screen-wrap">
        <div className="status-screen-card">
          <div className="status-screen-icon">Offline</div>
          <h2 className="status-screen-title">Не вдалося підключитися</h2>
          <p className="status-screen-text">
            Перевірте інтернет і спробуйте ще раз.
          </p>
          <button
            className="status-screen-btn"
            onClick={() => window.location.reload()}
          >
            Оновити сторінку
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div className="status-screen-loading">Завантаження...</div>;
  }

  if (session && !hasProfile) return <SubscriptionExpired />;

  return (
    <SessionContext.Provider value={session}>
      <ErrorBoundary>
        <CopyProtection />
        <CookieConsentBanner />
        <WelcomePopup />
        <Assistant />
        <AssistantPromo />
        <Header session={session} />
        <div className="breadcrumbs-wrap">
          <Breadcrumbs />
        </div>
        {children}
        <PrintButton />
        <ScrollToTop />
        <Footer />
        <UpdatePrompt />
      </ErrorBoundary>
    </SessionContext.Provider>
  );
}
