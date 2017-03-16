/**
 * Created by nathan on 16/03/2017.
 */
const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

module.exports = {
    create(req, res) {
        return Todo
            .create({
                title: req.body.title,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Todo
            .findAll({
                include: [{
                    model: TodoItem,
                    as: 'todoItems',
                }],
            })
            .then(todos => res.status(200).send(todos))
            .catch(err => res.status(400).send(err));
    }
};