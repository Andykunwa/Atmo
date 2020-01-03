const modelExports = require('../controllers/modelExports');

module.exports = (app) => {
    app.get('/api/model', (req, res) => modelExports.index(req, res))
    app.get('/api/model/:id', (req, res) => modelExports.show(req, res))
    app.post('/api/model/create', (req, res) => modelExports.create(req, res))
    app.put('/api/model/update/:id', (req, res) => modelExports.update(req, res))
    app.delete('/api/model/destroy/:id', (req, res) => modelExports.destroy(req, res))
}