// src/app/components/Header/Header.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import type { Session } from "@supabase/supabase-js";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { CHANGELOG } from "../../../data/changelog";
import {
  Calculator,
  Users,
  Bell,
  CreditCard,
  Rabbit,
  ShieldCheck,
  LogIn,
  LogOut,
} from "lucide-react";
import "./Header.css";

interface Props {
  session: Session | null;
}

const Header = ({ session }: Props) => {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const swipeStartX = useRef<number | null>(null);

  // localStorage недоступний на сервері — рахуємо непрочитане після монтування
  useEffect(() => {
    const lastSeen = localStorage.getItem("changelog_last_seen");
    if (!lastSeen) {
      setUnreadCount(CHANGELOG.length);
    } else {
      setUnreadCount(CHANGELOG.filter((e) => e.created_at > lastSeen).length);
    }
  }, []);

  useEffect(() => {
    if (!session) return;
    let cancelled = false;
    supabase
      .from("admins")
      .select("user_id")
      .eq("user_id", session.user.id)
      .single()
      .then(({ data }) => {
        if (!cancelled) setIsAdmin(!!data);
      });
    return () => {
      cancelled = true;
      setIsAdmin(false);
    };
  }, [session]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function toggleDropdown() {
    if (!showDropdown) {
      localStorage.setItem("changelog_last_seen", new Date().toISOString());
      setUnreadCount(0);
    }
    setShowDropdown((prev) => !prev);
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("uk-UA", {
      day: "numeric",
      month: "long",
    });
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setMenuOpen(false);
  }

  const closeMenu = () => setMenuOpen(false);
  const isActive = (href: string) => (pathname === href ? "active" : "");
  const recent = [...CHANGELOG].reverse().slice(0, 3);

  return (
    <>
      <header className="header">
        <Link href="/" className="header-logo" onClick={closeMenu}>
          <span>🇺🇦</span>
          <span>Кролівництво від А до Я</span>
        </Link>

        <nav className="header-nav header-nav--desktop">
          <Link href="/calculator" className={isActive("/calculator")}>
            Калькулятор
          </Link>
          <Link href="/community" className={isActive("/community")}>
            Спільноти
          </Link>

          <div className="changelog-menu" ref={dropdownRef}>
            <button className="changelog-trigger" onClick={toggleDropdown}>
              Оновлення
              {unreadCount > 0 && (
                <span className="changelog-badge">{unreadCount}</span>
              )}
            </button>

            {showDropdown && (
              <div className="changelog-dropdown">
                {recent.map((entry) => (
                  <div key={entry.id} className="changelog-item">
                    <span className="changelog-item-title">{entry.title}</span>
                    {entry.description && (
                      <span className="changelog-item-desc">
                        {entry.description}
                      </span>
                    )}
                    <span className="changelog-item-date">
                      {formatDate(entry.created_at)}
                    </span>
                  </div>
                ))}
                <Link
                  href="/changelog"
                  className="changelog-all"
                  onClick={() => setShowDropdown(false)}
                >
                  Всі оновлення →
                </Link>
              </div>
            )}
          </div>

          <Link href="/subscription" className={isActive("/subscription")}>
            Підписка
          </Link>
          {session ? (
            <>
              <Link href="/registry" className={isActive("/registry")}>
                Мої кролики
              </Link>
              {isAdmin && (
                <Link href="/admin" className={isActive("/admin")}>
                  Адмін
                </Link>
              )}
              <button className="header-logout" onClick={handleLogout}>
                Вийти
              </button>
            </>
          ) : (
            <Link href="/auth" className={isActive("/auth")}>
              Увійти
            </Link>
          )}
          <ThemeToggle />
        </nav>

        <div className="header-mobile-right">
          <ThemeToggle />
          <button
            className="burger-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Меню"
            aria-expanded={menuOpen}
          >
            <span
              className={`burger-icon ${menuOpen ? "burger-icon--open" : ""}`}
            >
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`drawer-overlay ${menuOpen ? "drawer-overlay--visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav
        className={`drawer ${menuOpen ? "drawer--open" : ""}`}
        aria-label="Мобільне меню"
        onTouchStart={(e) => {
          swipeStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (swipeStartX.current === null) return;
          const diff = swipeStartX.current - e.changedTouches[0].clientX;
          if (diff < -60) closeMenu();
          swipeStartX.current = null;
        }}
      >
        <div className="drawer-header">
          <span className="drawer-logo">🐇 Меню</span>
          <button className="drawer-close" onClick={closeMenu} aria-label="Закрити меню">
            ✕
          </button>
        </div>

        <div className="drawer-links">
          <Link href="/calculator" onClick={closeMenu}>
            <Calculator size={18} />
            Калькулятор
          </Link>
          <Link href="/community" onClick={closeMenu}>
            <Users size={18} />
            Спільноти
          </Link>
          <Link
            href="/changelog"
            onClick={() => {
              localStorage.setItem("changelog_last_seen", new Date().toISOString());
              setUnreadCount(0);
              closeMenu();
            }}
          >
            <Bell size={18} />
            Оновлення
            {unreadCount > 0 && (
              <span className="changelog-badge">{unreadCount}</span>
            )}
          </Link>
          <Link href="/subscription" onClick={closeMenu}>
            <CreditCard size={18} />
            Підписка
          </Link>
          {session ? (
            <>
              <Link href="/registry" onClick={closeMenu}>
                <Rabbit size={18} />
                Мої кролики
              </Link>
              {isAdmin && (
                <Link href="/admin" onClick={closeMenu}>
                  <ShieldCheck size={18} />
                  Адмін
                </Link>
              )}
              <button className="drawer-logout" onClick={handleLogout}>
                <LogOut size={18} />
                Вийти
              </button>
            </>
          ) : (
            <Link href="/auth" onClick={closeMenu}>
              <LogIn size={18} />
              Увійти
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
