const router = require('express').Router();
const { getAll, getOne, createOne, removeOne, putOne } = require('./items.controller')

router.get('/', getAll);
router.get('/:name', getOne);
router.post('/', createOne);
router.delete('/:name', removeOne);
router.put('/:name', putOne);

module.exports = router;
