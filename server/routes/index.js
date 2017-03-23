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
    app.post('/api/todos', todosController.create);
    app.get('/api/todos/:todoId', todosController.get);
    app.put('/api/todos/:todoId', todosController.update);
    app.delete('/api/todos/:todoId', todosController.delete);

    app.post('/api/todos/:todoId/todoItems', todoItemsController.create);
    app.put('/api/todos/:todoId/todoItems/:todoItemId', todoItemsController.update);
    app.delete('/api/todos/:todoId/todoItems/:todoItemId', todoItemsController.destroy);

    // For any other request method on todo items, we're going to return "Method Not Allowed"
    app.all('/api/todos/:todoId/todoItems', (req, res) =>
        res.status(405).send({
            message: 'Method Not Allowed',
        }));
}