const trainings = [
  {
    id: 1,
    title: "STREET RAVE",
    short: "STREET RAVE",
    image: "./assets/class-street-rave.jpg",
    trainer: "Ардиан Радев",
    schedule: ["Понеделник · 18:00"],
    capacity: 12,
    available: 6,
    gender: "all",
    age: "adult",
    style: "rave"
  },
  {
    id: 2,
    title: "HIP-HOP COLLABO",
    short: "LADIES HIP-HOP",
    image: "./assets/class-hip-hop-collabo.jpg",
    trainer: "VS Dance Studios",
    schedule: ["Вторник · 19:00"],
    capacity: 12,
    available: 6,
    gender: "female",
    age: "adult",
    style: "hip-hop"
  },
  {
    id: 3,
    title: "HIP-HOP FOR KIDS",
    short: "HIP-HOP KIDS",
    image: "./assets/class-dancing-kids.jpg",
    trainer: "Кристин Йотова",
    schedule: ["Събота · 12:00"],
    capacity: 15,
    available: 8,
    gender: "all",
    age: "kids",
    style: "hip-hop"
  },
  {
    id: 4,
    title: "CHOREOGRAPHY & TECHNIQUE",
    short: "CHOREO & TECH",
    image: "./assets/class-choreography-and-technique.jpg",
    trainer: "Виктория Димитрова",
    schedule: ["Сряда · 20:00"],
    capacity: 12,
    available: 6,
    gender: "all",
    age: "adult",
    style: "contemporary"
  },
  {
    id: 5,
    title: "SEXY AND CONFIDENT",
    short: "SEXY & CONFIDENT",
    image: "./assets/class-sexy-and-confident.jpg",
    trainer: "Анна-Мария Панталеева",
    schedule: ["Четвъртък · 20:00"],
    capacity: 12,
    available: 6,
    gender: "female",
    age: "adult",
    style: "jazz-funk"
  },
  {
    id: 6,
    title: "HEELS STAGE",
    short: "HEELS STAGE",
    image: "./assets/class-heels-stage.jpg",
    trainer: "Ива Калицова",
    schedule: ["Петък · 19:00"],
    capacity: 12,
    available: 6,
    gender: "female",
    age: "adult",
    style: "jazz-funk"
  },
  {
    id: 7,
    title: "HEELS - SEXY QUEENS",
    short: "SEXY QUEENS",
    image: "./assets/class-heels-sexy-queens.jpg",
    trainer: "Виктория Димитрова",
    schedule: ["Петък · 20:00"],
    capacity: 12,
    available: 6,
    gender: "female",
    age: "adult",
    style: "jazz-funk"
  },
  {
    id: 8,
    title: "POPPING",
    short: "POPPING",
    image: "./assets/class-popping.jpg",
    trainer: "Симеон Йорданов",
    schedule: ["Вторник · 20:00"],
    capacity: 12,
    available: 6,
    gender: "all",
    age: "adult",
    style: "street-dance"
  },
  {
    id: 9,
    title: "BEGINNER HIP-HOP",
    short: "HIP-HOP",
    image: "./assets/class-beginner-hip-hop.jpg",
    trainer: "Божидар Костадинов",
    schedule: ["Сряда · 19:00"],
    capacity: 12,
    available: 6,
    gender: "all",
    age: "adult",
    style: "hip-hop"
  }
];

const heroSlides = [
  {
    image: "./assets/carousel01.jpg",
    kicker: "Бъди в",
    title: "СВЕТЛИНАТА",
    subtitle: "Твоята история заслужава сцена. Тук ще се учиш от професионални танцьори, ще усъвършенстваш техниката си и ще откриеш увереността да покажеш на какво си способен. Независимо дали започваш от нулата или вече имаш опит - ние ще ти помогнем да направиш следващата крачка и да се почувстваш истински в светлината.",
    actions: [
      { label: "ТРЕНИРОВКИ", href: "#trainings", primary: true },
      { label: "РАЗБЕРИ ПОВЕЧЕ ЗА НАС", href: "https://vs.dance/misia/", primary: false }
    ]
  },
  {
    image: "./assets/carousel02.jpg",
    kicker: "Открий своя",
    title: "РИТЪМ",
    subtitle: "Всеки има свой ритъм. Може би твоят просто още чака да бъде открит. Потопи се в света на модерните танци, пробвай различни стилове и намери този, в който се чувстваш най-себе си. От първата тренировка до голямата сцена — тренирай със страхотен екип, развивай се с всяко движение и се наслаждавай на пътя.",
    actions: [
      { label: "ТРЕНИРОВКИ", href: "#trainings", primary: true },
      { label: "РАЗБЕРИ ПОВЕЧЕ ЗА НАС", href: "https://vs.dance/misia/", primary: false }
    ]
  },
  {
    image: "./assets/carousel03.jpg",
    kicker: "Танцувай без",
    title: "ГРАНИЦИ",
    subtitle: "Остави музиката да те води, движението да говори вместо теб и сцената да стане твоето място. В VS.DANCE ще откриеш не просто танцово студио, а общност от хора, които споделят твоята страст. Тренирай, развивай се, създавай приятелства и превърни всяко движение в част от твоята история.",
    actions: [
      { label: "ТРЕНИРОВКИ", href: "#trainings", primary: true },
      { label: "РАЗБЕРИ ПОВЕЧЕ ЗА НАС", href: "https://vs.dance/misia/", primary: false }
    ]
  }
];

const trainingGrid = document.querySelector("#trainingGrid");
const heroLoader = document.querySelector("#heroLoader");
const carouselTrack = document.querySelector("#carouselTrack");
const carouselDots = document.querySelector("#carouselDots");
const loaderBar = document.querySelector("#loaderBar");
const loaderPercent = document.querySelector("#loaderPercent");
const header = document.querySelector("#header");
const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const toast = document.querySelector("#toast");
const backToTop = document.querySelector("#backToTop");
const filterCount = document.querySelector("#filterCount");
const filterButtons = document.querySelectorAll(".filter-btn");

const activeFilters = { gender: "all", age: "all", style: "all" };

function placeholder(title) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000">
    <rect width="100%" height="100%" fill="#111"/>
    <path d="M-100 900 L850 0" stroke="#FFD400" stroke-width="100"/>
    <text x="40" y="130" fill="#fff" font-family="Arial" font-size="58" font-weight="900">${title}</text>
    <text x="40" y="190" fill="#FFD400" font-family="Arial" font-size="25" font-weight="700">VS DANCE STUDIOS</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createTrainingCard(training) {
  const used = training.capacity - training.available;
  const percentage = Math.round((used / training.capacity) * 100);

  const card = document.createElement("article");
  card.className = "training-card";
  card.id = `training-${training.id}`;
  card.dataset.gender = training.gender;
  card.dataset.age = training.age;
  card.dataset.style = training.style;

  card.innerHTML = `
    <div class="training-image">
      <img src="${training.image}" alt="${training.title}" loading="lazy"
           onerror="this.src='${placeholder(training.short)}'">
    </div>

    <div class="training-body">
      <h2 class="training-title">${training.title}</h2>

      <div class="meta">
        <div><strong>ТРЕНЬОР:</strong> ${training.trainer}</div>
        <div><strong>ГРАФИК:</strong></div>
        ${training.schedule.map(x => `<div>${x}</div>`).join("")}
      </div>

      <div class="capacity">
        <div class="capacity-row">
          <span>СВОБОДНИ МЕСТА</span>
          <span>${training.available} / ${training.capacity}</span>
        </div>
        <div class="capacity-track">
          <div class="capacity-fill" style="width:${percentage}%"></div>
        </div>
      </div>

      <button class="yellow-button" data-book="${training.id}">
        ЗАПИШИ СЕ
      </button>
    </div>
  `;

  card.querySelector("[data-book]").addEventListener("click", () => {
    showToast(`Тук ще отворим формата за записване за „${training.title}“.`);
  });

  return card;
}

function render() {
  trainings.forEach(training => trainingGrid.appendChild(createTrainingCard(training)));
}

function matchesFilters(training) {
  const { gender, age, style } = activeFilters;

  const genderOk = gender === "all" || training.gender === "all" || training.gender === gender;
  const ageOk = age === "all" || training.age === "all" || training.age === age;
  const styleOk = style === "all" || training.style === style;

  return genderOk && ageOk && styleOk;
}

function applyFilters() {
  let visible = 0;

  trainings.forEach(training => {
    const card = document.querySelector(`#training-${training.id}`);
    if (!card) return;

    const show = matchesFilters(training);
    card.classList.toggle("is-hidden", !show);
    if (show) visible += 1;
  });

  filterCount.textContent = visible === 1
    ? "1 група намерена"
    : `${visible} групи намерени`;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const group = button.closest(".filter-group").dataset.group;
    activeFilters[group] = button.dataset.value;

    button.closest(".filter-options")
      .querySelectorAll(".filter-btn")
      .forEach(btn => btn.classList.toggle("is-active", btn === button));

    applyFilters();
  });
});

function animateLoader() {
  const duration = 2800;
  const start = performance.now();

  function frame(now) {
    const raw = Math.min((now - start) / duration, 1);
    const progress = 1 - Math.pow(1 - raw, 3);
    const percent = Math.round(progress * 100);

    loaderBar.style.width = `${percent}%`;
    loaderPercent.textContent = `${percent}%`;

    if (raw < 1) {
      requestAnimationFrame(frame);
    } else {
      introFinished();
    }
  }

  requestAnimationFrame(frame);
}

function introFinished() {
  setTimeout(() => {
    heroLoader.classList.add("hidden");
    startCarousel();
  }, 1000);
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let currentSlide = 0;
let carouselTimer = null;

function createSlide(slide) {
  const el = document.createElement("article");
  el.className = "carousel-slide";
  el.style.backgroundImage = `url("${slide.image}")`;

  el.innerHTML = `
    <div class="carousel-content">
      <div class="carousel-text">
        <p class="carousel-kicker">${slide.kicker}</p>
        <h1 class="carousel-title">${slide.title}</h1>
        <p class="carousel-subtitle">${slide.subtitle}</p>

        <div class="carousel-actions">
          ${slide.actions.map(action => `
            <a class="carousel-btn${action.primary ? " primary" : ""}" href="${action.href}">
              ${action.label}
            </a>`).join("")}
        </div>
      </div>
    </div>
  `;

  return el;
}

function renderCarousel() {
  heroSlides.forEach((slide, index) => {
    const el = createSlide(slide);
    if (index === 0) el.classList.add("is-active");
    carouselTrack.appendChild(el);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot" + (index === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", `Слайд ${index + 1}`);
    dot.addEventListener("click", () => goToSlide(index));
    carouselDots.appendChild(dot);
  });
}

function goToSlide(index) {
  const slides = carouselTrack.querySelectorAll(".carousel-slide");
  const dots = carouselDots.querySelectorAll(".carousel-dot");
  if (!slides.length) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((el, i) => el.classList.toggle("is-active", i === currentSlide));
  dots.forEach((el, i) => el.classList.toggle("is-active", i === currentSlide));
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function startCarousel() {
  if (reduceMotion || carouselTimer) return;
  carouselTimer = setInterval(nextSlide, 12000);
}

function openMenu() {
  mobileMenu.classList.add("open");
  menuButton.classList.add("active");
  menuButton.setAttribute("aria-expanded", "true");
  mobileMenu.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  menuButton.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 3200);
}

menuButton.addEventListener("click", () => {
  mobileMenu.classList.contains("open") ? closeMobileMenu() : openMenu();
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
  backToTop.classList.toggle("visible", window.scrollY > 400);
}, { passive: true });

backToTop.classList.toggle("visible", window.scrollY > 400);

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderCarousel();
render();
applyFilters();
animateLoader();
