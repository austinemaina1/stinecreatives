const $ = (s, e = document) => e.querySelector(s);
const page = document.body.dataset.page, M = $("#main");
const wa = t => `https://wa.me/${SITE.whatsapp}` + (t ? `?text=${encodeURIComponent(t)}` : "");
const mark = `<svg width="38" height="38" viewBox="0 0 38 38" aria-hidden="true"><use href="#m" width="38" height="38"/></svg>`;
const brand = `<a class="brand" href="index.html" aria-label="${SITE.name} home">${mark}<span>stine<em>creatives</em></span></a>`;
const NAV = [["Services", "services.html", "services"], ["Our work", "work.html", "work"], ["Contact", "contact.html", "contact"]];
const HI = "Hi stinecreatives, I would like to talk about a project.";
const HERO = `<div class="hd"><div class="frame"><div class="dots"><i></i><i></i><i></i></div><img src="assets/img/gbs-desktop.png" alt="GBS website shown on a desktop screen"></div><div class="hp"><img src="assets/img/gbs-mobile.png" alt="GBS website shown on a phone"></div></div>`;
const ic = d => `<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const I = { wa: ic('<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9"/><path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>'), sun: ic('<circle cx="12" cy="12" r="4"/><path d="M3 12h1m8-9v1m8 8h1m-9 8v1m-6.4-15.4.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7"/>'), moon: ic('<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z"/>'), menu: ic('<path d="M4 6h16M4 12h16M4 18h16"/>'), chat: ic('<path d="M3 20l1.3-3.9A9 9 0 1 1 7.7 19L3 20"/><path d="M12 12v.01M8 12v.01M16 12v.01"/>'), mail: ic('<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 7l9 6l9-6"/>') };
document.body.insertAdjacentHTML("afterbegin", `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><linearGradient id="gp" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF4F96"/><stop offset=".55" stop-color="#FF5C78"/><stop offset="1" stop-color="#FF8A6B"/></linearGradient><linearGradient id="gt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3FEBD1"/><stop offset=".5" stop-color="#00BCD4"/><stop offset="1" stop-color="#007BA0"/></linearGradient><symbol id="m" viewBox="60 38 390 390"><circle cx="255" cy="233" r="195" fill="url(#gp)"/><path d="M255 38A195 195 0 0 1 255 428A97.5 97.5 0 0 0 255 233A97.5 97.5 0 0 1 255 38Z" fill="url(#gt)"/><circle cx="255" cy="135.5" r="25" fill="#FFF5FA"/><circle cx="255" cy="330.5" r="25" fill="#E6FFFB"/></symbol></defs></svg>`);

$("#hd").innerHTML = `<div class="wrap bar">${brand}<nav id="nav" aria-label="Main">${NAV.map(([t, h, k]) => `<a href="${h}"${k === page || (page === "case" && k === "work") ? ' aria-current="page"' : ""}>${t}</a>`).join("")}</nav><div class="tools"><button id="th" class="ghost"></button><a class="btn" href="contact.html">Get started</a><button id="mn" class="ghost menu" aria-label="Menu" aria-expanded="false" aria-controls="nav">${I.menu}</button></div></div>`;
$("#ft").innerHTML = `<div class="stripes"></div><div class="wrap">${brand}<p style="max-width:34ch">${SITE.tagline}</p><div class="row"><a class="ic" href="${wa()}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${I.wa}</a><a class="ic" href="mailto:${SITE.email}" aria-label="Email us">${I.mail}</a></div><div class="fine" style="width:100%">&copy; ${new Date().getFullYear()} ${SITE.name}. All rights reserved. Open to full-time roles: <a href="mailto:${SITE.email}?subject=Job%20opportunity">email us</a>.</div></div>`;
document.body.insertAdjacentHTML("beforeend", `<a class="wa" href="${wa(HI)}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${I.wa}</a>`);
const setTh = t => { document.documentElement.dataset.theme = t; try { localStorage.setItem("theme", t) } catch (e) {} const b = $("#th"); b.innerHTML = t === "dark" ? I.sun : I.moon; b.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode") };
setTh(document.documentElement.dataset.theme);
$("#th").onclick = () => setTh(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
$("#mn").onclick = e => { const o = $("#nav").classList.toggle("open"); e.target.setAttribute("aria-expanded", o) };

const ART = [
  `<rect x="26" y="22" width="92" height="9" fill="#072C3B"/><rect x="26" y="40" width="62" height="6" fill="#9CB3BC"/><rect x="26" y="60" width="26" height="40" fill="#FF4F7B"/><rect x="58" y="50" width="26" height="50" fill="#00A7C2"/><rect x="90" y="38" width="26" height="62" fill="#FF9A7A"/><circle cx="156" cy="40" r="20" fill="#FF9A7A" opacity=".6"/>`,
  `<rect x="40" y="18" width="130" height="78" rx="4" fill="#fff"/><rect x="40" y="18" width="130" height="12" fill="#072C3B"/><rect x="50" y="42" width="34" height="40" fill="#FF9A7A"/><rect x="92" y="42" width="34" height="40" fill="#7FDCE8"/><rect x="134" y="42" width="26" height="40" fill="#FFB3C7"/><circle cx="52" cy="24" r="3" fill="#FF4F7B"/>`,
  `<rect x="70" y="20" width="60" height="60" rx="14" fill="#007F99"/><rect x="82" y="38" width="36" height="6" fill="#fff"/><rect x="82" y="52" width="24" height="6" fill="#fff" opacity=".7"/><rect x="50" y="88" width="100" height="6" fill="#B7C9C0"/><rect x="72" y="96" width="56" height="8" fill="#FF9A7A"/>`,
  `<rect x="30" y="22" width="62" height="70" fill="#FF9A7A"/><rect x="108" y="22" width="62" height="70" fill="#FF4F7B"/><circle cx="76" cy="34" r="6" fill="#fff"/><circle cx="154" cy="34" r="6" fill="#fff"/><rect x="40" y="76" width="30" height="6" fill="#072C3B"/><rect x="118" y="76" width="30" height="6" fill="#fff"/>`,
  `<rect x="34" y="20" width="132" height="74" rx="4" fill="#fff"/><rect x="46" y="32" width="70" height="8" rx="4" fill="#D4D9E6"/><rect x="46" y="62" width="16" height="22" fill="#FF9A7A"/><rect x="68" y="54" width="16" height="30" fill="#007F99"/><rect x="90" y="44" width="16" height="40" fill="#00A7C2"/><rect x="112" y="36" width="16" height="48" fill="#FF4F7B"/><circle cx="146" cy="50" r="10" fill="#FF9A7A"/>`
];
const svc = (s, i) => `<article class="scard" id="s${i}"><div class="art a${i % 5}"><svg viewBox="0 0 200 110" aria-hidden="true">${ART[i % 5]}</svg></div><div class="sb"><h3>${s.title}</h3><p>${s.text}</p><ul>${s.points.map(x => `<li>${x}</li>`).join("")}</ul><a class="more" href="contact.html">Get started</a></div></article>`;
const shot = p => `<div class="frame${p.image ? "" : " ph"}"><div class="dots"><i></i><i></i><i></i></div>${p.image ? `<img src="${p.image}" alt="${p.title} preview" loading="lazy">` : `<div class="soon">Screenshot coming soon</div>`}</div>`;
const card = p => `<a class="card" href="case.html?p=${p.slug}"><span class="chip">${p.tags[0]}</span>${shot(p)}<h3>${p.title}</h3><p class="tags">${p.tags.join(" / ")}</p><p class="mu" style="margin-top:6px">${p.summary}</p></a>`;
const steps = `<ol class="steps">${PROCESS.map(s => `<li><h3>${s.t}</h3><p class="mu">${s.d}</p></li>`).join("")}</ol>`;
const secHead = (e, h, t) => `<span class="eye">${e}</span><div class="split"><h2 style="margin:0">${h}</h2><p>${t}</p></div>`;
const band = `<section class="band sec" id="start"><div class="wrap"><div><span class="eye" style="color:#3FEBD1">Ready to start?</span><h2>Let's build yours.</h2><p>Tell us what you want to achieve, or where you are stuck. We will listen, ask the right questions and help you plan the next step.</p></div><div><span class="eye" style="color:#B9C5DE">Write to us</span><a class="mail" href="mailto:${SITE.email}">${SITE.email}</a><div class="row" style="margin-top:28px"><a class="btn" href="${wa(HI)}" target="_blank" rel="noopener">${I.wa}Start on WhatsApp</a></div></div></div></section>`;
const enquiry = `<section class="sec wrap" id="enquiry"><div class="enq"><div class="info"><span class="eye">Get in touch</span><h2>Tell us about your project.</h2><p class="mu">Share a few details and we will reply with the right next step.</p><p><a href="mailto:${SITE.email}">${SITE.email}</a><br><span class="mu">Email us directly.</span></p><p><a href="${wa()}" target="_blank" rel="noopener">+${SITE.whatsapp}</a><br><span class="mu">WhatsApp is the fastest way to reach us.</span></p></div><form id="f"><label>Your name<input name="name" required autocomplete="name"></label><label>Phone or email<input name="contact" required></label><label>What do you need?<select name="service">${SERVICES.map(s => `<option>${s.title}</option>`).join("")}<option>Not sure yet</option></select></label><label>Tell us about the project<textarea name="message" rows="5" required placeholder="What would you like to create?"></textarea></label><button class="btn d" type="submit">Send enquiry</button><p id="ok" class="mu" role="status" hidden></p></form></div></section>`;
const head = (e, h, t) => `<section class="sec wrap" style="padding-bottom:40px"><span class="eye">${e}</span><h1>${h}</h1><p class="mu" style="font-size:1.15rem;margin-top:16px">${t}</p></section>`;

if (page === "home") {
  M.innerHTML = `<section class="hero"><div class="wrap"><div><span class="eye">Web design, apps and systems</span><h1>A website that brings in customers, not just visitors.</h1><p class="lead">We build fast, affordable and mobile-friendly websites, web applications and systems for businesses ready to grow online. We take care of everything, from the first idea to the day you go live.</p><div class="row"><a class="btn" href="${wa(HI)}" target="_blank" rel="noopener">${I.wa}Chat on WhatsApp</a><a class="btn o" href="work.html">See our work</a></div><ul class="ticks"><li>Affordable pricing</li><li>Fast, mobile-friendly builds</li><li>Payment integration</li></ul></div><div class="hv">${HERO}</div></div></section>
  <section class="sec wrap" id="services">${secHead("Our services", "Your idea deserves a website that does it justice.", "We design digital experiences that are clear, easy to use and built to help your business grow.")}<div class="cards">${SERVICES.map(svc).join("")}</div><div class="strip"><span>Planning, design and build, all handled by one team.</span><a class="btn" href="contact.html">Get started</a></div></section>
  <section class="sec alt" id="work"><div class="wrap">${secHead("Our projects", "Real projects, built to be used.", "A few of the businesses we have helped get online and work smarter.")}<div class="work">${PROJECTS.map(card).join("")}</div><div class="strip"><span>Your project could be the next one here.</span><a class="btn" href="contact.html">Talk to us</a></div></div></section>${band}${enquiry}`;
}
if (page === "work") {
  M.innerHTML = `${head("Portfolio", "Real projects, built to be used.", "Every project begins with a real problem. Open one to see how we solved it.")}<section class="wrap sec" style="padding-top:0"><div class="filters row" role="group" aria-label="Filter projects">${[["all", "All"], ["web", "Websites"], ["app", "Systems and apps"]].map(([k, t], i) => `<button class="ghost" data-k="${k}" aria-pressed="${i === 0}">${t}</button>`).join("")}</div><div class="work" id="pg"></div></section>${band}`;
  const draw = k => { $("#pg").innerHTML = PROJECTS.filter(p => k === "all" || p.cats.includes(k)).map(card).join("") };
  draw("all");
  document.querySelectorAll(".filters button").forEach(b => b.onclick = () => { document.querySelectorAll(".filters button").forEach(x => x.setAttribute("aria-pressed", x === b)); draw(b.dataset.k) });
}
if (page === "services") {
  M.innerHTML = `${head("Our services", "Your idea deserves a website that does it justice.", "Everything we make works well on phones, loads quickly and stays affordable.")}<section class="wrap sec" style="padding-top:0"><div class="cards">${SERVICES.map(svc).join("")}</div></section><section class="sec alt"><div class="wrap"><span class="eye">Our process</span>${steps}</div></section>${band}`;
}
if (page === "contact") { M.innerHTML = band + enquiry; const h = $("#start h2"); h.outerHTML = `<h1 style="font-size:clamp(2.1rem,4.6vw,3.4rem);margin-bottom:.4em">${h.innerHTML}</h1>`; }
if (page === "case") {
  const i = PROJECTS.findIndex(p => p.slug === new URLSearchParams(location.search).get("p")), p = PROJECTS[i];
  if (!p) { M.innerHTML = head("Case study", "Project not found", "Pick a project from our work page.") + `<div class="wrap sec" style="padding-top:0"><a class="btn d" href="work.html">View our work</a></div>` }
  else {
    document.title = `${p.title} Case Study | stinecreatives`;
    const n = PROJECTS[(i + 1) % PROJECTS.length], blk = (h, t) => `<div><h3>${h}</h3><p class="mu">${t}</p></div>`;
    M.innerHTML = `${head(p.tags.join(" / "), p.title, p.summary)}<div class="wrap" style="margin-bottom:8px">${p.url ? `<a class="btn d" href="${p.url}" target="_blank" rel="noopener">Visit live site</a>` : ""}</div><section class="sec wrap" style="padding-top:24px;padding-bottom:40px">${shot(p)}${p.note ? `<p class="mu" style="margin-top:12px;font-size:.9rem">${p.note}</p>` : ""}</section><section class="wrap" style="padding-bottom:88px"><div class="two">${blk("The problem", p.problem)}${blk("What we built", p.built)}${p.tools.length ? blk("Tools used", p.tools.join(", ")) : ""}${blk("The result", p.result)}</div><div class="row" style="margin-top:40px"><a class="btn d" href="contact.html">Get started</a><a class="btn o" style="color:var(--tx);border-color:var(--bd)" href="case.html?p=${n.slug}">Next: ${n.title}</a></div></section>${band}`;
  }
}
const fm = $("#f");
if (fm) fm.onsubmit = async e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target)), msg = `Hi stinecreatives, I'm ${d.name}.\nNeed: ${d.service}\nContact: ${d.contact}\n\n${d.message}`;
  if (SITE.formEndpoint) { try { await fetch(SITE.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) }) } catch (_) {} }
  const ok = $("#ok"); ok.hidden = false;
  ok.innerHTML = SITE.formEndpoint ? "Thanks. Your enquiry was sent by email and WhatsApp is opening." : `WhatsApp is opening. <a href="mailto:${SITE.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(msg)}">Send the same enquiry by email</a>`;
  window.open(wa(msg), "_blank");
};

/* quote bar (phones), quick-help chat, private visitor counter */
if (page !== "contact") { document.body.classList.add("has-q"); document.body.insertAdjacentHTML("beforeend", `<div class="qbar"><a class="btn" href="contact.html#enquiry">Get a quote</a><a class="ic" href="${wa("Hi stinecreatives, I would like a quote for a project.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${I.wa}</a></div>`); }
(() => {
  const w = document.createElement("div"); w.className = "chat";
  w.innerHTML = `<button class="chb" aria-label="Open quick help" aria-expanded="false">${I.chat}</button><div class="chp" hidden role="dialog" aria-label="Quick help"><div class="chh"><b>Quick help</b><button class="x" aria-label="Close quick help">&times;</button></div><div class="chm" aria-live="polite"></div><div class="chq"></div></div>`;
  document.body.appendChild(w);
  const m = $(".chm", w), q = $(".chq", w), p = $(".chp", w), b = $(".chb", w);
  const say = (t, me) => { const d = document.createElement("p"); d.className = me ? "me" : "bot"; d.textContent = t; m.appendChild(d); m.scrollTop = m.scrollHeight };
  const opts = () => { CHAT.items.forEach(i => { const x = document.createElement("button"); x.textContent = i.q; x.onclick = () => { say(i.q, 1); say(i.a) }; q.appendChild(x) }); const a = document.createElement("a"); a.href = wa(HI); a.target = "_blank"; a.rel = "noopener"; a.textContent = "Talk to a person on WhatsApp"; q.appendChild(a) };
  const open = o => { p.hidden = !o; b.setAttribute("aria-expanded", o); if (o && !m.children.length) { say(CHAT.hello); opts() } };
  b.onclick = () => open(p.hidden); $(".x", w).onclick = () => open(false);
})();
if (SITE.goatCounter) { const g = document.createElement("script"); g.async = true; g.src = "https://gc.zgo.at/count.js"; g.dataset.goatcounter = `https://${SITE.goatCounter}.goatcounter.com/count`; document.head.appendChild(g); }
