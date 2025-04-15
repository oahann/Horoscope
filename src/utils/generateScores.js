export function generateScores(sign, date) {
  const key = `${sign}-${date}`;
  const cached = localStorage.getItem(key);
  if (cached) {
    return JSON.parse(cached);
  }

  const randomScore = () => +(Math.random() * 10).toFixed(1);

  const scores = {
    health: randomScore(),
    relationships: randomScore(),
    career: randomScore(),
  };

  localStorage.setItem(key, JSON.stringify(scores));
  return scores;
}
