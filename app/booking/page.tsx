import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcação online na Barbearia do Cardoso em Linda-a-Velha",
  description:
    "Marque o seu horário na Barbearia do Cardoso em Linda-a-Velha. Escolha barbeiro, serviço e hora com confirmação imediata e lembrete por SMS.",
  alternates: {
    canonical: "/booking"
  }
};

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ember sm:text-sm md:tracking-[0.3em]">Marcação</p>
          <h1 className="mt-4 font-display text-3xl md:text-5xl">
            Marque o seu horário com total conforto.
          </h1>
          <p className="mt-4 text-base text-ink/70 md:text-lg">
            O sistema de marcação permite escolher barbeiro, serviço e horário em poucos minutos.
            Recebe confirmação imediata e lembrete antes da visita.
          </p>
          <div className="no-justify mt-8 rounded-3xl border border-ink/10 bg-stone p-6">
            <h2 className="text-lg font-semibold">Informações úteis</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li>Cancelamentos gratuitos até 12 horas antes.</li>
              <li>Recomendamos chegar 5 minutos antes.</li>
              <li>Pagamento no local: MB, dinheiro ou transferências.</li>
            </ul>
          </div>
        </div>
        <div className="no-justify rounded-3xl border border-ink/10 bg-white p-6 shadow-[var(--shadow-warm)]">
          <h2 className="text-sm uppercase tracking-[0.3em] text-ember">Widget de marcação</h2>
          <div
            id="booking-widget"
            className="no-justify mt-6 rounded-2xl border border-ink/10 bg-stone p-6 text-sm text-ink/70"
          >
            EMBED_BOOKING_IFRAME_HERE
          </div>
        </div>
      </div>
    </div>
  );
}
