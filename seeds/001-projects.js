
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'doin a thang', project_description: 'yeeup', project_completed: 1},
        {project_name: 'doin it twice', project_description: 'yeeuper', project_completed: 0},
        {project_name: 'nope', project_description: 'noper', project_completed: 1},
      ]);
    });
};
