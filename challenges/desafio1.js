db.movies.aggregate(
  [
    {
      $match: {
        $and: [
          { "imdb.rating": { $gte: 7 } },
          { genres: { $nin: ["Crime", "Horror"] } },
          { $or: [{ rated: "PG" }, { rated: "G" }] },
          { languages: { $all: ["English", "Spanish"] } },
        ],
      },
    },
  ],
);

// Desafio 1

// Retorne todos os filmes que satisfaça, através de uma pipeline, as condições abaixo
// imdb.rating deve ser maior ou igual a 7;
// genres não deve conter Crime ou Horror;
// rated deve ser igual a PG ou G;
// languages contém English e Spanish.
// Utilize a coleção movies.
// Sua query deve retornar 41 documentos.
