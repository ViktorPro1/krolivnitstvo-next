// src/app/components/Footer/Footer.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import "./Footer.css";

const Footer = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/logo.webp"
              alt="Кролівництво від А до Я"
              className="footer-brand-icon"
            />
            <div>
              <div className="footer-brand-name">Кролівництво від А до Я</div>
              <div className="footer-brand-sub">
                Довідник для кролівників України
              </div>
              <div className="footer-brand-origin">
                Розроблено на Хмельниччині
              </div>
            </div>
          </div>

          <div className="footer-links">
            <Link href="/about">Про проєкт</Link>
            <Link href="/privacy-policy">Конфіденційність</Link>
            <Link href="/terms-of-use">Умови</Link>
            <button
              className="footer-feedback-btn"
              onClick={() => setFeedbackOpen(true)}
            >
              ✉ Зворотний зв'язок
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-text">© 2026 Кролівництво від А до Я</span>
        </div>
      </footer>

      <FeedbackModal isOpen={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </>
  );
};

export default Footer;
