const express = require('express');
const router = express.Router();
const ph = require('../controller/ezeck');

router.get('/', ph.index);
router.get('/about', ph.about);
router.get('/services', ph.services);
router.get('/contact', ph.contact);
router.get('/appointment', ph.appointment);
router.get('/features', ph.features);
router.get('/project', ph.project);
router.get('/member', ph.member);
router.get('/testemonial', ph.project);
router.get('/404', ph.project);

module.exports = router; 
