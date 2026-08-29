const cardFiles = [
  "MHW CARD A RATHALOS.png",
  "MHW CARD ACIDIC GLAVENUS.png",
  "MHW CARD ALATREON.png",
  "MHW CARD ANCIENT LESHEN.png",
  "MHW CARD ANJA.png",
  "MHW CARD B.DIABLOS.png",
  "MHW CARD BANBARO.png",
  "MHW CARD BARIOTH.png",
  "MHW CARD BARROTH.png",
  "MHW CARD BAZEL.png",
  "MHW CARD BEHEMOTH.png",
  "MHW CARD BEOTODUS.png",
  "MHW CARD BLACKVEIL VAAL.png",
  "MHW CARD BRACHYDIOS.png",
  "MHW CARD BRUTE TIGREX.png",
  "MHW CARD CORAL PUKEI.png",
  "MHW CARD DEVILJHO.png",
  "MHW CARD DIABLOS.png",
  "MHW CARD DODOGAMA.png",
  "MHW CARD EBONY ODOGARON.png",
  "MHW CARD FATALIS.png",
  "MHW CARD FROSTFANG BARIOTH.png",
  "MHW CARD FULGUR ANJA.png",
  "MHW CARD FURIOUS RAJANG.png",
  "MHW CARD GARUGA.png",
  "MHW CARD GIRROS.png",
  "MHW CARD GLAVENUS.png",
  "MHW CARD GOLD RATHIAN.png",
  "MHW CARD JAGRAS.png",
  "MHW CARD JYURATODUS.png",
  "MHW CARD KIRIN.png",
  "MHW CARD KULU.png",
  "MHW CARD KULVE TAROTH 2.png",
  "MHW CARD KUSHALA.png",
  "MHW CARD LAVASIOTH.png",
  "MHW CARD LEGIANA.png",
  "MHW CARD LESHEN.png",
  "MHW CARD LUNASTRA.png",
  "MHW CARD NAMIELLE.png",
  "MHW CARD NARGA.png",
  "MHW CARD NERGIGANTE.png",
  "MHW CARD NIGHT PAOLUMU.png",
  "MHW CARD ODOGARON.png",
  "MHW CARD P RATHIAN.png",
  "MHW CARD PAOLUMU.png",
  "MHW CARD PUKEI.png",
  "MHW CARD RADOBAAN.png",
  "MHW CARD RAGING BRACHY.png",
  "MHW CARD RAJANG.png",
  "MHW CARD RATHALOS.png",
  "MHW CARD RATHIAN.png",
  "MHW CARD RUINER NERG.png",
  "MHW CARD SAFIJIIVA.png",
  "MHW CARD SAVAGE JHO.png",
  "MHW CARD SCARRED GARUGA.png",
  "MHW CARD SEETHING BAZEL.png",
  "MHW CARD SHARA 1.png",
  "MHW CARD SHRIEKING LEGIANA.png",
  "MHW CARD SILVER RATHALOS.png",
  "MHW CARD STYGIAN ZINOGRE.png",
  "MHW CARD TEOSTRA.png",
  "MHW CARD TIGREX.png",
  "MHW CARD TOBI.png",
  "MHW CARD TRUE SHARA.png",
  "MHW CARD TZITZI.png",
  "MHW CARD URAGAAN.png",
  "MHW CARD VAAL.png",
  "MHW CARD VELKHANA.png",
  "MHW CARD VIPER TOBI.png",
  "MHW CARD XENO.png",
  "MHW CARD ZINOGRE.png",
  "MHW CARD ZORAH.png"
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
  "MHW CARD A RATHALOS.png": "N24",
  "MHW CARD ACIDIC GLAVENUS.png": "N49",
  "MHW CARD ALATREON.png": "N69",
  "MHW CARD ANCIENT LESHEN.png": "N36",
  "MHW CARD ANJA.png": "N7",
  "MHW CARD B.DIABLOS.png": "N25",
  "MHW CARD BANBARO.png": "N38",
  "MHW CARD BARIOTH.png": "N42",
  "MHW CARD BARROTH.png": "N4",
  "MHW CARD BAZEL.png": "N21",
  "MHW CARD BEHEMOTH.png": "N34",
  "MHW CARD BEOTODUS.png": "N37",
  "MHW CARD BLACKVEIL VAAL.png": "N53",
  "MHW CARD BRACHYDIOS.png": "N46",
  "MHW CARD BRUTE TIGREX.png": "N61",
  "MHW CARD CORAL PUKEI.png": "N41",
  "MHW CARD DEVILJHO.png": "N31",
  "MHW CARD DIABLOS.png": "N16",
  "MHW CARD DODOGAMA.png": "N19",
  "MHW CARD EBONY ODOGARON.png": "N50",
  "MHW CARD FATALIS.png": "N71",
  "MHW CARD FROSTFANG BARIOTH.png": "N70",
  "MHW CARD FULGUR ANJA.png": "N48",
  "MHW CARD FURIOUS RAJANG.png": "N67",
  "MHW CARD GARUGA.png": "N59",
  "MHW CARD GIRROS.png": "N11",
  "MHW CARD GLAVENUS.png": "N44",
  "MHW CARD GOLD RATHIAN.png": "N62",
  "MHW CARD JAGRAS.png": "N1",
  "MHW CARD JYURATODUS.png": "N5",
  "MHW CARD KIRIN.png": "N17",
  "MHW CARD KULU.png": "N2",
  "MHW CARD KULVE TAROTH 2.png": "N32",
  "MHW CARD KUSHALA.png": "N28",
  "MHW CARD LAVASIOTH.png": "N22",
  "MHW CARD LEGIANA.png": "N13",
  "MHW CARD LESHEN.png": "N35",
  "MHW CARD LUNASTRA.png": "N33",
  "MHW CARD NAMIELLE.png": "N54",
  "MHW CARD NERGIGANTE.png": "N26",
  "MHW CARD NIGHT PAOLUMU.png": "N40",
  "MHW CARD NARGA.png": "N43",
  "MHW CARD ODOGARON.png": "N14",
  "MHW CARD P RATHIAN.png": "N20",
  "MHW CARD PAOLUMU.png": "N10",
  "MHW CARD PUKEI.png": "N3",
  "MHW CARD RADOBAAN.png": "N12",
  "MHW CARD RAGING BRACHY.png": "N68",
  "MHW CARD RAJANG.png": "N64",
  "MHW CARD RATHIAN.png": "N8",
  "MHW CARD RATHALOS.png": "N15",
  "MHW CARD RUINER NERG.png": "N56",
  "MHW CARD SAFIJIIVA.png": "N66",
  "MHW CARD SAVAGE JHO.png": "N55",
  "MHW CARD SCARRED GARUGA.png": "N60",
  "MHW CARD SEETHING BAZEL.png": "N52",
  "MHW CARD SHARA 1.png": "N57",
  "MHW CARD SHRIEKING LEGIANA.png": "N47",
  "MHW CARD SILVER RATHALOS.png": "N63",
  "MHW CARD STYGIAN ZINOGRE.png": "N65",
  "MHW CARD TEOSTRA.png": "N27",
  "MHW CARD TIGREX.png": "N45",
  "MHW CARD TOBI.png": "N6",
  "MHW CARD TRUE SHARA.png": "N57",
  "MHW CARD TZITZI.png": "N9",
  "MHW CARD URAGAAN.png": "N23",
  "MHW CARD VAAL.png": "N29",
  "MHW CARD VELKHANA.png": "N51",
  "MHW CARD VIPER TOBI.png": "N39",
  "MHW CARD XENO.png": "N30",
  "MHW CARD ZORAH.png": "N18",
  "MHW CARD ZINOGRE.png": "N58"
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
      .replace(/\.png$/i, "")
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
let isAutoScrolling = false;
let autoScrollTimer = 0;
let settleTimer = 0;
let scrollFrame = 0;

// Drag gesture state.
let dragPointerId = null;
let dragStartX = 0;
let dragStartY = 0;
let dragOffsetX = 0;
let dragAxis = "";
let swallowNextStageClick = false;

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
  filmstripStep = itemCentres.length > 1 ? itemCentres[1] - itemCentres[0] : 1;
}

function centreOffsetFor(index) {
  return itemCentres[index] - filmstrip.clientWidth / 2;
}

// Which thumbnail is nearest the middle of the strip. The even spacing makes
// rounding a good guess, but only a guess: at either end the scroll range runs
// out before the guess does, so check the neighbours and take the real winner.
function indexNearestCentre() {
  const target = filmstrip.scrollLeft + filmstrip.clientWidth / 2;
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

function scrollFilmstripTo(index, behavior) {
  if (!filmstripItems[index]) {
    return;
  }

  isAutoScrolling = true;
  filmstrip.scrollTo({ left: centreOffsetFor(index), behavior });

  // Let the smooth scroll finish before trusting scroll events again, so the
  // strip driving the card and the card driving the strip can't ping-pong.
  clearTimeout(autoScrollTimer);
  autoScrollTimer = setTimeout(() => {
    isAutoScrolling = false;
  }, behavior === "smooth" ? 420 : 60);
}

// Only the parts that are cheap on every frame of a fling: the highlight and
// the caption. The full-size image is swapped separately, once things settle.
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

function syncViewerImage(direction = "") {
  const card = viewerCards[viewerIndex];

  if (!card || modalImage.dataset.cardId === card.id) {
    return;
  }

  modalImage.dataset.cardId = card.id;
  modalImage.src = card.image;
  modalImage.alt = `${card.name} card`;

  if (direction) {
    modalImage.classList.remove("swipe-next", "swipe-previous");
    void modalImage.offsetWidth;
    modalImage.classList.add(direction === "next" ? "swipe-next" : "swipe-previous");
  }

  // Warm the neighbours so an arrow press or a swipe lands on a decoded image.
  [viewerIndex - 1, viewerIndex + 1].forEach((neighbour) => {
    const wrapped = viewerCards[(neighbour + viewerCards.length) % viewerCards.length];
    if (wrapped) {
      new Image().src = wrapped.image;
    }
  });
}

function showCardAt(index, { direction = "", scrollStrip = true, behavior = "smooth" } = {}) {
  markActive(index);
  syncViewerImage(direction);

  if (scrollStrip) {
    scrollFilmstripTo(index, behavior);
  }
}

function moveModalCard(direction) {
  if (viewerCards.length < 2) {
    return;
  }

  const nextIndex = (viewerIndex + direction + viewerCards.length) % viewerCards.length;
  showCardAt(nextIndex, { direction: direction > 0 ? "next" : "previous" });
}

function openCardModal(card) {
  viewerCards = getVisibleCards();
  viewerIndex = -1;

  const startIndex = Math.max(0, viewerCards.findIndex((item) => item.id === card.id));

  cardModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  buildFilmstrip();
  showCardAt(startIndex, { behavior: "auto" });
  modalClose.focus();
}

function closeCardModal() {
  cardModal.classList.add("hidden");
  modalImage.src = "";
  delete modalImage.dataset.cardId;
  filmstrip.innerHTML = "";
  filmstripItems = [];
  modalCardId = null;
  viewerIndex = -1;
  resetCardTransform();
  document.body.classList.remove("modal-open");
}

/* --- Filmstrip scrubbing -------------------------------------------------- */

// Native scrolling does the momentum and the rubber-banding; we only translate
// where it ended up into an index.
filmstrip.addEventListener("scroll", () => {
  if (isAutoScrolling || !filmstripItems.length) {
    return;
  }

  if (!scrollFrame) {
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      markActive(indexNearestCentre());
    });
  }

  // The big image is the expensive part, so it waits for a pause in the
  // scrolling rather than being swapped on every thumbnail we fly past.
  clearTimeout(settleTimer);
  settleTimer = setTimeout(syncViewerImage, 90);
});

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
  scrollFilmstripTo(viewerIndex, "auto");
}).observe(filmstrip);

/* --- Drag / swipe on the card -------------------------------------------- */

function resetCardTransform() {
  modalImage.classList.remove("is-dragging");
  modalImage.style.setProperty("--drag-x", "0px");
  modalImage.style.setProperty("--drag-tilt", "0deg");
  modalImage.style.setProperty("--tilt-x", "0deg");
  modalImage.style.setProperty("--tilt-y", "0deg");
  modalImage.style.removeProperty("--drag-fade");
}

// Mouse-only flourish: the card leans towards the cursor.
function tiltToPointer(event) {
  const bounds = modalImage.getBoundingClientRect();
  const horizontal = (event.clientX - bounds.left) / bounds.width;
  const vertical = (event.clientY - bounds.top) / bounds.height;

  modalImage.style.setProperty("--tilt-y", `${(horizontal - 0.5) * 18}deg`);
  modalImage.style.setProperty("--tilt-x", `${(0.5 - vertical) * 18}deg`);
}

modalStage.addEventListener("pointerdown", (event) => {
  if (event.button > 0) {
    return;
  }

  dragPointerId = event.pointerId;
  dragStartX = event.clientX;
  dragStartY = event.clientY;
  dragOffsetX = 0;
  dragAxis = "";
  modalImage.classList.add("is-dragging");
  modalStage.setPointerCapture(event.pointerId);
});

modalStage.addEventListener("pointermove", (event) => {
  if (dragPointerId !== event.pointerId) {
    if (event.pointerType === "mouse") {
      tiltToPointer(event);
    }
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
  dragOffsetX = deltaX;

  const progress = Math.max(-1, Math.min(1, deltaX / modalStage.clientWidth));
  modalImage.style.setProperty("--drag-x", `${deltaX}px`);
  modalImage.style.setProperty("--drag-tilt", `${progress * -10}deg`);
  modalImage.style.setProperty("--drag-fade", String(1 - Math.abs(progress) * 0.45));
});

function endDrag(event) {
  if (dragPointerId !== event.pointerId) {
    return;
  }

  const threshold = Math.min(90, modalStage.clientWidth * 0.16);
  const shouldAdvance = dragAxis === "x" && Math.abs(dragOffsetX) > threshold;

  // A drag that ends off the card still fires a click on the stage. Without
  // this the viewer would close every time you swiped past the card's edge.
  swallowNextStageClick = dragAxis !== "";
  dragPointerId = null;
  dragAxis = "";
  resetCardTransform();

  if (shouldAdvance) {
    moveModalCard(dragOffsetX < 0 ? 1 : -1);
  }

  dragOffsetX = 0;
}

modalStage.addEventListener("pointerup", endDrag);
modalStage.addEventListener("pointercancel", endDrag);
modalStage.addEventListener("pointerleave", (event) => {
  if (dragPointerId === null) {
    resetCardTransform();
  } else {
    endDrag(event);
  }
});

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
