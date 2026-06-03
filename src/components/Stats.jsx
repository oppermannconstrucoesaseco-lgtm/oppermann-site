const stats = [
  { value: "+20", label: "anos de experiência no setor" },
  { value: "+200", label: "obras executadas" },
  { value: "5 anos", label: "atendendo Itapema e BC" },
  { value: "6", label: "cidades atendidas" }
];

export function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((item) => (
          <div key={item.label} className="stat-item">
            <strong className="stat-value">{item.value}</strong>
            <span className="stat-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
