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
const collectionMenu = document.querySelector(".collection-menu");
const collectionTitle = document.querySelector(".search-header h2");
const installButton = document.getElementById("install-button");
const cardModal = document.getElementById("card-modal");
const modalImage = document.getElementById("modal-image");
const modalClose = document.getElementById("modal-close");
const modalPrevious = document.getElementById("modal-previous");
const modalNext = document.getElementById("modal-next");

let activeFilter = "all";
let activeSort = "name";
let deferredPrompt = null;
let isPanningCard = false;
let modalCardId = null;
let touchStartX = 0;
let touchStartY = 0;

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
          <img src="${card.image}" alt="${card.name} card" data-card-id="${card.id}" />
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

      showModalCard(card);
      cardModal.classList.remove("hidden");
      document.body.classList.add("modal-open");
      modalClose.focus();
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

function showModalCard(card, direction = "") {
  modalCardId = card.id;
  modalImage.src = card.image;
  modalImage.alt = `${card.name} card`;

  if (direction) {
    modalImage.classList.remove("swipe-next", "swipe-previous");
    void modalImage.offsetWidth;
    modalImage.classList.add(direction === "next" ? "swipe-next" : "swipe-previous");
  }
}

function moveModalCard(direction) {
  const visibleCards = getVisibleCards();
  const currentIndex = visibleCards.findIndex((card) => card.id === modalCardId);

  if (currentIndex < 0 || visibleCards.length < 2) {
    return;
  }

  const nextIndex = (currentIndex + direction + visibleCards.length) % visibleCards.length;
  showModalCard(visibleCards[nextIndex], direction > 0 ? "next" : "previous");
}

function closeCardModal() {
  cardModal.classList.add("hidden");
  modalImage.src = "";
  modalCardId = null;
  resetCardPerspective();
  document.body.classList.remove("modal-open");
}

function updateCardPerspective(event) {
  const bounds = modalImage.getBoundingClientRect();
  const horizontal = (event.clientX - bounds.left) / bounds.width;
  const vertical = (event.clientY - bounds.top) / bounds.height;
  const rotateY = (horizontal - 0.5) * 24;
  const rotateX = (0.5 - vertical) * 24;

  modalImage.style.setProperty("--card-rotate-x", `${rotateX}deg`);
  modalImage.style.setProperty("--card-rotate-y", `${rotateY}deg`);
  modalImage.classList.add("is-panning");
}

function resetCardPerspective() {
  modalImage.classList.remove("is-panning");
  modalImage.style.setProperty("--card-rotate-x", "0deg");
  modalImage.style.setProperty("--card-rotate-y", "0deg");
}

modalImage.addEventListener("pointermove", (event) => {
  if (event.pointerType === "touch" && !isPanningCard) {
    return;
  }

  updateCardPerspective(event);
});

modalImage.addEventListener("pointerdown", (event) => {
  isPanningCard = true;
  if (event.pointerType === "touch") {
    touchStartX = event.clientX;
    touchStartY = event.clientY;
  }
  modalImage.setPointerCapture(event.pointerId);
  updateCardPerspective(event);
});

modalImage.addEventListener("pointerup", (event) => {
  if (event.pointerType === "touch") {
    const horizontalDistance = event.clientX - touchStartX;
    const verticalDistance = event.clientY - touchStartY;

    if (Math.abs(horizontalDistance) > 60 && Math.abs(horizontalDistance) > Math.abs(verticalDistance) * 1.3) {
      moveModalCard(horizontalDistance < 0 ? 1 : -1);
    }
  }

  isPanningCard = false;
  modalImage.releasePointerCapture(event.pointerId);
  resetCardPerspective();
});

modalImage.addEventListener("pointercancel", () => {
  isPanningCard = false;
  resetCardPerspective();
});

modalImage.addEventListener("pointerleave", () => {
  if (!isPanningCard) {
    resetCardPerspective();
  }
});

modalClose.addEventListener("click", closeCardModal);
modalPrevious.addEventListener("click", () => moveModalCard(-1));
modalNext.addEventListener("click", () => moveModalCard(1));
cardModal.addEventListener("click", (event) => {
  if (event.target === cardModal) {
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

collectionMenu.querySelectorAll("[data-title]").forEach((option) => {
  option.addEventListener("click", () => {
    collectionTitle.textContent = option.dataset.title;
    collectionMenu.removeAttribute("open");
  });
});

document.addEventListener("click", (event) => {
  if (collectionMenu.open && !collectionMenu.contains(event.target)) {
    collectionMenu.removeAttribute("open");
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
