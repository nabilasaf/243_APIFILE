const express = require('express');
const router = express.Router();
const multer = require('multer');
const komikController = require('../controllers/komikController');
const upload = multer({ dest: 'uploads/' });

router.get('/komiks', komikController.getAllKomiks);
router.get('/komiks/:id', komikController.getKomikById);
router.post('/komiks', upload.single('image'), komikController.createKomik);
router.put('/komiks/:id', upload.single('image'), komikController.updateKomik);
router.delete('/komiks/:id', komikController.deleteKomik);
module.exports = router;