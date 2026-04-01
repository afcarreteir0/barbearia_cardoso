import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barbearia em Linda-a-Velha, Lisboa | Barbearia do Cardoso",
  description:
    "Barbearia do Cardoso em Linda-a-Velha, Lisboa, com cortes masculinos, barba e grooming num espaço moderno e acolhedor. Reserve o seu horário online.",
  alternates: {
    canonical: "/"
  }
};

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <Image
          src="/images/hero_barbearia.webp"
          alt="Interior da Barbearia do Cardoso"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.2),rgba(176,132,76,0.18))]" />
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:pb-24 md:pt-20">
          <div className="relative z-10 space-y-5 md:space-y-6">
            <p className="reveal text-xs uppercase tracking-[0.2em] text-sun sm:text-sm md:tracking-[0.3em]">
              Barbearia em Linda-a-Velha
            </p>
            <h1 className="reveal reveal-delay-1 font-display text-3xl leading-tight text-cream sm:text-4xl md:text-6xl">
              Senta-te na cadeira. Nós tratamos do resto.
            </h1>
            <p className="reveal reveal-delay-2 text-base text-cream/80 sm:text-lg">
              Tradição e estilo no coração de Linda-a-Velha. Não há quem saia daqui sem o corte perfeito e um sorriso na cara, agenda já a tua reserva.
            </p>
            <div className="reveal reveal-delay-3 flex flex-wrap items-center gap-4">
              <Link
                href="/booking"
                className="rounded-full bg-cream px-6 py-3 text-sm uppercase tracking-[0.2em] text-ink shadow-[var(--shadow-warm)]"
              >
                Reservar agora
              </Link>
              <Link
                href="/services"
                className="text-sm uppercase tracking-[0.2em] text-cream/80"
              >
                Ver serviços
              </Link>
            </div>
          </div>
          <div className="relative z-10 hidden md:block">
            <div className="overflow-hidden rounded-[4px] border border-cream/20 shadow-[var(--shadow-warm)]">
              <Image
                src="/images/corte_barbearia_cardoso.webp"
                alt="Barbeiro em ação na Barbearia do Cardoso"
                width={720}
                height={960}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ember sm:text-sm md:tracking-[0.3em]">Serviços</p>
              <h2 className="font-display text-2xl md:text-4xl">Corte, barba e grooming com detalhe.</h2>
            </div>
            <Link
              href="/services"
              className="text-sm uppercase tracking-[0.2em] text-ink/70"
            >
              Lista completa
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Corte Clássico",
                text: "Linhas limpas, acabamento preciso e consulta personalizada."
              },
              {
                title: "Corte + Barba",
                text: "Equilíbrio entre cabelo e barba para um visual harmonioso."
              },
              {
                title: "Aparar Barba",
                text: "Barba alinhada com toalha quente e hidratação."
              },
              {
                title: "Corte Infantil",
                text: "Atendimento paciente para os mais novos, com estilo e conforto."
              }
            ].map((service) => (
              <div
                key={service.title}
                className="no-justify rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-sun sm:text-sm md:tracking-[0.3em]">Galeria</p>
            <h2 className="font-display text-2xl md:text-4xl">Momentos divertidos, luz natural e atenção ao detalhe.</h2>
          </div>
          <Link href="/gallery" className="text-sm uppercase tracking-[0.2em] text-ink/70">
            Ver galeria
          </Link>
        </div>
        <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 [scroll-padding-inline:1rem] sm:[scroll-padding-inline:0] lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
          {[
            {
              src: "/images/cardoso_barbearia.webp",
              alt: "Corte masculino moderno na barbearia de Linda-a-Velha",
              position: "object-[50%_45%]"
            },
            {
              src: "/images/barbeiro_2.webp",
              alt: "Barbeiro em ação na Barbearia do Cardoso",
              position: "object-center"
            },
            {
              src: "/images/barbeiro_galeria.webp",
              alt: "Barbeiro em ação na Barbearia do Cardoso",
              position: "object-center"
            },
            {
              src: "/images/barbeiro_3.webp",
              alt: "Barbeiro em ação na Barbearia do Cardoso",
              position: "object-center"
            }
          ].map((item) => (
            <div key={item.src} className="group w-[82vw] max-w-[22rem] shrink-0 snap-start self-start sm:w-80 lg:w-full lg:max-w-none lg:min-w-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 20rem, 25vw"
                  className={`h-full w-full object-cover transition duration-300 lg:group-hover:scale-[1.01] ${item.position}`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-sun sm:text-sm md:tracking-[0.3em]">Marcação</p>
            <h2 className="font-display text-2xl md:text-4xl">Reserve o seu horário sem esperas.</h2>
            <p className="mt-4 text-cream/70">
              Use o nosso sistema de marcação para escolher o barbeiro, o serviço e o horário
              mais conveniente. Confirmação imediata.
            </p>
            <Link
              href="/booking"
              className="mt-6 inline-flex rounded-full border border-sun/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-sun"
            >
              Marcar agora
            </Link>
          </div>
          <div className="no-justify rounded-3xl border border-cream/15 bg-ink/80 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-sun">Ritual completo</p>
            <p className="mt-3 text-lg font-semibold">Corte + barba com acabamento de precisão.</p>
            <p className="mt-4 text-cream/70">
              Atendimento dedicado, consultoria personalizada e produtos premium para cuidar do seu
              estilo.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ember sm:text-sm md:tracking-[0.3em]">Visite-nos</p>
            <h2 className="font-display text-2xl md:text-4xl">No centro de Linda-a-Velha, com fácil acesso.</h2>
            <p className="mt-4 text-ink/70">
              A barbearia fica perto de comércio local e transportes. Consulte os detalhes abaixo
              para planear a sua visita.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-ink/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
            <iframe
              title="Mapa Barbearia do Cardoso"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1359356769135!2d-9.237563663289476!3d38.714687935629016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecc7ce782928f%3A0x312bfb550d791f7a!2sBarbearia%20Do%20Cardoso!5e0!3m2!1spt-PT!2spt!4v1772820985472!5m2!1spt-PT!2spt"
              className="h-[240px] w-full md:h-[250px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="no-justify rounded-3xl border border-ink/10 bg-white p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-ember">Morada</p>
            <p className="mt-4 text-lg font-semibold">Av. 25 de Abril de 1974 11A</p>
            <p className="text-ink/70">2795-197 Linda-a-Velha</p>
          </div>
          <div className="no-justify rounded-3xl border border-ink/10 bg-white p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-ember">Telefone</p>
            <p className="mt-4 text-lg font-semibold">214 191 538</p>
            <p className="text-ink/70">Chamada para a rede fixa nacional</p>
          </div>
          <div className="no-justify rounded-3xl border border-ink/10 bg-white p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-ember">Horário</p>
            <p className="mt-4 text-sm text-ink/70">Seg-Sex: 9h00-19h00</p>
            <p className="text-sm text-ink/70">Sáb: 9h00-13h00</p>
            <p className="text-sm text-ink/70">Dom: Encerrado</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="no-justify rounded-[32px] border border-ink/10 bg-stone p-10 shadow-[var(--shadow-warm)]">
          <p className="text-xs uppercase tracking-[0.2em] text-ember sm:text-sm md:tracking-[0.3em]">Avaliações</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Clientes que voltam todas as semanas.
          </h2>
          <p className="mt-3 text-ink/70">
            Avaliação média 4.8/5 com mais de 215 avaliações reais da comunidade.
          </p>
          <div className="mt-8">
            <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
            <div className="elfsight-app-7440e611-d955-4165-afa4-54f0b956bf92" data-elfsight-app-lazy />
          </div>
        </div>
      </section>
    </div>
  );
}
