const express = require('express');
const router = express.Router();
const contactRoutes = require('./contactRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/contacts', contactRoutes);
router.use('/projects', projectRoutes);

module.exports = router;