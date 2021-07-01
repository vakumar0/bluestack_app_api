var express = require('express');
var router = express.Router();
var controller = require('../controllers/servicesController');


router.get('/liveCampaigns', controller.liveCampaigns);
router.get('/upComingCampaigns', controller.upComingCampaigns);
router.get('/pastCampaigns', controller.pastCampaigns);

router.post('/', controller.saveNewDate);

module.exports = router;