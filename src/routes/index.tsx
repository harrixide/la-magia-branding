import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scissors,
  Zap,
  Waves,
  Sparkles,
  Brush,
  Baby,
  Wand2,
  MapPin,
  Phone,
  Instagram,
  Menu,
  X,
  Clock,
} from "lucide-react";
import { toast } from "sonner";

import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";
import barber1 from "@/assets/barber1.jpg";
import barber2 from "@/assets/barber2.jpg";
import barber3 from "@/assets/barber3.jpg";

const PHONE = "(908) 540-2337";
const PHONE_HREF = "tel:+19085402337";
const ADDRESS = "5 East St, Bound Brook, New Jersey 08805";
const MAPS = "https://maps.google.com/?q=5+East+St,+Bound+Brook,+NJ+08805";
const IG = "https://instagram.com/lamagia.barbershop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Magia Barbershop | Fresh Cuts in Bound Brook, NJ" },
      {
        name: "description",
        content:
          "La Magia Barbershop in Bound Brook, NJ. Skin fades, low fades, designs, beard trims, kids' cuts and braids. Appointments and walk-ins welcome. Call (908) 540-2337.",
      },
      { property: "og:title", content: "La Magia Barbershop | Bound Brook, NJ" },
      {
        property: "og:description",
        content:
          "Fresh Cuts. Sharp Style. La Magia. Skin fades, designs, beard trims and more — appointments and walk-ins welcome.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Scissors, name: "Haircuts", desc: "Classic and modern cuts tailored to your shape-up." },
  { icon: Zap, name: "Skin Fades", desc: "Bald-clean blends with razor-sharp lines." },
  { icon: Waves, name: "Low Fades", desc: "Subtle taper that keeps the shape all week." },
  { icon: Sparkles, name: "Designs", desc: "Freehand hair art and custom line work." },
  { icon: Brush, name: "Beard Trims", desc: "Shaped, lined and finished with hot towel." },
  { icon: Baby, name: "Kids' Haircuts", desc: "Patient, friendly cuts for the little ones." },
  { icon: Wand2, name: "Braids & Specialty", desc: "Cornrows, braids and custom styling." },
];

const gallery = [
  { src: g1, alt: "Skin fade haircut side profile" },
  { src: g2, alt: "Freehand hair design shaved into a fade" },
  { src: g3, alt: "Cornrow braids with fade" },
  { src: g4, alt: "Barbershop interior with white brick walls" },
  { src: g5, alt: "Barbershop storefront with barber pole" },
  { src: g6, alt: "Beard trim with straight razor" },
  { src: g7, alt: "Kid's haircut in the barber chair" },
  { src: g8, alt: "Low fade with textured top" },
];

const barbers = [
  { img: barber1, name: "Barber Name", specialties: "Skin fades · Beard sculpting" },
  { img: barber2, name: "Barber Name", specialties: "Designs · Line work" },
  { img: barber3, name: "Barber Name", specialties: "Braids · Kids' cuts" },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#barbers", label: "Barbers" },
  { href: "#visit", label: "Visit" },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-surface/85 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 md:px-6">
          <a href="#top" className="min-w-0">
            <span className="font-display block truncate text-2xl leading-none tracking-widest">
              LA <span className="text-blood">MAGIA</span>
            </span>
            <span className="block text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
              Barbershop
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="#booking">Book Now</a>
            </Button>
          </nav>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded-sm border border-border p-2 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border/60 bg-surface px-4 pb-4 md:hidden">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/40 py-3 text-sm font-semibold uppercase tracking-widest"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-4 w-full">
              <a href="#booking" onClick={() => setOpen(false)}>
                Book Now
              </a>
            </Button>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden">
        <img
          src={hero}
          alt="Client with a fresh skin fade in the barber chair at La Magia Barbershop"
          width={1536}
          height={1152}
          className="absolute inset-0 size-full object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/30" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-32 md:px-6 md:pb-24">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.45em] text-blood">
            Bound Brook · New Jersey
          </p>
          <h1 className="animate-rise mt-4 text-5xl leading-[0.92] sm:text-7xl md:text-8xl">
            Fresh Cuts.
            <br />
            Sharp Style.
            <br />
            <span className="text-blood">La Magia.</span>
          </h1>
          <p className="animate-rise mt-5 max-w-md text-base text-muted-foreground">
            Precision fades, custom designs and clean lines. Appointments and walk-ins
            welcome.
          </p>
          <div className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-14 text-base font-bold uppercase tracking-widest">
              <a href="#booking">Book an Appointment</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 text-base font-bold uppercase tracking-widest"
            >
              <a href={PHONE_HREF}>
                <Phone className="size-5" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHead kicker="What we do" title="Services" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="group rounded-md border border-border bg-card p-6 transition-colors hover:border-blood"
            >
              <s.icon className="size-7 text-blood" />
              <h3 className="mt-4 text-2xl">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Contact for pricing
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHead kicker="The work" title="Gallery" />
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((g, i) => (
              <div
                key={g.alt}
                className={`overflow-hidden rounded-md border border-border ${
                  i === 0 || i === 5 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="size-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6 md:py-28">
        <SectionHead kicker="Our shop" title="About La Magia" centered />
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          La Magia Barbershop is a neighborhood shop on East Street in Bound Brook, New
          Jersey. Our barbers focus on clean fades, detailed line work and styles built
          around each client — from a simple taper to full freehand designs and braids.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          The chair is open to everyone. Book ahead if you want a specific barber or time,
          or stop by as a walk-in and we'll take care of you.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-widest">
          <Clock className="size-4 text-blood" /> Appointments &amp; Walk-Ins
        </div>
      </section>

      {/* Barbers */}
      <section id="barbers" className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHead kicker="The team" title="Our Barbers" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {barbers.map((b, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-md border border-border bg-card"
              >
                <img
                  src={b.img}
                  alt={`Barber at La Magia Barbershop`}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="aspect-square w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl">{b.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.specialties}</p>
                  <Button asChild variant="outline" className="mt-5 w-full">
                    <a href="#booking">Request This Barber</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
            Barber names and photos are placeholders — send us the real details anytime.
          </p>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHead kicker="Find us" title="Visit Us" />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <InfoRow icon={MapPin} label="Address" value={ADDRESS} />
            <InfoRow icon={Phone} label="Phone" value={PHONE} href={PHONE_HREF} />
            <InfoRow
              icon={Instagram}
              label="Instagram"
              value="@lamagia.barbershop"
              href={IG}
            />
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="h-13">
                <a href={MAPS} target="_blank" rel="noreferrer">
                  Get Directions
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-13">
                <a href={PHONE_HREF}>Call the Shop</a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="h-13">
                <a href={IG} target="_blank" rel="noreferrer">
                  View Instagram
                </a>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-border">
            <iframe
              title="Map to La Magia Barbershop"
              src="https://www.google.com/maps?q=5+East+St,+Bound+Brook,+NJ+08805&output=embed"
              className="h-72 w-full md:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionHead kicker="Get in the chair" title="Request a Booking" centered />
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Send a request and we'll confirm by phone. Requests are not confirmed
            appointments — for the fastest response, call{" "}
            <a href={PHONE_HREF} className="text-blood underline">
              {PHONE}
            </a>
            .
          </p>
          <BookingForm />
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center">
        <p className="font-display text-2xl tracking-widest">
          LA <span className="text-blood">MAGIA</span> BARBERSHOP
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{ADDRESS}</p>
        <p className="text-sm text-muted-foreground">{PHONE}</p>
      </footer>

      {/* Mobile sticky actions */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-surface/95 p-3 backdrop-blur md:hidden">
        <Button asChild size="lg" className="h-12 font-bold uppercase tracking-wider">
          <a href="#booking">Book</a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-12 font-bold uppercase tracking-wider"
        >
          <a href={PHONE_HREF}>
            <Phone className="size-4" /> Call
          </a>
        </Button>
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
}

function SectionHead({
  kicker,
  title,
  centered,
}: {
  kicker: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blood">
        {kicker}
      </p>
      <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl">{title}</h2>
      <div className={`hairline mt-4 w-24 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex min-w-0 items-start gap-4">
      <Icon className="mt-1 size-5 shrink-0 text-blood" />
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        {href ? (
          <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-lg hover:text-blood">
            {value}
          </a>
        ) : (
          <p className="text-lg">{value}</p>
        )}
      </div>
    </div>
  );
}

function BookingForm() {
  const [sending, setSending] = useState(false);

  return (
    <form
      className="mt-10 grid gap-5 rounded-md border border-border bg-card p-6 sm:grid-cols-2 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
          setSending(false);
          (e.target as HTMLFormElement).reset();
          toast.success("Request sent", {
            description: "We'll call you back to confirm your appointment.",
          });
        }, 600);
      }}
    >
      <Field id="name" label="Name" required placeholder="Your name" maxLength={100} />
      <Field
        id="phone"
        label="Phone number"
        required
        type="tel"
        placeholder="(555) 555-5555"
        maxLength={20}
      />
      <Field id="barber" label="Preferred barber" placeholder="No preference" maxLength={100} />
      <Field id="service" label="Requested service" placeholder="Skin fade" maxLength={100} />
      <Field id="date" label="Preferred date" type="date" />
      <Field id="time" label="Preferred time" type="time" />
      <div className="sm:col-span-2">
        <Label htmlFor="notes" className="text-xs uppercase tracking-widest">
          Additional notes
        </Label>
        <Textarea
          id="notes"
          name="notes"
          maxLength={1000}
          rows={4}
          className="mt-2"
          placeholder="Anything we should know?"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={sending}
        className="h-14 text-base font-bold uppercase tracking-widest sm:col-span-2"
      >
        {sending ? "Sending…" : "Send Booking Request"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  ...props
}: { id: string; label: string } & React.ComponentProps<typeof Input>) {
  return (
    <div>
      <Label htmlFor={id} className="text-xs uppercase tracking-widest">
        {label}
      </Label>
      <Input id={id} name={id} className="mt-2" {...props} />
    </div>
  );
}
