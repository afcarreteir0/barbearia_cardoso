import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Barbearia do Cardoso em Linda-a-Velha, Lisboa",
  description:
    "Conheça a história da Barbearia do Cardoso, um espaço moderno e acolhedor em Linda-a-Velha, Lisboa, com tradição, técnica e barbeiros experientes.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-ember">Sobre</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">
            Uma barbearia com olhar contemporâneo.
          </h1>
          <p className="mt-4 text-lg text-ink/70">
            A Barbearia do Cardoso nasceu em 2017 para unir a tradição de barbearia clássica com a energia
            moderna de Lisboa. O nosso espaço é aberto, luminoso e pensado para criar uma atmosfera
            relaxada, damos as boas vindas a todos os clientes.
          </p>
        </div>
        <div className="no-justify rounded-3xl border border-ink/10 bg-stone p-8">
          <h2 className="text-sm uppercase tracking-[0.3em] text-ember">O que nos distingue</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink/70">
            <li>Equipa experiente com consulta personalizada.</li>
            <li>Valorizamos o humor e a boa disposição.</li>
            <li>Ambiente comunitário, de vizinhança e proximidade.</li>
            <li>Atenção especial à higiene e conforto.</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <Image
          src="/images/sobre_barbearia.png"
          alt="Cadeiras de barbeiro modernas na Barbearia do Cardoso"
          width={620}
          height={520}
          className="rounded-3xl object-cover shadow-[var(--shadow-warm)]"
        />
        <div>
          <h2 className="font-display text-3xl">Profissionalismo, detalhe e autenticidade.</h2>
          <p className="mt-4 text-ink/70">
            Inspiramo-nos na cultura barber clássica, mas com uma leitura contemporânea. Usamos
            ferramentas de qualidade, técnicas modernas e um atendimento atento para criar um
            resultado que se adapta ao seu estilo.
          </p>
          <p className="mt-4 text-ink/70">
            Os nossos clientes valorizam a atmosfera acolhedora, a limpeza e o cuidado ao pormenor.
          </p>
        </div>
      </div>
    </div>
  );
}
