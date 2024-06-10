export const allIngredients = [
  { icon: "📽️", label: "Crea" },
  { icon: "🤩", label: "Reseña" },
  { icon: "🗯️", label: "Comenta" },
  { icon: "🎬", label: "Comparte" },
  { icon: "⭐", label: "Califica" },
  { icon: "🍿", label: "Guarda" },
  { icon: "💯", label: "Con CN_Mecab" }
];

const [Crea, Reseña, Comenta] = allIngredients;
export const initialTabs = [Crea, Reseña, Comenta];

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
