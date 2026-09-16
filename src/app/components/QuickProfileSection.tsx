const profileItems = [
  { title: 'Software Engineering', detail: "Bachelor's Degree" },
  { title: 'Web + Backend', detail: 'Full-stack Projects' },
  { title: 'APIs + Databases', detail: 'Project Experience' },
  { title: 'System Integration', detail: 'Enterprise Exposure' },
];

export default function QuickProfileSection() {
  return (
    <section
      className="border-y border-border bg-secondary/35"
      aria-label="Quick engineering profile"
    >
      <div className="container-portfolio py-5 md:py-6">
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {profileItems.map((item, index) => (
            <li key={item.title} className="relative bg-card px-5 py-4 md:px-6">
              <span className="absolute left-0 top-4 h-6 w-px bg-primary/70" aria-hidden="true" />
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.05em] text-muted-foreground">
                {item.detail}
              </p>
              <span
                className="absolute right-4 top-4 font-mono text-[0.625rem] text-foreground/20"
                aria-hidden="true"
              >
                0{index + 1}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
