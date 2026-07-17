"use client";

const NODES = [
  { id: "client", x: 60, y: 200, label: "Client" },
  { id: "gateway", x: 220, y: 100, label: "API Gateway" },
  { id: "cqrs", x: 220, y: 300, label: "CQRS" },
  { id: "cache", x: 400, y: 60, label: "Cache" },
  { id: "db", x: 400, y: 180, label: "SQL Server" },
  { id: "queue", x: 400, y: 300, label: "RabbitMQ" },
  { id: "ai", x: 580, y: 220, label: "AI Service" },
];

const EDGES = [
  ["client", "gateway"],
  ["client", "cqrs"],
  ["gateway", "cache"],
  ["gateway", "db"],
  ["cqrs", "queue"],
  ["queue", "ai"],
  ["db", "ai"],
];

function findNode(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function ArchitectureGraph() {
  return (
    <svg
      viewBox="0 0 640 380"
      className="w-full h-full opacity-40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5b63d3" stopOpacity="0" />
          <stop offset="50%" stopColor="#5b63d3" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#42c8b7" stopOpacity="0" />
        </linearGradient>
      </defs>

      {EDGES.map(([from, to], i) => {
        const a = findNode(from);
        const b = findNode(to);
        return (
          <g key={`${from}-${to}`}>
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <line
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#edgeGradient)"
              strokeWidth="1.5"
              strokeDasharray="6 240"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-246"
                dur={`${3 + (i % 3)}s`}
                repeatCount="indefinite"
              />
            </line>
          </g>
        );
      })}

      {NODES.map((node) => (
        <g key={node.id}>
          <circle cx={node.x} cy={node.y} r="4" fill="#5b63d3">
            <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx={node.x} cy={node.y} r="10" fill="none" stroke="rgba(91,99,211,0.3)" strokeWidth="1" />
          <text
            x={node.x}
            y={node.y - 16}
            textAnchor="middle"
            fill="rgba(245,245,247,0.5)"
            fontSize="9"
            fontFamily="var(--font-mono)"
            letterSpacing="0.05em"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}