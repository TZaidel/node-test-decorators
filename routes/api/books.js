const express = require('express')

const router = express.Router()

const ctrl = require('../../controllers/books')

const {validateBody} = require('../../middlewares')
const schemas = require('../../schemas/books')

router.get('/', ctrl.getAll)

router.get('/:id', ctrl.getById)

router.post('/', validateBody(schemas.addSchema), ctrl.add)

router.put('/:id', validateBody(schemas.addSchema), ctrl.updateById)

router.delete("/:id", ctrl.deleteById)

module.exports = router