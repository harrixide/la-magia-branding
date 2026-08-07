import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, MapPin, Menu, Phone, Scissors, X } from "lucide-react";

const PHONE = "(908) 540-2337";
const PHONE_HREF = "tel:+19085402337";
const ADDRESS = "5 East St, Bound Brook, New Jersey 08805";
const MAPS = "https://maps.google.com/?q=5+East+St,+Bound+Brook,+NJ+08805";
const IG = "https://instagram.com/lamagia.barbershop";
const BASE = import.meta.env.BASE_URL;
const image = (name: string) => `${BASE}images/${name}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Magia Barbershop | Bound Brook, NJ" },
      {
        name: "description",
        content:
          "La Magia Barbershop in Bound Brook, New Jersey. Appointments and walk-ins welcome. Call (908) 540-2337.",
      },
    ],
  }),
  component: Index,
});

const services = [
  { name: "Haircut", detail: "Classic cuts, tapers and modern styles", price: "Ask for price" },
  { name: "Skin Fade", detail: "Clean blend with a sharp finish", price: "Ask for price" },
  { name: "Haircut + Beard", detail: "Full cut with beard shape-up", price: "Ask for price" },
  { name: "Kids Cut", detail: "Patient, comfortable cuts for kids", price: "Ask for price" },
  { name: "Designs", detail: "Custom line work and freehand designs", price: "Ask for price" },
  { name: "Braids & Specialty", detail: "Specialty styling and braids", price: "Ask for price" },
];

const gallery = Array.from({ length: 8 }, (_, i) => ({
  src: image(`gallery-${i + 1}.jpg`),
  alt: `La Magia Barbershop work ${i + 1}`,
}));

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#home" className="flex items-center gap-3" aria-label="La Magia Barbershop home">
            <ImageSlot
              src={image("logo.png")}
              alt="La Magia Barbershop logo"
              className="h-12 w-12 rounded-full"
              label="Logo"
            />
            <div>
              <p className="brand-name">La Magia</p>
              <p className="text-sm text-muted-foreground">Barbershop · Bound Brook, NJ</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a className="nav-link" href="#story">Our Story</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#work">Our Work</a>
            <a className="nav-link" href="#visit">Visit</a>
            <a className="primary-button" href="#booking">Book Appointment</a>
          </nav>

          <button
            className="rounded-lg border border-border p-2 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
            {["story", "services", "work", "visit", "booking"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="block py-3 text-base capitalize"
                onClick={() => setMenuOpen(false)}
              >
                {section === "booking" ? "Book Appointment" : section === "work" ? "Our Work" : section === "story" ? "Our Story" : section}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="welcome-section">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div className="max-w-xl">
            <p className="eyebrow">Your neighborhood barbershop</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Come in comfortable.<br />Leave looking fresh.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
              Good cuts, good conversation, and a shop that feels like home. La Magia welcomes appointments and walk-ins in the heart of Bound Brook.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="primary-button large-button" href="#booking">Book an Appointment</a>
              <a className="secondary-button large-button" href={PHONE_HREF}>
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>
          </div>

          <div className="photo-frame aspect-[4/3]">
            <ImageSlot
              src={image("hero.jpg")}
              alt="Inside La Magia Barbershop"
              className="h-full w-full"
              label="Upload hero.jpg"
            />
          </div>
        </div>
      </section>

      <section id="story" className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="photo-frame aspect-[4/5]">
              <ImageSlot src={image("gallery-4.jpg")} alt="La Magia shop interior" className="h-full w-full" label="gallery-4.jpg" />
            </div>
            <div className="photo-frame mt-10 aspect-[4/5]">
              <ImageSlot src={image("gallery-5.jpg")} alt="La Magia storefront" className="h-full w-full" label="gallery-5.jpg" />
            </div>
          </div>

          <div className="self-center">
            <p className="eyebrow">Our story</p>
            <h2 className="section-title">A local shop built around the people in the chair.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              La Magia Barbershop serves Bound Brook with a simple idea: every person who walks in should feel welcome, listened to, and confident when they leave.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Whether you come in for a regular cut, a fade, beard work, a design, or a new style, the focus is on taking the time to get it right. Appointments are available, and walk-ins are always welcome.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-sm">
              <span className="story-note">Appointments welcome</span>
              <span className="story-note">Walk-ins welcome</span>
              <span className="story-note">All ages</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad bg-surface">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <p className="eyebrow">Services & pricing</p>
            <h2 className="section-title mx-auto max-w-2xl">Straightforward services. No complicated menu.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Prices can be added whenever the shop is ready. For now, customers can call or request an appointment for the exact service they want.
            </p>
          </div>

          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card px-5 sm:px-8">
            {services.map((service) => (
              <div key={service.name} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <p className="mt-1 text-muted-foreground">{service.detail}</p>
                </div>
                <p className="font-medium text-primary">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-pad">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Our work</p>
              <h2 className="section-title">A few cuts from the shop.</h2>
            </div>
            <a href={IG} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium text-primary">
              <Instagram className="h-4 w-4" /> See more on Instagram
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((item, index) => (
              <div key={item.src} className={`photo-frame ${index === 0 || index === 5 ? "col-span-2 aspect-[4/3]" : "aspect-square"}`}>
                <ImageSlot src={item.src} alt={item.alt} className="h-full w-full" label={`gallery-${index + 1}.jpg`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="section-pad bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.85fr_1.15fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] opacity-75">Request an appointment</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Tell us what you need and when you want to come in.</h2>
            <p className="mt-5 max-w-md text-lg leading-8 opacity-85">
              This form is a request, not an automatic confirmation. The shop can follow up by phone to confirm the time.
            </p>
            <div className="mt-8 space-y-3 text-base">
              <a href={PHONE_HREF} className="flex items-center gap-3"><Phone className="h-5 w-5" /> {PHONE}</a>
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0" /> {ADDRESS}</p>
            </div>
          </div>

          <form
            className="rounded-2xl bg-background p-6 text-foreground sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Appointment request form is ready to connect to email or a booking service.");
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Name"><input required name="name" placeholder="Your name" /></FormField>
              <FormField label="Phone"><input required name="phone" type="tel" placeholder="(555) 555-5555" /></FormField>
              <FormField label="Service">
                <select name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => <option key={service.name}>{service.name}</option>)}
                </select>
              </FormField>
              <FormField label="Preferred date"><input name="date" type="date" /></FormField>
            </div>
            <div className="mt-5">
              <FormField label="Preferred time"><input name="time" type="time" /></FormField>
            </div>
            <div className="mt-5">
              <FormField label="Anything we should know?"><textarea name="notes" rows={4} placeholder="Barber preference, style, questions..." /></FormField>
            </div>
            <button type="submit" className="primary-button mt-6 w-full justify-center py-3.5">Request Appointment</button>
          </form>
        </div>
      </section>

      <section id="visit" className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <p className="eyebrow">Come by the shop</p>
            <h2 className="section-title">La Magia Barbershop</h2>
            <div className="mt-7 space-y-5 text-lg">
              <p className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" /> {ADDRESS}</p>
              <a href={PHONE_HREF} className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> {PHONE}</a>
              <a href={IG} target="_blank" rel="noreferrer" className="flex items-center gap-3"><Instagram className="h-5 w-5 text-primary" /> @lamagia.barbershop</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="primary-button" href={MAPS} target="_blank" rel="noreferrer">Get Directions</a>
              <a className="secondary-button" href={PHONE_HREF}>Call the Shop</a>
            </div>
          </div>

          <div className="photo-frame aspect-[4/3]">
            <ImageSlot src={image("gallery-5.jpg")} alt="La Magia Barbershop storefront" className="h-full w-full" label="gallery-5.jpg" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-6">
          <p>© {new Date().getFullYear()} La Magia Barbershop. Bound Brook, New Jersey.</p>
          <div className="flex gap-5">
            <a href={IG} target="_blank" rel="noreferrer">Instagram</a>
            <a href={PHONE_HREF}>Call</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ImageSlot({ src, alt, className, label }: { src: string; alt: string; className?: string; label: string }) {
  return (
    <div className={`image-slot ${className ?? ""}`}>
      <div className="image-placeholder"><Scissors className="h-6 w-6" /><span>{label}</span></div>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(event) => { event.currentTarget.style.display = "none"; }}
      />
    </div>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      {children}
    </label>
  );
}
