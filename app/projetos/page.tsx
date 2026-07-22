import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="py-24">
      <section className="mx-auto max-w-5xl px-6">
        <h1 className="font-display text-4xl font-semibold">
          Projetos
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projetos/${project.slug}`}
              className="rounded-lg border border-base-border p-6 hover:border-signal"
            >
              <h2 className="font-display text-xl">
                {project.name}
              </h2>

              <p className="mt-3 text-sm text-ink-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border px-2 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}