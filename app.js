const cardFiles = [
  "MHW CARD A RATHALOS.jpg",
  "MHW CARD ACIDIC GLAVENUS.jpg",
  "MHW CARD ALATREON.jpg",
  "MHW CARD ANCIENT LESHEN.jpg",
  "MHW CARD ANJA.jpg",
  "MHW CARD B.DIABLOS.jpg",
  "MHW CARD BANBARO.jpg",
  "MHW CARD BARIOTH.jpg",
  "MHW CARD BARROTH.jpg",
  "MHW CARD BAZEL.jpg",
  "MHW CARD BEHEMOTH.jpg",
  "MHW CARD BEOTODUS.jpg",
  "MHW CARD BLACKVEIL VAAL.jpg",
  "MHW CARD BRACHYDIOS.jpg",
  "MHW CARD BRUTE TIGREX.jpg",
  "MHW CARD CORAL PUKEI.jpg",
  "MHW CARD DEVILJHO.jpg",
  "MHW CARD DIABLOS.jpg",
  "MHW CARD DODOGAMA.jpg",
  "MHW CARD EBONY ODOGARON.jpg",
  "MHW CARD FATALIS.jpg",
  "MHW CARD FROSTFANG BARIOTH.jpg",
  "MHW CARD FULGUR ANJA.jpg",
  "MHW CARD FURIOUS RAJANG.jpg",
  "MHW CARD GARUGA.jpg",
  "MHW CARD GIRROS.jpg",
  "MHW CARD GLAVENUS.jpg",
  "MHW CARD GOLD RATHIAN.jpg",
  "MHW CARD JAGRAS.jpg",
  "MHW CARD JYURATODUS.jpg",
  "MHW CARD KIRIN.jpg",
  "MHW CARD KULU.jpg",
  "MHW CARD KULVE TAROTH 2.jpg",
  "MHW CARD KUSHALA.jpg",
  "MHW CARD LAVASIOTH.jpg",
  "MHW CARD LEGIANA.jpg",
  "MHW CARD LESHEN.jpg",
  "MHW CARD LUNASTRA.jpg",
  "MHW CARD NAMIELLE.jpg",
  "MHW CARD NARGA.jpg",
  "MHW CARD NERGIGANTE.jpg",
  "MHW CARD NIGHT PAOLUMU.jpg",
  "MHW CARD ODOGARON.jpg",
  "MHW CARD P RATHIAN.jpg",
  "MHW CARD PAOLUMU.jpg",
  "MHW CARD PUKEI.jpg",
  "MHW CARD RADOBAAN.jpg",
  "MHW CARD RAGING BRACHY.jpg",
  "MHW CARD RAJANG.jpg",
  "MHW CARD RATHALOS.jpg",
  "MHW CARD RATHIAN.jpg",
  "MHW CARD RUINER NERG.jpg",
  "MHW CARD SAFIJIIVA.jpg",
  "MHW CARD SAVAGE JHO.jpg",
  "MHW CARD SCARRED GARUGA.jpg",
  "MHW CARD SEETHING BAZEL.jpg",
  "MHW CARD SHARA 1.jpg",
  "MHW CARD SHRIEKING LEGIANA.jpg",
  "MHW CARD SILVER RATHALOS.jpg",
  "MHW CARD STYGIAN ZINOGRE.jpg",
  "MHW CARD TEOSTRA.jpg",
  "MHW CARD TIGREX.jpg",
  "MHW CARD TOBI.jpg",
  "MHW CARD TRUE SHARA.jpg",
  "MHW CARD TZITZI.jpg",
  "MHW CARD URAGAAN.jpg",
  "MHW CARD VAAL.jpg",
  "MHW CARD VELKHANA.jpg",
  "MHW CARD VIPER TOBI.jpg",
  "MHW CARD XENO.jpg",
  "MHW CARD ZINOGRE.jpg",
  "MHW CARD ZORAH.jpg"
];

const monsterNames = {
  "A RATHALOS": "Rathalos",
  "ANJA": "Anjanath",
  "B.DIABLOS": "Black Diablos",
  "BAZEL": "Bazelgeuse",
  "BRUTE TIGREX": "Brute Tigrex",
  "CORAL PUKEI": "Coral Pukei-Pukei",
  "EBONY ODOGARON": "Ebony Odogaron",
  "FULGUR ANJA": "Fulgur Anjanath",
  "GARUGA": "Yian Garuga",
  "GIRROS": "Great Girros",
  "JAGRAS": "Great Jagras",
  "KULU": "Kulu-Ya-Ku",
  "KULVE TAROTH 2": "Kulve Taroth",
  "KUSHALA": "Kushala Daora",
  "NARGA": "Nargacuga",
  "NERGIGANTE": "Nergigante",
  "NIGHT PAOLUMU": "Nightshade Paolumu",
  "P RATHIAN": "Pink Rathian",
  "PUKEI": "Pukei-Pukei",
  "RATHALOS": "Rathalos",
  "RUINER NERG": "Ruiner Nergigante",
  "SAFIJIIVA": "Safi'jiiva",
  "SAVAGE JHO": "Savage Deviljho",
  "SCARRED GARUGA": "Scarred Yian Garuga",
  "SEETHING BAZEL": "Seething Bazelgeuse",
  "SHARA 1": "Shara Ishvalda",
  "TOBI": "Tobi-Kadachi",
  "TRUE SHARA": "True Shara Ishvalda",
  "TZITZI": "Tzitzi-Ya-Ku",
  "VAAL": "Vaal Hazak",
  "XENO": "Xeno'jiiva",
  "ZORAH": "Zorah Magdaros"
};

const printedCardNumbers = {
  "MHW CARD A RATHALOS.jpg": "N24",
  "MHW CARD ACIDIC GLAVENUS.jpg": "N49",
  "MHW CARD ALATREON.jpg": "N69",
  "MHW CARD ANCIENT LESHEN.jpg": "N36",
  "MHW CARD ANJA.jpg": "N7",
  "MHW CARD B.DIABLOS.jpg": "N25",
  "MHW CARD BANBARO.jpg": "N38",
  "MHW CARD BARIOTH.jpg": "N42",
  "MHW CARD BARROTH.jpg": "N4",
  "MHW CARD BAZEL.jpg": "N21",
  "MHW CARD BEHEMOTH.jpg": "N34",
  "MHW CARD BEOTODUS.jpg": "N37",
  "MHW CARD BLACKVEIL VAAL.jpg": "N53",
  "MHW CARD BRACHYDIOS.jpg": "N46",
  "MHW CARD BRUTE TIGREX.jpg": "N61",
  "MHW CARD CORAL PUKEI.jpg": "N41",
  "MHW CARD DEVILJHO.jpg": "N31",
  "MHW CARD DIABLOS.jpg": "N16",
  "MHW CARD DODOGAMA.jpg": "N19",
  "MHW CARD EBONY ODOGARON.jpg": "N50",
  "MHW CARD FATALIS.jpg": "N71",
  "MHW CARD FROSTFANG BARIOTH.jpg": "N70",
  "MHW CARD FULGUR ANJA.jpg": "N48",
  "MHW CARD FURIOUS RAJANG.jpg": "N67",
  "MHW CARD GARUGA.jpg": "N59",
  "MHW CARD GIRROS.jpg": "N11",
  "MHW CARD GLAVENUS.jpg": "N44",
  "MHW CARD GOLD RATHIAN.jpg": "N62",
  "MHW CARD JAGRAS.jpg": "N1",
  "MHW CARD JYURATODUS.jpg": "N5",
  "MHW CARD KIRIN.jpg": "N17",
  "MHW CARD KULU.jpg": "N2",
  "MHW CARD KULVE TAROTH 2.jpg": "N32",
  "MHW CARD KUSHALA.jpg": "N28",
  "MHW CARD LAVASIOTH.jpg": "N22",
  "MHW CARD LEGIANA.jpg": "N13",
  "MHW CARD LESHEN.jpg": "N35",
  "MHW CARD LUNASTRA.jpg": "N33",
  "MHW CARD NAMIELLE.jpg": "N54",
  "MHW CARD NERGIGANTE.jpg": "N26",
  "MHW CARD NIGHT PAOLUMU.jpg": "N40",
  "MHW CARD NARGA.jpg": "N43",
  "MHW CARD ODOGARON.jpg": "N14",
  "MHW CARD P RATHIAN.jpg": "N20",
  "MHW CARD PAOLUMU.jpg": "N10",
  "MHW CARD PUKEI.jpg": "N3",
  "MHW CARD RADOBAAN.jpg": "N12",
  "MHW CARD RAGING BRACHY.jpg": "N68",
  "MHW CARD RAJANG.jpg": "N64",
  "MHW CARD RATHIAN.jpg": "N8",
  "MHW CARD RATHALOS.jpg": "N15",
  "MHW CARD RUINER NERG.jpg": "N56",
  "MHW CARD SAFIJIIVA.jpg": "N66",
  "MHW CARD SAVAGE JHO.jpg": "N55",
  "MHW CARD SCARRED GARUGA.jpg": "N60",
  "MHW CARD SEETHING BAZEL.jpg": "N52",
  "MHW CARD SHARA 1.jpg": "N57",
  "MHW CARD SHRIEKING LEGIANA.jpg": "N47",
  "MHW CARD SILVER RATHALOS.jpg": "N63",
  "MHW CARD STYGIAN ZINOGRE.jpg": "N65",
  "MHW CARD TEOSTRA.jpg": "N27",
  "MHW CARD TIGREX.jpg": "N45",
  "MHW CARD TOBI.jpg": "N6",
  "MHW CARD TRUE SHARA.jpg": "N57",
  "MHW CARD TZITZI.jpg": "N9",
  "MHW CARD URAGAAN.jpg": "N23",
  "MHW CARD VAAL.jpg": "N29",
  "MHW CARD VELKHANA.jpg": "N51",
  "MHW CARD VIPER TOBI.jpg": "N39",
  "MHW CARD XENO.jpg": "N30",
  "MHW CARD ZORAH.jpg": "N18",
  "MHW CARD ZINOGRE.jpg": "N58"
};

function getNumericCardNumber(numberCode) {
  const match = /^N(\d+)$/i.exec(numberCode || "");
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

const allCards = cardFiles
  .filter((file) => !/(BACK|background|MHWCARDBACKground)/i.test(file))
  .map((file) => {
    const cleanName = file
      .replace(/^MHW CARD\s+/i, "")
      .replace(/\.jpg$/i, "")
      .replace(/\s+/g, " ")
      .trim();
    const monsterName = monsterNames[cleanName] || cleanName;

    const edition = getNumericCardNumber(printedCardNumbers[file]) <= 36
      ? "Base"
      : "Iceborne";

    return {
      id: file,
      name: monsterName,
      sortName: monsterName.toLocaleLowerCase(),
      image: `./cards/${file}`,
      numberCode: printedCardNumbers[file] || "",
      number: getNumericCardNumber(printedCardNumbers[file]),
      edition,
      label: cleanName.toUpperCase()
    };
  })
  .sort((a, b) => a.sortName.localeCompare(b.sortName));

const cardGrid = document.getElementById("card-grid");
const cardCount = document.getElementById("card-count");
const searchInput = document.getElementById("search-input");
const filterSelect = document.getElementById("filter-select");
const sortSelect = document.getElementById("sort-select");
const collectionToggle = document.getElementById("collection-toggle");
const collectionPanel = document.getElementById("collection-panel");
const menuBackdrop = document.getElementById("menu-backdrop");
const collectionTitle = document.querySelector(".search-header h2");
const installButton = document.getElementById("install-button");
const cardModal = document.getElementById("card-modal");
const modalStage = document.getElementById("modal-stage");
const modalTrack = document.getElementById("modal-track");
const modalSlots = [...document.querySelectorAll(".modal-slot")];
const modalImage = document.getElementById("modal-image");
const filmstrip = document.getElementById("filmstrip");
const filmstripCaption = document.getElementById("filmstrip-caption");
const modalClose = document.getElementById("modal-close");
const modalPrevious = document.getElementById("modal-previous");
const modalNext = document.getElementById("modal-next");

// Set topbar height CSS variable for proper panel positioning
function updateTopbarHeight() {
  const topbar = document.querySelector(".topbar");
  document.documentElement.style.setProperty("--topbar-height", topbar.offsetHeight + "px");
}
updateTopbarHeight();
window.addEventListener("resize", updateTopbarHeight);

let activeFilter = "all";
let activeSort = "name";
let deferredPrompt = null;
let modalCardId = null;

// Card viewer state: the snapshot being browsed, where we are in it, and the
// filmstrip geometry used to map scroll position to index.
let viewerCards = [];
let viewerIndex = -1;
let filmstripItems = [];
let itemCentres = [];
let filmstripStep = 1;
let scrollFrame = 0;
let restTimer = 0;
let stripGlideFrame = 0;
let wheelAccumulator = 0;
let wheelResetTimer = 0;

// Drag gesture state.
let dragPointerId = null;
let dragStartX = 0;
let dragStartY = 0;
let dragOffsetX = 0;
let dragAxis = "";
let dragStartTime = 0;
let dragStartIndex = 0;
let dragCommitBase = 0;
let swallowNextStageClick = false;
let swipeSettleTimer = 0;

function getVisibleCards() {
  const query = searchInput.value.trim().toLowerCase();

  const visibleCards = allCards.filter((card) => {
    const matchesFilter = activeFilter === "all" || card.edition === activeFilter;
    const matchesQuery = !query || card.name.toLowerCase().includes(query);
    return matchesFilter && matchesQuery;
  });

  return visibleCards.sort((firstCard, secondCard) => {
    if (activeSort === "number") {
      return firstCard.number - secondCard.number || firstCard.sortName.localeCompare(secondCard.sortName);
    }

    return firstCard.sortName.localeCompare(secondCard.sortName);
  });
}

function renderCards() {
  const visible = getVisibleCards();
  cardCount.textContent = String(new Set(visible.map((card) => card.number)).size);

  cardGrid.innerHTML = visible
    .map(
      (card) => `
        <article class="card-item" tabindex="0" aria-label="${card.name}">
          <img src="${card.image}" alt="${card.name} card" data-card-id="${card.id}" loading="lazy" />
        </article>
      `
    )
    .join("");

  cardGrid.querySelectorAll(".card-item").forEach((cardItem) => {
    const openCard = () => {
      const card = allCards.find((item) => item.id === cardItem.querySelector("img").dataset.cardId);

      if (!card) {
        return;
      }

      openCardModal(card);
    };

    cardItem.addEventListener("click", openCard);
    cardItem.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCard();
      }
    });
  });
}

/* ---------------------------------------------------------------------------
   Card viewer
   The viewer works off a snapshot of whatever the grid is showing, so the
   filmstrip, the arrows and the swipe all walk the same list in the same order.
   --------------------------------------------------------------------------- */

// Wheel delta needed to move on by one card. A mouse notch is about 100, so
// one notch is one card; a trackpad's smaller deltas add up.
const WHEEL_STEP = 45;

function buildFilmstrip() {
  filmstrip.innerHTML = viewerCards
    .map(
      (card, index) => `
        <button class="filmstrip-item" type="button" role="option" aria-selected="false"
                data-index="${index}" tabindex="-1" aria-label="${card.name}">
          <img src="${card.image}" alt="" loading="lazy" draggable="false" />
        </button>
      `
    )
    .join("");

  filmstripItems = [...filmstrip.querySelectorAll(".filmstrip-item")];
  measureFilmstrip();
}

// Where each thumbnail's centre sits along the strip's content. Measured once
// per layout rather than per scroll event, and re-measured when the strip
// changes size — a rotated phone moves every one of these.
function measureFilmstrip() {
  itemCentres = filmstripItems.map((item) => item.offsetLeft + item.offsetWidth / 2);
  // Averaged over the whole strip rather than taken from one adjacent pair:
  // offsetLeft is rounded to whole pixels, and that error compounds.
  filmstripStep =
    itemCentres.length > 1
      ? (itemCentres[itemCentres.length - 1] - itemCentres[0]) / (itemCentres.length - 1)
      : 1;
}

function centreOffsetFor(index) {
  return itemCentres[index] - filmstrip.clientWidth / 2;
}

// Which thumbnail is nearest the middle of the strip. The even spacing makes
// rounding a good guess, but only a guess: at either end the scroll range runs
// out before the guess does, so check the neighbours and take the real winner.
function indexNearestCentre() {
  return indexNearestTo(filmstrip.scrollLeft + filmstrip.clientWidth / 2);
}

function indexNearestTo(target) {
  const guess = Math.round((target - itemCentres[0]) / filmstripStep);
  let best = Math.min(Math.max(guess, 0), itemCentres.length - 1);

  for (let candidate = best - 1; candidate <= best + 1; candidate += 1) {
    if (
      itemCentres[candidate] !== undefined &&
      Math.abs(itemCentres[candidate] - target) < Math.abs(itemCentres[best] - target)
    ) {
      best = candidate;
    }
  }

  return best;
}

function scrollFilmstripTo(index, { animate = true } = {}) {
  if (!filmstripItems[index]) {
    return;
  }

  const target = centreOffsetFor(index);

  if (!animate) {
    stopStripGlide();
    filmstrip.scrollLeft = target;
    updateTrack();
    return;
  }

  glideStripTo(target);
}

// The strip slides the new thumbnail into the middle. Only the strip: the card
// itself has already cut to the new one by the time this starts, so none of
// this motion is on the main picture.
function glideStripTo(target) {
  stopStripGlide();

  const from = filmstrip.scrollLeft;
  const distance = target - from;

  if (!distance) {
    return;
  }

  const duration = Math.min(520, 220 + Math.abs(distance) * 0.25);
  const started = performance.now();
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const step = (now) => {
    const progress = Math.min((now - started) / duration, 1);
    filmstrip.scrollLeft = from + distance * easeOut(progress);

    if (progress < 1) {
      stripGlideFrame = requestAnimationFrame(step);
      return;
    }

    stripGlideFrame = 0;
    updateTrack();
  };

  stripGlideFrame = requestAnimationFrame(step);
}

function stopStripGlide() {
  if (stripGlideFrame) {
    cancelAnimationFrame(stripGlideFrame);
    stripGlideFrame = 0;
  }
}

// Cheap enough to run on every frame of a fling: the highlight and the caption.
function markActive(index) {
  if (index === viewerIndex || !viewerCards[index]) {
    return;
  }

  filmstripItems[viewerIndex]?.setAttribute("aria-selected", "false");
  filmstripItems[index]?.setAttribute("aria-selected", "true");
  viewerIndex = index;
  modalCardId = viewerCards[index].id;
  filmstripCaption.textContent =
    `${viewerCards[index].name}  ·  ${viewerCards[index].numberCode || "—"}`;
}

// Fill the three slots with the current card and its neighbours. Only the src
// changes, so the images already on screen are never re-decoded.
function renderSlots(centre) {
  modalSlots.forEach((slot) => {
    const index = centre + Number(slot.dataset.offset);
    const card = viewerCards[index];
    const image = slot.querySelector("img");

    slot.classList.toggle("is-current", index === centre);
    // The ends have no neighbour on one side; leave that slot empty rather
    // than wrapping to a card the strip cannot scroll to.
    slot.style.visibility = card ? "visible" : "hidden";

    if (card && image.dataset.cardId !== card.id) {
      image.dataset.cardId = card.id;
      image.src = card.image;
      image.alt = index === centre ? `${card.name} card` : "";
    }
  });

  // Fetch one further out in both directions, so the next card to slide in is
  // already decoded and cannot hitch the settle as it arrives.
  [centre - 2, centre + 2].forEach((index) => {
    if (viewerCards[index]) {
      new Image().src = viewerCards[index].image;
    }
  });
}

// The whole point: the row's position comes from the filmstrip's scroll
// position, so dragging the strip moves the cards with it, one to one.
// The scroll position decides which card is current and nothing else. It used
// to position the row as well, so scrolling the strip dragged the main card
// along with it; now the card holds still and is simply replaced once a
// different thumbnail is the nearest one to the middle.
function updateTrack() {
  if (!itemCentres.length || stripGlideFrame) {
    return; // mid-slide towards a card that has already been chosen
  }

  const centre = indexNearestCentre();

  if (centre !== viewerIndex) {
    markActive(centre);
    renderSlots(centre);
  }
}

// Distance between slot centres: one card plus the gap between them.
function slotStride() {
  return modalSlots[0].offsetWidth + parseFloat(getComputedStyle(modalTrack).columnGap || 0);
}

function showCardAt(index, { scrollStrip = true, animate = true } = {}) {
  markActive(index);
  renderSlots(index);

  if (scrollStrip) {
    scrollFilmstripTo(index, { animate });
  } else {
    updateTrack();
  }
}

function moveModalCard(direction) {
  if (viewerCards.length < 2) {
    return;
  }

  // Clamped rather than wrapped: the filmstrip is a line with two ends, and
  // jumping from one end to the other would fling it the whole way across.
  const nextIndex = Math.min(Math.max(viewerIndex + direction, 0), viewerCards.length - 1);
  showCardAt(nextIndex);
}

function setPageScrollLocked(isLocked) {
  const body = document.body;
  const isAlreadyLocked = body.classList.contains("modal-open");

  if (isLocked && !isAlreadyLocked) {
    // Measure before hiding the scrollbar, then reserve that exact width so
    // the page's content area does not grow or shift sideways.
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.paddingRight = `${scrollbarWidth}px`;
    body.classList.add("modal-open");
  } else if (!isLocked && isAlreadyLocked) {
    body.classList.remove("modal-open");
    body.style.paddingRight = "";
  }
}

function openCardModal(card) {
  viewerCards = getVisibleCards();
  viewerIndex = -1;

  const startIndex = Math.max(0, viewerCards.findIndex((item) => item.id === card.id));

  cardModal.classList.remove("hidden");
  setPageScrollLocked(true);
  buildFilmstrip();
  showCardAt(startIndex, { animate: false });
  modalClose.focus();
}

function closeCardModal() {
  cardModal.classList.add("hidden");
  modalSlots.forEach((slot) => {
    const image = slot.querySelector("img");
    image.removeAttribute("src");
    delete image.dataset.cardId;
  });
  filmstrip.innerHTML = "";
  filmstripItems = [];
  modalCardId = null;
  viewerIndex = -1;
  setPageScrollLocked(collectionPanel.getAttribute("data-open") === "true");
}

/* --- Filmstrip scrubbing -------------------------------------------------- */

// Native scrolling does the momentum and the rubber-banding; we only translate
// where it ended up into an index.
// Every scroll drives the card row, whoever caused it — a finger on the strip,
// a finger on the card, the wheel, or a smooth scroll from the arrows.
filmstrip.addEventListener("scroll", () => {
  if (!filmstripItems.length) {
    return;
  }

  if (!scrollFrame) {
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      updateTrack();
    });
  }

  // Coming to rest between two cards looks broken, so once the scrolling
  // stops the strip glides on to the nearest one. This is a soft, eased move
  // rather than the hard jump CSS scroll-snap was making.
  clearTimeout(restTimer);
  restTimer = setTimeout(settleToNearestCard, 140);
});

function settleToNearestCard() {
  if (dragPointerId !== null || !itemCentres.length) {
    return; // still under the finger
  }

  const index = indexNearestCentre();

  // The settle scrolls too, which lands us back here; without this it would
  // chase its own tail forever.
  if (Math.abs(filmstrip.scrollLeft - centreOffsetFor(index)) > 2) {
    scrollFilmstripTo(index);
  }
}

/* --- Wheel ---------------------------------------------------------------- */

// Chrome already turns a vertical wheel into horizontal movement over a strip
// that only scrolls sideways, but it moves roughly a dozen cards per notch.
// Taking the gesture over steps one card at a time instead, and because every
// step lands on a card the wheel can never leave you stranded between two.
cardModal.addEventListener(
  "wheel",
  (event) => {
    if (viewerCards.length < 2) {
      return;
    }

    const delta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

    if (!delta) {
      return;
    }

    event.preventDefault();
    wheelAccumulator += delta;

    // A trackpad sends many small deltas where a mouse sends one big one, so
    // accumulate and forget the remainder once the gesture stops.
    clearTimeout(wheelResetTimer);
    wheelResetTimer = setTimeout(() => {
      wheelAccumulator = 0;
    }, 200);

    if (Math.abs(wheelAccumulator) >= WHEEL_STEP) {
      const direction = Math.sign(wheelAccumulator);
      wheelAccumulator = 0;
      moveModalCard(direction);
    }
  },
  { passive: false }
);

filmstrip.addEventListener("click", (event) => {
  const item = event.target.closest(".filmstrip-item");

  if (item) {
    showCardAt(Number(item.dataset.index));
  }
});

// A resize moves every thumbnail, so the cached centres have to be rebuilt and
// the current card pulled back to the middle.
new ResizeObserver(() => {
  if (!filmstripItems.length) {
    return;
  }

  measureFilmstrip();
  scrollFilmstripTo(viewerIndex, { animate: false });
}).observe(filmstrip);

/* --- Drag / swipe on the card -------------------------------------------- */

modalStage.addEventListener("pointerdown", (event) => {
  if (event.button > 0 || swipeSettleTimer) {
    return;
  }

  stopStripGlide();
  dragCommitBase = 0;
  dragPointerId = event.pointerId;
  dragStartX = event.clientX;
  dragStartY = event.clientY;
  dragStartTime = event.timeStamp;
  dragStartIndex = viewerIndex;
  dragOffsetX = 0;
  dragAxis = "";
  modalStage.setPointerCapture(event.pointerId);
});

modalStage.addEventListener("pointermove", (event) => {
  if (dragPointerId !== event.pointerId) {
    return;
  }

  const deltaX = event.clientX - dragStartX;
  const deltaY = event.clientY - dragStartY;

  // Wait until the gesture commits to an axis, so a vertical scroll on a phone
  // isn't stolen and turned into a card change.
  if (!dragAxis && Math.hypot(deltaX, deltaY) > 8) {
    dragAxis = Math.abs(deltaX) > Math.abs(deltaY) ? "x" : "y";
  }

  if (dragAxis !== "x") {
    return;
  }

  event.preventDefault();
  // Follow the finger so the next or previous card visibly slides in.
  modalStage.classList.add("is-swiping");
  dragOffsetX = Math.max(-slotStride(), Math.min(slotStride(), deltaX));
  modalTrack.style.transition = "none";
  modalTrack.style.transform = `translateX(${dragOffsetX}px)`;
});

// How far you drag before the card hands over to the next one.
const COMMIT_FRACTION = 0.3;

function endDrag(event) {
  if (dragPointerId !== event.pointerId) {
    return;
  }

  const wasHorizontalSwipe = dragAxis === "x";
  const threshold = slotStride() * COMMIT_FRACTION;
  const direction = dragOffsetX < 0 ? 1 : -1;
  const nextIndex = Math.min(Math.max(viewerIndex + direction, 0), viewerCards.length - 1);

  // A drag that ends off the card still fires a click on the stage. Without
  // this the viewer would close every time you swiped past the card's edge.
  swallowNextStageClick = dragAxis !== "";
  dragPointerId = null;
  dragAxis = "";
  dragCommitBase = 0;

  if (!wasHorizontalSwipe) {
    return;
  }

  const shouldChangeCard =
    event.type === "pointerup" && Math.abs(dragOffsetX) >= threshold && nextIndex !== viewerIndex;
  const targetOffset = shouldChangeCard ? (direction > 0 ? -slotStride() : slotStride()) : 0;

  // Give the browser one frame to register the finger's final position before
  // sending the row to its destination. This avoids a jump on quick swipes.
  requestAnimationFrame(() => {
    modalTrack.style.transition = "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)";
    modalTrack.style.transform = `translateX(${targetOffset}px)`;
  });

  swipeSettleTimer = window.setTimeout(() => {
    if (shouldChangeCard) {
      showCardAt(nextIndex);
    }

    // Reset after the slots have been updated, ready for the next swipe.
    modalTrack.style.transition = "none";
    modalTrack.style.transform = "translateX(0)";
    modalStage.classList.remove("is-swiping");
    dragOffsetX = 0;
    swipeSettleTimer = 0;
  }, 300);
}

modalStage.addEventListener("pointerup", endDrag);
modalStage.addEventListener("pointercancel", endDrag);
modalStage.addEventListener("pointerleave", endDrag);

modalClose.addEventListener("click", closeCardModal);
modalPrevious.addEventListener("click", () => moveModalCard(-1));
modalNext.addEventListener("click", () => moveModalCard(1));
cardModal.addEventListener("click", (event) => {
  if (swallowNextStageClick) {
    swallowNextStageClick = false;
    return;
  }

  if (event.target === cardModal || event.target === modalStage) {
    closeCardModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !cardModal.classList.contains("hidden")) {
    closeCardModal();
  } else if (event.key === "ArrowLeft" && !cardModal.classList.contains("hidden")) {
    moveModalCard(-1);
  } else if (event.key === "ArrowRight" && !cardModal.classList.contains("hidden")) {
    moveModalCard(1);
  }
});

searchInput.addEventListener("input", renderCards);

function setupCustomSelect(selectElement, onChange) {
  const trigger = selectElement.querySelector(".custom-select-trigger");
  const options = [...selectElement.querySelectorAll('[role="option"]')];

  const close = (returnFocus = false) => {
    selectElement.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");

    if (returnFocus) {
      trigger.focus();
    }
  };

  const selectOption = (option) => {
    options.forEach((item) => item.setAttribute("aria-selected", String(item === option)));
    selectElement.querySelector("[id$='-value']").textContent = option.textContent;
    onChange(option.dataset.value);
    close(true);
  };

  trigger.addEventListener("click", () => {
    const isOpen = selectElement.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
      selectElement.querySelector('[aria-selected="true"]').focus();
    }
  });

  options.forEach((option, index) => {
    option.addEventListener("click", () => selectOption(option));
    option.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        close(true);
      } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const offset = event.key === "ArrowDown" ? 1 : -1;
        options[(index + offset + options.length) % options.length].focus();
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectOption(option);
      }
    });
  });

  return close;
}

setupCustomSelect(sortSelect, (value) => {
  activeSort = value;
  renderCards();
});

setupCustomSelect(filterSelect, (value) => {
  activeFilter = value;
  renderCards();
});

document.addEventListener("click", (event) => {
  document.querySelectorAll(".custom-select.is-open").forEach((selectElement) => {
    if (!selectElement.contains(event.target)) {
      selectElement.classList.remove("is-open");
      selectElement.querySelector(".custom-select-trigger").setAttribute("aria-expanded", "false");
    }
  });
});

function setMenuOpen(isOpen) {
  collectionPanel.setAttribute("data-open", isOpen);
  menuBackdrop.setAttribute("data-open", isOpen);
  collectionToggle.setAttribute("aria-expanded", isOpen);
  // Menu and card viewer share the scroll lock; don't unlock under an open viewer.
  setPageScrollLocked(isOpen || !cardModal.classList.contains("hidden"));
}

collectionToggle.addEventListener("click", () => {
  setMenuOpen(collectionPanel.getAttribute("data-open") !== "true");
});

collectionPanel.querySelectorAll("[data-title]").forEach((option) => {
  option.addEventListener("click", () => {
    collectionTitle.textContent = option.dataset.title;
    setMenuOpen(false);
  });
});

document.addEventListener("click", (event) => {
  const isOpen = collectionPanel.getAttribute("data-open") === "true";
  if (isOpen && !collectionPanel.contains(event.target) && !collectionToggle.contains(event.target)) {
    setMenuOpen(false);
  }
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installButton.classList.remove("hidden");
});

installButton.addEventListener("click", async () => {
  if (!deferredPrompt) {
    return;
  }

  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installButton.classList.add("hidden");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Ignore registration failures in unsupported contexts.
    });
  });
}

renderCards();
