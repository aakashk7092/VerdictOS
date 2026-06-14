const getDecisionColor = (
  decision
) => {
  switch (
    decision?.toUpperCase()
  ) {
    case "BUILD":
      return "text-green-500";

    case "PIVOT":
      return "text-yellow-500";

    case "REJECT":
      return "text-red-500";

    default:
      return "text-zinc-400";
  }
};

export default getDecisionColor;