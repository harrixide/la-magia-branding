const BASE = import.meta.env.BASE_URL;

const slots: Array<{ selector: string; filename: string; all?: boolean; index?: number }> = [
  { selector: 'img[alt="La Magia Barbershop logo"]', filename: 'logo.png', all: true },
  { selector: 'img[alt="La Magia Barbershop badge logo"]', filename: 'logo.png', all: true },
  { selector: 'img[alt="Client with a fresh skin fade in the barber chair at La Magia Barbershop"]', filename: 'hero.jpg' },
  { selector: 'img[alt="Skin fade haircut side profile"]', filename: 'gallery-1.jpg' },
  { selector: 'img[alt="Freehand hair design shaved into a fade"]', filename: 'gallery-2.jpg' },
  { selector: 'img[alt="Cornrow braids with fade"]', filename: 'gallery-3.jpg' },
  { selector: 'img[alt="Barbershop interior with white brick walls"]', filename: 'gallery-4.jpg' },
  { selector: 'img[alt="Barbershop storefront with barber pole"]', filename: 'gallery-5.jpg' },
  { selector: 'img[alt="Beard trim with straight razor"]', filename: 'gallery-6.jpg' },
  { selector: 'img[alt="Kid\'s haircut in the barber chair"]', filename: 'gallery-7.jpg' },
  { selector: 'img[alt="Low fade with textured top"]', filename: 'gallery-8.jpg' },
  { selector: 'img[alt="Barber at La Magia Barbershop"]', filename: 'barber-1.jpg', index: 0 },
  { selector: 'img[alt="Barber at La Magia Barbershop"]', filename: 'barber-2.jpg', index: 1 },
  { selector: 'img[alt="Barber at La Magia Barbershop"]', filename: 'barber-3.jpg', index: 2 },
];

function tryOverride(img: HTMLImageElement, filename: string) {
  if (img.dataset.imageSlot === filename) return;
  img.dataset.imageSlot = filename;

  const candidate = `${BASE}images/${filename}?v=${Date.now()}`;
  const probe = new Image();
  probe.onload = () => {
    img.src = candidate;
  };
  probe.onerror = () => {
    if (filename === 'barber-1.jpg' && img.src.includes('barber1-')) {
      const galleryFallback = document.querySelector<HTMLImageElement>('img[alt="Skin fade haircut side profile"]');
      if (galleryFallback?.src) img.src = galleryFallback.src;
    }
  };
  probe.src = candidate;
}

function applyImageOverrides() {
  for (const slot of slots) {
    const found = Array.from(document.querySelectorAll<HTMLImageElement>(slot.selector));
    if (slot.all) {
      found.forEach((img) => tryOverride(img, slot.filename));
    } else {
      const img = found[slot.index ?? 0];
      if (img) tryOverride(img, slot.filename);
    }
  }
}

const observer = new MutationObserver(applyImageOverrides);

window.addEventListener('DOMContentLoaded', () => {
  applyImageOverrides();
  observer.observe(document.body, { childList: true, subtree: true });
});

requestAnimationFrame(applyImageOverrides);
