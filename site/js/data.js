const SITE = {
  name: "stinecreatives",
  whatsapp: "254797526769",
  email: "stinecreatives@gmail.com",
  goatCounter: "",
  formEndpoint: "",
  tagline: "Affordable websites, web applications and systems that help your business grow."
};

const SERVICES = [
  { title: "Custom web design", text: "A website built around your brand, fast on phones and clear about what visitors should do next.", points: ["Mobile-first layouts", "Your colours and logo", "WhatsApp and contact built in"] },
  { title: "Web applications", text: "Browser-based tools for bookings, payments, dashboards and customer accounts.", points: ["Booking and payment flows", "Payment integration", "Secure logins and databases"] },
  { title: "E-commerce", text: "Online shops that make it easy for customers to browse, order and pay.", points: ["Product catalogue and cart", "Mobile payments", "Order management"] },
  { title: "SEO service design", text: "Page structure, content and speed set up so people can find you on Google.", points: ["Page titles and descriptions", "Fast, clean code", "Local search basics"] },
  { title: "Systems", text: "Custom systems that replace paper and spreadsheets, like our Apartment Tracker.", points: ["Reporting and tracking", "Records kept in a database", "Built around how you work"] }
];

const PROJECTS = [
  { slug: "aura-hotel", title: "Aura Hotel", cats: ["web", "app"], tags: ["Web design", "Web application", "Payments"],
    image: "assets/img/aura-hotel.png", url: "https://aura-hotel-ten.vercel.app/",
    summary: "A responsive hotel website with a booking system and online payments.",
    problem: "A Nairobi hotel needed guests to book and pay online from any device.",
    built: "A responsive website with room browsing, a booking system and payment integration.",
    tools: ["Python", "Django", "Hosted database"],
    result: "Guests can book a room and pay online from their phone or computer." },
  { slug: "gbs-suppliers", title: "GBS Generation Builders & Suppliers", cats: ["web"], tags: ["Web design", "Business website"],
    image: "assets/img/gbs.png", url: "https://gb-suppliers.netlify.app/",
    summary: "A business website for a quarry materials and haulage company.",
    problem: "A quarry materials supplier needed contractors and builders to find them online and trust them.",
    built: "A fast, responsive site showing materials, their own truck fleet, how delivery works, common questions and a quote request with WhatsApp contact.",
    tools: [],
    result: "Contractors can see what GBS supplies and request a quote in a few taps." },
  { slug: "apartment-tracker", title: "Apartment Tracker", cats: ["app"], tags: ["System", "Desktop application"],
    image: "assets/img/apartment-tracker.png", url: "",
    note: "Concept preview of the system dashboard.",
    summary: "A system for reporting and tracking apartment issues until they are fixed.",
    problem: "Apartment issues were hard to report and follow up.",
    built: "A system where issues are reported, recorded and tracked through to resolution.",
    tools: ["Python", "SQLite", "Tkinter"],
    result: "Every reported issue is recorded and can be followed to resolution." }
];

const PROCESS = [
  { t: "Talk", d: "You tell us what the business does and what you need." },
  { t: "Plan", d: "We agree pages, features and timeline before building." },
  { t: "Build", d: "We design and build it, and you review along the way." },
  { t: "Launch", d: "We put it online and stay available for changes." }
];

const CHAT = { hello: "Hi, I'm quick help for stinecreatives. What would you like to know?", items: [
  { q: "What do you build?", a: "Custom websites, web applications, online shops, search-friendly pages and business systems." },
  { q: "How much does it cost?", a: "Our pricing is affordable and depends on what you need. Tell us your idea and we agree a fair price before any work starts." },
  { q: "How long does it take?", a: "It depends on the size of the project. We agree a timeline with you before we start building." },
  { q: "Can you add payments?", a: "Yes. We build payment integration into websites and web applications, like the booking and payment flow on Aura Hotel." }
] };
