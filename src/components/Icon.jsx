const paths = {
  frame: "M4 19V5l8-3 8 3v14l-8 3-8-3Zm4-9h8M8 14h8M12 3v18",
  layers: "m12 3 9 5-9 5-9-5 9-5Zm-7 9 7 4 7-4M5 16l7 4 7-4",
  ceiling: "M4 5h16M6 9h12M8 13h8M10 17h4",
  modular: "M3 3h18v18H3V3Zm6 0v18M15 3v18M3 9h18M3 15h18",
  wall: "M4 5h16v14H4V5Zm0 5h16M10 5v5m4 0v9",
  tile: "M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z",
  vinyl: "M3 7h18v2H3V7Zm0 4h18v2H3v-2Zm0 4h18v2H3v-2Z",
  paint: "M4 5h10v6H4V5Zm8 6v3c0 1.1-.9 2-2 2H8v4m6-15h3c1.7 0 3 1.3 3 3s-1.3 3-3 3h-3"
};

export function Icon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
