export const getRandomClass = (classList: string[]): string => {
  if (classList.length === 0) return "";
  
  const randomIndex = Math.floor(Math.random() * classList.length);
  return classList[randomIndex];
};