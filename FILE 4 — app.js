/* ===== STATE ===== */
let state = {
  deck: "all",
  diff: "all",
  index: 0
};

/* ===== DOM ===== */
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

const deckSel = document.getElementById("deckSel");
const diffSel = document.getElementById("diffSel");
const searchBox = document.getElementById("searchBox");
const qText = document.getElementById("qText");
const fcOpts = document.getElementById("fcOpts");
const aText = document.getElementById("aText");
const cardMeta = document.getElementById("cardMeta");

const flipInner = document.getElementById("flipInner");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

/* ===== INIT ===== */
function init() {
  populateDecks();
  renderCard();
  setupTabs();
}
init();

/* ===== TABS ===== */
function setupTabs() {
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
}

/* ===== DECK SELECT ===== */
function populateDecks() {
  DECKS.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d.id;
    opt.textContent = d.name;
    deckSel.appendChild(opt);
  });

  deckSel.addEventListener("change", () => {
    state.deck = deckSel.value;
    state.index = 0;
    renderCard();
  });

  diffSel.addEventListener("change", () => {
    state.diff = diffSel.value;
    state.index = 0;
    renderCard();
  });
}

/* ===== FILTER ===== */
function filteredCards() {
  let list = cardsForDeck(state.deck);
  if (state.diff !== "all") {
    list = list.filter(c => c.difficulty === state.diff);
  }
  return list;
}

/* ===== FLASHCARDS ===== */
function renderCard() {
  const list = filteredCards();
  if (!list.length) {
    qText.textContent = "No cards found.";
    return;
  }

  const card = list[state.index % list.length];
  cardMeta.textContent = `${card.deck.toUpperCase()} • ${state.index + 1}/${list.length}`;

  qText.textContent = card.q;
  fcOpts.innerHTML = "";
  aText.innerHTML = "";

  flipInner.classList.remove("flipped");

  card.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => {
      flipInner.classList.add("flipped");
      const correct = i === card.answer;
      aText.innerHTML = `
        <span class="badge ${correct ? "good" : "bad"}">
          ${correct ? "Correct" : "Incorrect"}
        </span>
        <p><strong>Answer:</strong> ${card.choices[card.answer]}</p>
        <p>${card.explain}</p>
      `;
    };
    fcOpts.appendChild(btn);
  });
}

/* ===== NAV ===== */
prevBtn.onclick = () => {
  state.index = Math.max(0, state.index - 1);
  renderCard();
};
nextBtn.onclick = () => {
  state.index++;
  renderCard();
};

/* ===== FLIP ===== */
document.getElementById("flipCard").onclick = () => {
  flipInner.classList.toggle("flipped");
};
