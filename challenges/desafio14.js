db.trips.aggregate(
  [
    {
      $group: {
        _id: "$bikeid",
        duracaoMediaEmMinutos: {
          $avg: {
            $divide: [
              { $subtract: ["$stopTime", "$startTime"] }, 60 * 1000,
            ],
          },
        },
      },
    },
    {
      $project: {
        _id: false,
        bikeId: "$_id",
        duracaoMedia: {
          $ceil: "$duracaoMediaEmMinutos",
        },
      },
    },
    {
      $sort: { duracaoMedia: -1 },
    },
    {
      $limit: 5,
    },
  ],
);
