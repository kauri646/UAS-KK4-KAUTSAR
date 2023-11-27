const express = require('express');
const router = express.Router();

const userController = require('../controller/controller')

router.get('/siswa', userController.index)

router.get('/siswa/:id', userController.show)

router.post('/siswa', userController.store)

router.put('/siswa/:id', userController.update)

router.delete('/siswa/:id', userController.delete)

module.exports = router;