import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto da Barbearia do Cardoso em Linda-a-Velha, Lisboa",
  description:
    "Fale com a Barbearia do Cardoso em Linda-a-Velha. Consulte morada, telefone, horário e veja o mapa para nos visitar e planear a sua visita.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-ember">Contacto</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">
            Estamos em Linda-a-Velha, prontos para o receber.
          </h1>
          <p className="mt-4 text-lg text-ink/70">
            Encontre-nos no centro de linda-a-velha, se passar pela A5 faça um pequeno desvio e cá estaremos. Fale connosco por telefone, faça a sua reserva aqui ou passe para conhecer o
            espaço e falar com os nossos barbeiros.
          </p>
        </div>
        <div className="no-justify rounded-3xl border border-ink/10 bg-stone p-8">
          <h2 className="text-sm uppercase tracking-[0.3em] text-ember">Informações</h2>
          <div className="mt-4 space-y-4 text-sm text-ink/70">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Morada</p>
              <p>Av. 25 de Abril de 1974 11A</p>
              <p>2795-197 Linda-a-Velha</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Telefone</p>
              <p className="text-lg font-semibold text-ink">214 191 538</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Horário</p>
              <p>Seg-Sex: 9h00-19h00</p>
              <p>Sáb: 9h00-13h00</p>
              <p>Dom: encerrado</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Mapa e localização.</h2>
        <p className="mt-2 text-sm text-ink/70">
          Consulte o mapa para chegar facilmente à Barbearia do Cardoso em Linda-a-Velha.
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-ink/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
        <iframe
          title="Mapa Barbearia do Cardoso"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1359356769135!2d-9.237563663289476!3d38.714687935629016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecc7ce782928f%3A0x312bfb550d791f7a!2sBarbearia%20Do%20Cardoso!5e0!3m2!1spt-PT!2spt!4v1772820985472!5m2!1spt-PT!2spt"
          width="1150"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
