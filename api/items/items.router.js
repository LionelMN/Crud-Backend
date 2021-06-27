const router = require('express').Router();
const { getAll, getOne, createOne, removeOne, putOne } = require('./items.controller')

router.get('/', getAll);
router.get('/:name', getOne);
router.post('/', createOne);
router.delete('/:id', removeOne);
router.put('/:id', putOne);

module.exports = router;
