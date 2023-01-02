import express from 'express';

import { addPlace,
    getAllPlaces,
    getOnePlace,
    updatePlace,
    deletePlace,
    getAllByCountryName} from '../controllers/placeController.js';

export const router = express.Router();

router.post('/addPlace', addPlace);
router.get('/getAllPlaces', getAllPlaces);
router.get('/getAllPlaces/:id', getOnePlace);
router.post('/getAllPlacesByCountryName', getAllByCountryName);
router.put('/:id', updatePlace);
router.delete('/:id', deletePlace);

