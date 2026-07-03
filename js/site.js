// ============================================================
// SITE ENGINE — no editing needed. Reads config.js, policies.js
// and i18n.js. Plan cards re-render on language change.
// ============================================================

const NEED_LABEL_KEYS = {
  protection: "label_protection",
  child: "label_child",
  retirement: "label_retirement",
  savings: "label_savings",
  health: "label_health",
};

document.addEventListener("DOMContentLoaded", () => {
  injectConfig();
  setupNav();
  renderFeaturedPlans();
  renderAllPlans();
  renderTestimonials();
  setupInterestForm();
  setupWhatsAppLinks();
});

// Re-render plan cards whenever the language changes
document.addEventListener("langchange", () => {
  renderFeaturedPlans();
  renderAllPlans();
  renderTestimonials();
});

/* ---- Replace every [data-cfg] placeholder with config values ---- */
function injectConfig() {
  const map = {
    name: SITE_CONFIG.agentName,
    designation: SITE_CONFIG.designation,
    since: SITE_CONFIG.agencySince,
    years: new Date().getFullYear() - SITE_CONFIG.agencySince,
    doSince: SITE_CONFIG.developmentOfficerSince,
    team: SITE_CONFIG.teamSize,
    city: SITE_CONFIG.city,
    phone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: SITE_CONFIG.officeAddress,
    branch: SITE_CONFIG.branchDetails,
    license: SITE_CONFIG.licenseNumber,
    year: new Date().getFullYear(),
  };
  document.querySelectorAll("[data-cfg]").forEach((el) => {
    const key = el.getAttribute("data-cfg");
    if (map[key] !== undefined) el.textContent = map[key];
  });
  document.querySelectorAll("[data-cfg-href='tel']").forEach((el) => (el.href = "tel:" + SITE_CONFIG.phone.replace(/\s/g, "")));
  document.querySelectorAll("[data-cfg-href='mail']").forEach((el) => (el.href = "mailto:" + SITE_CONFIG.email));
}

/* ---- Mobile nav ---- */
function setupNav() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (btn && nav) btn.addEventListener("click", () => nav.classList.toggle("open"));
}

/* ---- WhatsApp links ---- */
function setupWhatsAppLinks() {
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.href = waLink(el.getAttribute("data-wa") || "");
  });
}

/* ---- Language-aware field picker: tagline → tagline_te etc. ---- */
function pf(p, field) {
  const lang = typeof getLang === "function" ? getLang() : "en";
  return p[`${field}_${lang}`] || p[field];
}

/* ---- Plan card renderer ---- */
function planCard(p) {
  const div = document.createElement("div");
  div.className = "plan-card" + (p.discontinued ? " discontinued" : "");
  div.dataset.need = p.need;
  const needLabel = p.discontinued ? t("label_discontinued") : t(NEED_LABEL_KEYS[p.need] || "label_savings");
  const points = pf(p, "keyPoints") || [];
  div.innerHTML = `
    <span class="plan-need">${needLabel}</span>
    <h3>${p.name}</h3>
    <div class="plan-no">${t("plan_no")} ${p.planNo}</div>
    <p class="plan-tagline">${pf(p, "tagline")}</p>
    <div class="plan-for"><strong>${t("plan_for_whom")}</strong><br>${pf(p, "forWhom")}</div>
    <ul>${points.map((k) => `<li>${k}</li>`).join("")}</ul>
    <div class="plan-cta">
      <a class="btn btn-wa" data-wa="Hi, I'd like to know more about ${p.name} (Plan ${p.planNo})." href="#">${t("btn_ask_wa")}</a>
      <a class="btn btn-outline" href="contact.html?plan=${p.id}">${t("btn_quote")}</a>
    </div>`;
  return div;
}

/* ---- Home page: featured plans ---- */
function renderFeaturedPlans() {
  const host = document.getElementById("featured-plans");
  if (!host || typeof POLICIES === "undefined") return;
  host.innerHTML = "";
  POLICIES.filter((p) => p.featured && !p.discontinued).forEach((p) => host.appendChild(planCard(p)));
  setupWhatsAppLinks();
}

/* ---- Plans page: full list + filters + discontinued ---- */
let filtersBound = false;
function renderAllPlans() {
  const host = document.getElementById("all-plans");
  if (!host || typeof POLICIES === "undefined") return;

  host.innerHTML = "";
  const active = POLICIES.filter((p) => !p.discontinued);
  const gone = POLICIES.filter((p) => p.discontinued);
  active.forEach((p) => host.appendChild(planCard(p)));

  const goneHost = document.getElementById("discontinued-plans");
  if (goneHost) {
    goneHost.innerHTML = "";
    if (gone.length === 0) {
      goneHost.parentElement.style.display = "none";
    } else {
      gone.forEach((p) => goneHost.appendChild(planCard(p)));
    }
  }

  const pills = document.querySelectorAll(".filter-pill");
  const applyFilter = () => {
    const activePill = document.querySelector(".filter-pill.active");
    const need = activePill ? activePill.dataset.need : "all";
    host.querySelectorAll(".plan-card").forEach((card) => {
      card.style.display = need === "all" || card.dataset.need === need ? "" : "none";
    });
  };

  if (!filtersBound) {
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        pills.forEach((x) => x.classList.remove("active"));
        pill.classList.add("active");
        applyFilter();
      });
    });
    // Deep-link: plans.html#child etc. pre-selects a filter
    const hash = location.hash.replace("#", "");
    if (hash && NEED_LABEL_KEYS[hash]) {
      const pill = document.querySelector(`.filter-pill[data-need='${hash}']`);
      if (pill) {
        pills.forEach((x) => x.classList.remove("active"));
        pill.classList.add("active");
      }
    }
    filtersBound = true;
  }
  applyFilter();
  setupWhatsAppLinks();
}

/* ---- Testimonials (home page) ---- */
function youtubeId(url) {
  if (!url) return "";
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : "";
}

function testimonialCard(item) {
  const div = document.createElement("div");
  div.className = "testimonial-card";
  const text = pf(item, "text") || item.text;
  const stars = "★".repeat(item.rating || 5) + "☆".repeat(5 - (item.rating || 5));
  const vid = youtubeId(item.videoUrl);
  div.innerHTML = `
    <div class="testimonial-stars">${stars}</div>
    <p class="testimonial-text">"${text}"</p>
    <div class="testimonial-name">${item.name}${item.location ? ", " + item.location : ""}</div>
    ${vid ? `<a class="testimonial-video-link" href="https://www.youtube.com/watch?v=${vid}" target="_blank" rel="noopener">▶ ${t("btn_watch_video")}</a>` : ""}
  `;
  return div;
}

function renderTestimonials() {
  const host = document.getElementById("testimonials-grid");
  if (!host || typeof TESTIMONIALS === "undefined") return;
  host.innerHTML = "";
  const items = TESTIMONIALS.filter((tItem) => tItem.active !== false);
  if (items.length === 0) {
    if (host.parentElement) host.parentElement.style.display = "none";
    return;
  }
  items.forEach((item) => host.appendChild(testimonialCard(item)));
}

/* ---- Interest form (Formspree) ---- */
function setupInterestForm() {
  const form = document.getElementById("interest-form");
  if (!form) return;

  const params = new URLSearchParams(location.search);
  const planId = params.get("plan");
  if (planId) {
    const plan = (typeof POLICIES !== "undefined") ? POLICIES.find((p) => p.id === planId) : null;
    const planName = plan ? plan.name : planId;
    const msg = form.querySelector("[name='message']");
    if (msg) msg.value = `I am interested in ${planName}. Please share a premium quote.`;
  }

  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!SITE_CONFIG.formspreeId) {
      status.textContent = t("form_not_setup");
      status.className = "form-status err";
      return;
    }
    status.textContent = t("form_sending");
    status.className = "form-status";
    try {
      const res = await fetch(`https://formspree.io/f/${SITE_CONFIG.formspreeId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        status.textContent = t("form_ok");
        status.className = "form-status ok";
      } else throw new Error();
    } catch {
      status.textContent = t("form_err");
      status.className = "form-status err";
    }
  });
}
