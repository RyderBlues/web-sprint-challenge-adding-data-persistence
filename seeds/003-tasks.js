
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'this is a task', task_completed: 1, project_id:1},
        {task_description: 'this is another task', task_completed: 0, project_id:2},
        {task_description: 'this is a third task', task_completed: 1, project_id:1},
      ]);
    });
};
