"use client";

import FatteningPublic from "../../../_pages/FatteningPublic/FatteningPublic";

// УВАГА: оригінальний компонент, найімовірніше, читає параметр через
// useParams() з react-router-dom. Потрібно відредагувати FatteningPublic.tsx,
// щоб він приймав "id" пропсом замість useParams(), або
// прокинути значення інакше.
export default function Page({ params }: { params: { id: string } }) {
  return <FatteningPublic id={params.id} />;
}
