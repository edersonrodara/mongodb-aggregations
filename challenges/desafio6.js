db.movies.aggregate(
  [
    {
      $match: {
        awards: { $regex: /won [0-9]+ oscar/i },
        // obrigado https://regex101.com/ :D
      },
    },
    {
      $group: {
        _id: null,
        maior_rating: { $max: "$imdb.rating" },
        menor_rating: { $min: "$imdb.rating" },
        media_rating: { $avg: "$imdb.rating" },
        desvio_padrao: { $stdDevSamp: "$imdb.rating" },
      },
    },
    {
      $project: {
        _id: false,
        maior_rating: true,
        menor_rating: true,
        media_rating: { $round: ["$media_rating", 1] },
        desvio_padrao: { $round: ["$desvio_padrao", 1] },
      },
    },
  ],
);
