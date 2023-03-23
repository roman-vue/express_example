const router = require('express').Router();
const ctrl = require('../controllers/example.controller');
router.get('/', ctrl.exampleController)
module.exports = router

