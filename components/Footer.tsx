import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-base-border py-8">
      <Container className="flex flex-col items-center justify-between gap-3 font-mono text-[11px] text-ink-faint sm:flex-row">
        <span>
          © {year} {profile.name}
        </span>
        <span>Rio de Janeiro, Brasil</span>
      </Container>
    </footer>
  );
}
