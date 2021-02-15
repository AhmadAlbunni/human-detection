const router = require('express').Router();
const multer = require('multer');
const upload = multer();
const FeatureExtractor  = require('../controllers');

router.get('/'  , (req, res) => res.json({message : 'hello'}) )

router.post('/file' , upload.single('file') , FeatureExtractor.classifyImage);

module.exports = router;