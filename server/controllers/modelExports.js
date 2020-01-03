require('../models/model');

const mongoose = require('mongoose'),
    model = mongoose.model('model');

module.exports = {
    index: (req, res) => {
        model.find()
            .then(modelExports => res.json({ results: modelExports }))
            .catch(err => res.json(err.errors));
    },
    show: (req, res) => {
        model.findById(req.params.id)
            .then(modelExports => res.json({ results: modelExports }))
            .catch(err => res.json(err.errors));
    },
    create: (req, res) => {
        model.create(req.body)
            .then(modelExports => res.json({ results: modelExports }))
            .catch(err => res.json({ errors: err.errors }));
    },
    update: (req, res) => {
        model.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, useFindAndModify: false })
            .then(model => res.json({ results: model }))
            .catch(err => res.json({ errors: err.errors }));
    },
    destroy: (req, res) => {
        model.findByIdAndDelete(req.params.id, req.body)
            .then(result => res.json({ results: result }))
            .catch(err => res.json({ errors: err.errors }))
    }
}