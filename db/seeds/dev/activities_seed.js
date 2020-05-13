exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('brighton_activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('brighton_activities').insert({
          activityTitle: 'Watersports',
          activityType: 'outdoor sports',
          activityPrice: 40,
          activityRating: 8
        });
    }).then(function() {
      return knex('brighton_activities').insert({
        activityTitle: 'i360',
        activityType: 'sightseeing',
        activityPrice: 10,
        activityRating: 6
      });
    })
};
