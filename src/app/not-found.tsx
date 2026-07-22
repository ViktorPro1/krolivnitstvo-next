import Link from "next/link";
import "./styles/not-found.css";

export default function NotFound() {
  return (
    <div className="nf-container">
      <div className="nf-illustration" aria-hidden="true">
        <div className="nf-trail">
          <span className="nf-paw nf-paw-1">🐾</span>
          <span className="nf-paw nf-paw-2">🐾</span>
          <span className="nf-paw nf-paw-3">🐾</span>
          <span className="nf-paw nf-paw-4">🐾</span>
        </div>
        <div className="nf-mound" />
        <span className="nf-rabbit">🐰</span>
        <div className="nf-hole" />
      </div>

      <p className="nf-eyebrow">Помилка 404</p>
      <h1 className="nf-title">Сторінку не знайдено</h1>
      <p className="nf-text">
        Здається, кролик прорив нору не туди. Такої сторінки не існує або її
        було переміщено.
      </p>

      <Link href="/" className="nf-button">
        <span className="nf-button-icon">🏡</span>
        Повернутися на головну
      </Link>
    </div>
  );
}
