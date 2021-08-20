use("aggregations");

db.movies.aggregate(
  [
    {
      $match: {
        languages: "English",
      },
    },
    {
      $unwind: { path: "$cast" },
    },
    {
      $group: {
        _id: "$cast",
        numeroFilmes: { $sum: 1 },
        mediaIMDB: { $avg: "$imdb.rating" },
      },
    },
    {
      $sort: {
        numeroFilmes: -1,
      },
    },
    {
      $project: {
        numeroFilmes: true,
        mediaIMDB: { $round: ["$mediaIMDB", 2] },
      },
    },
  ],
);
