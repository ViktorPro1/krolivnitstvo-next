"use client";

import RabbitPublic from "../../../_pages/RabbitPublic/RabbitPublic";

// УВАГА: оригінальний компонент, найімовірніше, читає параметр через
// useParams() з react-router-dom. Потрібно відредагувати RabbitPublic.tsx,
// щоб він приймав "id" пропсом замість useParams(), або
// прокинути значення інакше.
export default function Page({ params }: { params: { id: string } }) {
  return <RabbitPublic id={params.id} />;
}
