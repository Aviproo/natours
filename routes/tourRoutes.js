const express = require('express');
const tourController = require('./../controllers/tourControllers');
const router = express.Router();

// router.param('id', tourController.checkId);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.upadateTour)
  .delete(tourController.deleteTour);

module.exports = router;
