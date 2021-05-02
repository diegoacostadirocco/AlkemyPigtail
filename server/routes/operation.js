const express = require('express');

const { getOperations, createOperation, deleteOperation } = require('../controllers/operation');
const operation = require('../models/operation');

const router = express.Router();

router.get('/', getOperations);
router.post('/', createOperation);
router.delete('/:id', deleteOperation);

module.exports = router;
