/**
 * Created by nathan on 16/03/2017.
 */
const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));

    app.get('/api/todos', todosController.list);
    app.post('/api/todos/add', todosController.create);

    app.post('/api/todos/:todoId/todoItems/add', todoItemsController.create);
}