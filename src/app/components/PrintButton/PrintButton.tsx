"use client";

import { useState, useEffect } from "react";
import "./PrintButton.css";

interface PrintButtonProps {
  sourceLabel?: string;
}

const PrintButton = ({ sourceLabel }: PrintButtonProps) => {
  const [pageUrl, setPageUrl] = useState("");
  const [pageOrigin, setPageOrigin] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
    setPageOrigin(window.location.origin);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const today = new Date().toLocaleDateString("uk-UA");

  return (
    <>
      <button
        type="button"
        className="print-button"
        onClick={handlePrint}
        aria-label="Роздрукувати або зберегти як PDF"
      >
        🖨️ Друкувати / Зберегти PDF
      </button>

      <div className="print-footer">
        <p>Джерело: {pageUrl}</p>
        {sourceLabel && <p>Звірено з: {sourceLabel}</p>}
        <p>Дата друку: {today}</p>
        <p>Кролівництво від А до Я — {pageOrigin}</p>
      </div>
    </>
  );
};

export default PrintButton;
