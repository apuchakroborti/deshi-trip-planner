import express from 'express';

import {placeController} from '../controllers/placeController.js';

const router = express.Router();

router.post('/addPlace', placeController.addPlace);
router.get('/getAllPlaces', placeController.getAllPlaces);
router.get('/:id', placeController.getOnePlace);
router.get('/getAllPlacesByCountryName', placeController.getAllByCountryName);
router.put(':id', placeController.updatePlace);
router.delete('/:id', placeController.deletePlace);

// module.exports = router
export default router;