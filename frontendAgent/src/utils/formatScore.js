const formatScore = (score) => {
  if (score === undefined || score === null || isNaN(score)) {
    return "0";
  }

  const num = Number(score);

  // ensure safe range
  if (num < 0) return "0";
  if (num > 100) return "100";

  return num.toFixed(0);
};

export default formatScore;