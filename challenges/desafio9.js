db.trips.aggregate(
  [
    {
      $match: {
        birthYear: { $ne: "" },
      },
    },
    {
      $group: {
        _id: null,
        maiorAnoNascimento: { $max: {
          $toInt: "$birthYear" } },
        menorAnoNascimento: { $min: "$birthYear" },
      },
    },
    {
      $project: {
        _id: false,
        maiorAnoNascimento: true,
        menorAnoNascimento: true,
      },
    },
  ],
);
