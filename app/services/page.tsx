import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços de barbearia em Linda-a-Velha, Lisboa | Cardoso",
  description:
    "Conheça os serviços da Barbearia do Cardoso em Linda-a-Velha: corte clássico, barba e grooming completos com barbeiros experientes num ambiente profissional.",
  alternates: {
    canonical: "/services"
  }
};

const services = [
  {
    title: "Corte Clássico",
    description:
      "Consulta personalizada, lavagem e acabamento preciso para um visual alinhado e intemporal."
  },
  {
    title: "Corte + Barba",
    description:
      "Equilíbrio entre cabelo e barba com toalha quente, hidratação e desenho cuidadoso."
  },
  {
    title: "Aparar Barba",
    description:
      "Modelação e alinhamento com produtos premium e finalização natural."
  },
  {
    title: "Corte Infantil",
    description:
      "Servico pensado para criancas, com atendimento paciente e conforto total."
  }
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-ember">Serviços</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">
            Serviços completos de barbearia em Linda-a-Velha.
          </h1>
          <p className="mt-4 text-lg text-ink/70">
            Cuidamos do seu estilo com técnica moderna, rituais clássicos e atenção ao detalhe. Os
            nossos barbeiros criam um atendimento personalizado para cada cliente.
          </p>
        </div>
        <div className="rounded-3xl border border-ink/10 bg-stone p-8 shadow-[var(--shadow-warm)]">
          <h2 className="text-sm uppercase tracking-[0.3em] text-ember">Resumo rápido</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink/70">
            <li>Atendimento profissional e acolhedor</li>
            <li>Produtos de grooming premium</li>
            <li>Ambiente moderno e relaxado</li>
            <li>Marcação rápida com confirmação imediata</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-3xl border border-ink/10 bg-white p-8">
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-sm text-ink/70">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <Image
          src="/images/cortar_cabelo_barbearia.png"
          alt="Espaço moderno da barbearia em Linda-a-Velha"
          width={620}
          height={520}
          className="rounded-3xl object-cover shadow-[var(--shadow-warm)]"
        />
        <div>
          <h2 className="font-display text-3xl">Grooming completo para cabelo e barba.</h2>
          <p className="mt-4 text-ink/70">
            Criamos um ritual de grooming pensado para o seu ritmo. Cada serviço inclui aconselhamento,
            acabamento detalhado e recomendações de cuidado em casa.
          </p>
          <p className="mt-4 text-ink/70">
            Trabalhamos com cortes masculinos modernos e clássicos, mantendo o equilíbrio entre
            tradição e estilo contemporâneo.
          </p>
        </div>
      </div>
    </div>
  );
}
