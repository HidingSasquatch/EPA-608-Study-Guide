/* ===== DECKS ===== */
const DECKS = [
  { id: "all", name: "All" },
  { id: "core", name: "Core" },
  { id: "type1", name: "Type I" },
  { id: "type2", name: "Type II" },
  { id: "type3", name: "Type III" },
  { id: "rules", name: "Rules / Numbers" }
];

/* ===== QUESTION BANK ===== */
const CARDS = [
  {
    id: "c1",
    deck: "core",
    difficulty: "Easy",
    q: "Why is refrigerant recovery required?",
    choices: [
      "To prevent refrigerant release into the atmosphere",
      "To improve cooling efficiency",
      "To save electricity",
      "To speed up repairs"
    ],
    answer: 0,
    explain: "EPA regulations require recovery to protect the environment."
  },
  {
    id: "c2",
    deck: "core",
    difficulty: "Easy",
    q: "Which refrigerant has zero ozone depletion potential?",
    choices: ["CFCs", "HCFCs", "HFCs", "R-22"],
    answer: 2,
    explain: "HFCs have zero ODP but may still have high GWP."
  },
  {
    id: "c3",
    deck: "type1",
    difficulty: "Medium",
    q: "What defines a Type I appliance?",
    choices: [
      "Factory-sealed system with less than 5 lbs of refrigerant",
      "Any residential split system",
      "Any commercial system",
      "Vehicle AC system"
