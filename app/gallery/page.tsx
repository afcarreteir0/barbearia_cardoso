import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria da Barbearia do Cardoso em Linda-a-Velha, Lisboa",
  description:
    "Veja a galeria da Barbearia do Cardoso em Linda-a-Velha: cortes masculinos, barbeiros em ação e um ambiente moderno e acolhedor com fotografia a preto e branco.",
  alternates: {
    canonical: "/gallery"
  }
};

const galleryImages = [
  {
    src: "/images/corte-masculino-linda-a-velha.svg",
    alt: "Corte masculino moderno em barbearia de Linda-a-Velha"
  },
  {
    src: "/images/barba-linda-a-velha.svg",
    alt: "Barba alinhada com acabamento detalhado"
  },
  {
    src: "/images/ferramentas-barbearia-linda-a-velha.svg",
    alt: "Ferramentas classicas de barbeiro em bancada"
  },
  {
    src: "/images/interior-barbearia-linda-a-velha.svg",
    alt: "Interior elegante da Barbearia do Cardoso"
  },
  {
    src: "/images/barbeiro-linda-a-velha.svg",
    alt: "Barbeiro em ação com ambiente clássico"
  }
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Script src="https://static.elfsight.com/platform/platform.js" strategy="afterInteractive" />
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-ember">Galeria</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">
          O Nosso Trabalho em Destaque
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Espreita alguns dos cortes e estilos feitos na Barbearia do Cardoso. Cada detalhe conta, desde fades precisos a barbas bem definidas.
        </p>
      </div>

      {/* <div className="mt-12">
        <h2 className="text-2xl font-semibold">Seleção de cortes e ambiente.</h2>
        <p className="mt-2 text-sm text-ink/70">
          Imagens de cortes masculinos, detalhes do espaço e momentos clássicos da barbearia.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {galleryImages.map((image) => (
          <div key={image.src} className="overflow-hidden rounded-3xl border border-ink/10">
            <Image
              src={image.src}
              alt={image.alt}
              width={520}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div> */}

      <div className="mt-14 rounded-3xl border border-ink/10 bg-stone p-8 shadow-[var(--shadow-warm)]">
        <div className="mt-6">
          <div
            className="elfsight-app-50220a31-dbf7-4053-b302-a58762ebf2fc"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </div>
  );
}
