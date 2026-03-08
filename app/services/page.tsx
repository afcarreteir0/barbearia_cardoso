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
      "Consulta personalizada, lavagem e acabamento para um visual exatamente como quer."
  },
  {
    title: "Corte + Barba",
    description:
      "Equilíbrio entre cabelo e barba com toalha quente e hidratação, não sai daqui com cortes na cara."
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
            Serviços completos.
          </h1>
          <p className="mt-4 text-lg text-ink/70">
          Na nossa barbearia oferecemos um serviço de grooming masculino completo, pensado para quem valoriza o seu visual.
          </p>
        </div>
        <div className="no-justify rounded-3xl border border-ink/10 bg-stone p-8 shadow-[var(--shadow-warm)]">
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
          <div key={service.title} className="no-justify rounded-3xl border border-ink/10 bg-white p-8">
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
            Cada atendimento começa com uma breve introdução para compreender o estilo pretendido, o tipo de cabelo e as preferências pessoais, garantindo um resultado adaptado a cada cliente.
          </p>
          <p className="mt-4 text-ink/70">
          Especializamo-nos em cortes masculinos modernos e clássicos, desde estilos mais tradicionais até tendências mais arrojadas.
          A técnica, a precisão e a atenção ao detalhe fazem parte de cada corte
          </p>
          <p className="mt-4 text-ink/70">
          No final de cada sessão, prestamos também aconselhamento personalizado sobre cuidados em casa, incluindo sugestões de manutenção do corte, tratamento da barba e utilização de produtos adequados.
          O objetivo é garantir que o estilo se mantém cuidado e definido mesmo entre visitas à barbearia.
          </p>
          <p className="mt-4 text-ink/70">
          Mais do que um simples corte de cabelo, proporcionamos uma experiência completa de barbearia, onde tradição, técnica e atenção ao detalhe se unem para criar um resultado consistente, elegante e duradouro.
          </p>
        </div>
      </div>
    </div>
  );
}
