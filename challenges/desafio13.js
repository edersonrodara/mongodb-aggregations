db.trips.aggregate(
  [
    {
      $match: {
        startTime: {
          $gte: ISODate("2016-03-10T00:00:00.0Z"), $lt: ISODate("2016-03-10T23:59:59.0Z"),
        },
      },
    },
    {
      $group: {
        _id: null,
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
        duracaoMediaEmMinutos: {
          $ceil: "$duracaoMediaEmMinutos",
        },
      },
    },
  ],
);
