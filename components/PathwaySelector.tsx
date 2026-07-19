"use client";

import { useState } from "react";

export type PathwayRung = {
  rung: string;
  name: string;
  age: string;
  desc: string;
  img: string;
  tint: string;
  link?: { label: string; href: string };
};

/**
 * Interactive 5-rung Pathway selector on /programs/race-team. React port of
 * the prototype's js/pages/race-team.js: click (or arrow-key through) a rung
 * to swap the detail panel — image, name, age, description, meta chips.
 */
export function PathwaySelector({
  rungs,
  initialRung,
}: {
  rungs: PathwayRung[];
  initialRung: string;
}) {
  const [activeKey, setActiveKey] = useState(initialRung);
  const active = rungs.find((r) => r.rung === activeKey) ?? rungs[0];

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    const dir =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? 1
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? -1
          : 0;
    if (dir === 0) return;
    e.preventDefault();
    const next = rungs[(idx + dir + rungs.length) % rungs.length];
    setActiveKey(next.rung);
    document.getElementById(`rung-${next.rung}`)?.focus();
  };

  return (
    <div className="pathway-selector" data-pathway>
      <div className="pathway-list" role="tablist" aria-label="Pathway stages">
        {rungs.map((r, i) => (
          <button
            key={r.rung}
            type="button"
            className={r.rung === active.rung ? "pathway-item active" : "pathway-item"}
            id={`rung-${r.rung}`}
            role="tab"
            aria-controls="pathway-detail"
            aria-selected={r.rung === active.rung}
            onClick={() => setActiveKey(r.rung)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            <span className="name">{r.name}</span>
            <span className="age">{r.age}</span>
          </button>
        ))}
      </div>
      <div
        className="pathway-detail"
        role="tabpanel"
        id="pathway-detail"
        aria-labelledby={`rung-${active.rung}`}
      >
        <div
          className="pathway-detail-img"
          style={{
            background: `url("${active.img}") center/cover no-repeat ${active.tint}`,
          }}
        ></div>
        <h3 className="pathway-detail-name">{active.name}</h3>
        <p className="pathway-detail-age">{active.age}</p>
        <p className="pathway-detail-desc">{active.desc}</p>
        {active.link && (
          <p className="pathway-detail-link">
            <a href={active.link.href} target="_blank" rel="noopener">
              {active.link.label}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
