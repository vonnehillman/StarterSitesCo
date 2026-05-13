"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

/* ─── Types ─── */
interface MenuItem {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  spicy?: boolean;
}

interface CartItem extends MenuItem {
  qty: number;
}

/* ─── Data ─── */
const CATEGORIES = [
  "Today's Special",
  "Appetizers",
  "Soups",
  "Fried Rice & Noodles",
  "Chef's Favorites",
];

const MENU: MenuItem[] = [
  /* Today's Special */
  {
    id: 1,
    category: "Today's Special",
    name: "General Tso's Chicken Combo",
    description: "Crispy chicken in our sweet & spicy house sauce, served with fried rice and an egg roll",
    price: 14.95,
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80",
    popular: true,
    spicy: true,
  },
  {
    id: 2,
    category: "Today's Special",
    name: "Shrimp Lo Mein Combo",
    description: "Tender shrimp stir-fried with soft noodles and fresh vegetables, served with wonton soup",
    price: 15.95,
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
    popular: true,
  },
  {
    id: 3,
    category: "Today's Special",
    name: "Beef with Broccoli Combo",
    description: "Tender sliced beef and fresh broccoli in a rich brown sauce, served with steamed rice",
    price: 15.95,
    image: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
  },
  {
    id: 4,
    category: "Today's Special",
    name: "Sesame Chicken Combo",
    description: "Golden fried chicken glazed with sweet sesame sauce, served with fried rice and soup",
    price: 14.95,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80",
    popular: true,
  },
  /* Appetizers */
  {
    id: 5,
    category: "Appetizers",
    name: "Egg Rolls (2 pcs)",
    description: "Crispy golden rolls stuffed with cabbage, pork, and vegetables",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
    popular: true,
  },
  {
    id: 6,
    category: "Appetizers",
    name: "Steamed Dumplings (6 pcs)",
    description: "Hand-folded pork and vegetable dumplings with ginger dipping sauce",
    price: 7.95,
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80",
  },
  {
    id: 7,
    category: "Appetizers",
    name: "Crab Rangoon (6 pcs)",
    description: "Crispy wontons filled with cream cheese and imitation crab, served with sweet chili sauce",
    price: 6.95,
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=600&q=80",
  },
  {
    id: 8,
    category: "Appetizers",
    name: "Scallion Pancakes",
    description: "Flaky pan-fried pancakes with fresh scallions, served with soy dipping sauce",
    price: 5.95,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
  },
  /* Soups */
  {
    id: 9,
    category: "Soups",
    name: "Hot & Sour Soup",
    description: "Spicy and tangy with tofu, mushrooms, bamboo shoots, and egg ribbons",
    price: 5.95,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    spicy: true,
    popular: true,
  },
  {
    id: 10,
    category: "Soups",
    name: "Wonton Soup",
    description: "Tender pork wontons in a clear savory broth with green onions",
    price: 5.95,
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
  },
  {
    id: 11,
    category: "Soups",
    name: "Egg Drop Soup",
    description: "Silky egg ribbons in a light golden broth, simple and comforting",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
  },
  /* Fried Rice & Noodles */
  {
    id: 12,
    category: "Fried Rice & Noodles",
    name: "Chicken Fried Rice",
    description: "Wok-tossed rice with egg, peas, carrots, and seasoned chicken",
    price: 11.95,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80",
    popular: true,
  },
  {
    id: 13,
    category: "Fried Rice & Noodles",
    name: "Shrimp Fried Rice",
    description: "Wok-tossed rice with egg, peas, carrots, and plump shrimp",
    price: 13.95,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
  },
  {
    id: 14,
    category: "Fried Rice & Noodles",
    name: "Vegetable Lo Mein",
    description: "Soft noodles stir-fried with bok choy, mushrooms, and carrots",
    price: 10.95,
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
  },
  {
    id: 15,
    category: "Fried Rice & Noodles",
    name: "House Special Fried Rice",
    description: "Our signature fried rice with chicken, shrimp, pork, and vegetables",
    price: 14.95,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80",
    popular: true,
  },
  /* Chef's Favorites */
  {
    id: 16,
    category: "Chef's Favorites",
    name: "Kung Pao Chicken",
    description: "Diced chicken with peanuts, dried chilies, and vegetables in a bold savory sauce",
    price: 13.95,
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80",
    spicy: true,
    popular: true,
  },
  {
    id: 17,
    category: "Chef's Favorites",
    name: "Mongolian Beef",
    description: "Tender flank steak with green onions in a sweet and savory hoisin glaze",
    price: 15.95,
    image: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
  },
  {
    id: 18,
    category: "Chef's Favorites",
    name: "Orange Chicken",
    description: "Crispy fried chicken tossed in a bright citrus orange sauce",
    price: 13.95,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80",
    popular: true,
  },
];

/* ─── Helpers ─── */
function fmt(n: number) {
  return `$${n.toFixed(2)}`;
}

/* ─── Component ─── */
export default function TasteOfChinaPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  function addToCart(item: MenuItem) {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) return prev.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
  }

  function removeOne(id: number) {
    setCart((prev) =>
      prev
        .map((c) => c.id === id ? { ...c, qty: c.qty - 1 } : c)
        .filter((c) => c.qty > 0)
    );
  }

  function qtyInCart(id: number) {
    return cart.find((c) => c.id === id)?.qty ?? 0;
  }

  function scrollToCategory(cat: string) {
    setActiveCategory(cat);
    categoryRefs.current[cat]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* track active category on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveCategory(e.target.getAttribute("data-category") ?? "");
        });
      },
      { rootMargin: "-30% 0px -65% 0px" }
    );
    Object.values(categoryRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const grouped = CATEGORIES.map((cat) => ({
    cat,
    items: MENU.filter((m) => m.category === cat),
  }));

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Prototype banner ── */}
      <div className="bg-gray-900 py-2 text-center text-xs text-gray-400">
        Prototype by{" "}
        <Link href="/" className="font-semibold text-white hover:underline">
          Apex Digital
        </Link>{" "}
        — for presentation purposes only
      </div>

      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <div>
            <p className="text-lg font-extrabold leading-tight tracking-tight text-red-700">
              Taste of China
            </p>
            <p className="text-xs text-gray-500">Charlottesville, VA · Open until 9:30 PM</p>
          </div>

          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-red-800 active:scale-95"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h12M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            {totalItems > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                {totalItems}
              </span>
            )}
            <span className="hidden sm:inline">
              {totalItems === 0 ? "Cart" : fmt(subtotal)}
            </span>
          </button>
        </div>
      </header>

      {/* ── Hero ── */}
      <div className="relative h-52 overflow-hidden sm:h-72">
        <img
          src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&q=80"
          alt="Taste of China food"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
            Order Online
          </p>
          <h1 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
            Taste of China
          </h1>
          <p className="mt-1 text-sm text-gray-300">
            Ready in 20–30 min · Free pickup
          </p>
        </div>
      </div>

      {/* ── Category nav ── */}
      <div className="sticky top-[61px] z-30 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-5xl overflow-x-auto">
          <div className="flex gap-1 px-4 py-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToCategory(cat)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-red-700 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Menu ── */}
      <main className="mx-auto max-w-5xl px-4 pb-32 pt-6">
        {grouped.map(({ cat, items }) => (
          <section
            key={cat}
            data-category={cat}
            ref={(el) => { categoryRefs.current[cat] = el; }}
            className="mb-10"
          >
            <h2 className="mb-4 text-xl font-bold text-gray-900">{cat}</h2>

            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((item) => {
                const qty = qtyInCart(item.id);
                return (
                  <div
                    key={item.id}
                    className="flex gap-3 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
                  >
                    {/* Image */}
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="relative h-28 w-28 shrink-0 overflow-hidden sm:h-32 sm:w-32"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-300 hover:scale-105"
                      />
                      {item.popular && (
                        <span className="absolute left-1.5 top-1.5 rounded-full bg-yellow-400 px-1.5 py-0.5 text-[10px] font-bold text-gray-900">
                          Popular
                        </span>
                      )}
                    </button>

                    {/* Info */}
                    <div className="flex flex-1 flex-col justify-between py-3 pr-3">
                      <div>
                        <div className="flex items-start gap-1">
                          <p className="flex-1 text-sm font-semibold leading-snug text-gray-900">
                            {item.name}
                          </p>
                          {item.spicy && (
                            <span className="mt-0.5 text-xs" title="Spicy">🌶️</span>
                          )}
                        </div>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-900">{fmt(item.price)}</span>

                        {qty === 0 ? (
                          <button
                            onClick={() => addToCart(item)}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 text-white shadow transition hover:bg-red-800 active:scale-95"
                            aria-label={`Add ${item.name}`}
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        ) : (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => removeOne(item.id)}
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-red-200 text-red-700 transition hover:bg-red-50"
                              aria-label="Remove one"
                            >
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                              </svg>
                            </button>
                            <span className="w-4 text-center text-sm font-bold text-gray-900">{qty}</span>
                            <button
                              onClick={() => addToCart(item)}
                              className="flex h-7 w-7 items-center justify-center rounded-full bg-red-700 text-white transition hover:bg-red-800"
                              aria-label="Add one"
                            >
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      {/* ── Floating cart bar (mobile, when cart has items) ── */}
      {totalItems > 0 && !cartOpen && (
        <div className="fixed bottom-4 left-4 right-4 z-40 sm:left-auto sm:right-6 sm:w-80">
          <button
            onClick={() => setCartOpen(true)}
            className="flex w-full items-center justify-between rounded-2xl bg-red-700 px-5 py-4 text-white shadow-xl transition hover:bg-red-800 active:scale-95"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-900 text-xs font-bold">
              {totalItems}
            </span>
            <span className="font-semibold">View Cart</span>
            <span className="font-bold">{fmt(subtotal)}</span>
          </button>
        </div>
      )}

      {/* ── Cart drawer ── */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setCartOpen(false)}
          />

          {/* Panel */}
          <div className="relative z-10 flex max-h-[90dvh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:h-screen sm:max-h-screen sm:w-96 sm:rounded-none">
            {/* Cart header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <h2 className="text-lg font-bold text-gray-900">Your Order</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {cart.length === 0 ? (
                <p className="py-10 text-center text-sm text-gray-400">Your cart is empty</p>
              ) : (
                <ul className="flex flex-col gap-4">
                  {cart.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-14 w-14 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">{fmt(item.price)} each</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeOne(item.id)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
                        >
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-4 text-center text-sm font-bold">{item.qty}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-red-700 text-white hover:bg-red-800"
                        >
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Cart footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-100 px-5 py-5">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>{fmt(subtotal)}</span>
                </div>
                <div className="mt-1 flex justify-between text-xs text-gray-400">
                  <span>Tax (10%)</span>
                  <span>{fmt(subtotal * 0.1)}</span>
                </div>
                <div className="mt-3 flex justify-between text-base font-bold text-gray-900">
                  <span>Total</span>
                  <span>{fmt(subtotal * 1.1)}</span>
                </div>
                <button className="mt-4 w-full rounded-2xl bg-red-700 py-4 text-sm font-bold text-white shadow transition hover:bg-red-800 active:scale-95">
                  Place Order · {fmt(subtotal * 1.1)}
                </button>
                <p className="mt-2 text-center text-xs text-gray-400">
                  Ready in approximately 20–30 minutes
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Item detail modal ── */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelectedItem(null)}
          />
          <div className="relative z-10 w-full overflow-hidden rounded-t-3xl bg-white sm:max-w-md sm:rounded-2xl">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="h-52 w-full object-cover"
            />
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="px-5 pb-6 pt-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-gray-900">{selectedItem.name}</h3>
                {selectedItem.spicy && <span className="text-lg">🌶️</span>}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{selectedItem.description}</p>
              <p className="mt-3 text-xl font-extrabold text-gray-900">{fmt(selectedItem.price)}</p>
              <button
                onClick={() => { addToCart(selectedItem); setSelectedItem(null); }}
                className="mt-4 w-full rounded-2xl bg-red-700 py-3.5 text-sm font-bold text-white transition hover:bg-red-800 active:scale-95"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
