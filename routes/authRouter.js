const express = require('express');
const router = express.Router();
const userAuth = require('../controllers/userAuth');
const auth = require('../middleware/auth');

router.post('/',auth, userAuth.create);
router.get('/', userAuth.findAll); 
router.delete('/:id',userAuth.delete);
router.post('/login', userAuth.login);


module.exports = router;