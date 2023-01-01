// const db = require('../models');
import {db} from '../models/model_index.js';

// create main Model
const Place = db.Place;

// main work

// 1. create place
const addPlace = async (req, res) => {
    let info = {
        name: req.body.name,
        country: req.body.country,
        district: req.body.district,
        details: req.body.details,
        views: req.body.views,
        status: true
    }
    const place = await Place.create(info);
    res.status(201).send(place);
    console.log(place);
}

// 2. get all places
const getAllPlaces = async (req, res) => {
    
    let places = await Place.findAll();

    //for the specific attributes only
    // let places = await Place.findAll({
    //     attributes: [
    //         'name',
    //         'details'
    //     ]
    // });
    res.status(200).send(places);
    console.log(places);
}

// 3. get single place
const getOnePlace = async (req, res) => {
    
    let id = req.params.id;
    let place = await Place.findOne({where: {id: id}});
    res.status(200).send(place);

    console.log(place);
}

// 4. update place by id
const updatePlace = async (req, res) => {
    
    let id = req.params.id;
    const place = await Place.update({where: {id: id}});
    res.status(200).send(place);

    console.log(place);
}

// 5. delete place by id
const deletePlace = async (req, res) => {
    
    let id = req.params.id;
    await Place.destroy({where: {id: id}});
    
    res.status(200).send('Place is deleted');

    console.log(`Place is ${id} is deleted!`);
}


// 6. findPlaces by country name
const getAllByCountryName = async (req, res) => {
    
    let countryName = req.params.country;
    let places = await Place.findAll({where: {country: countryName}});
    
    res.status(200).send(places);

    console.log(places);
}

module.exports = {
    addPlace,
    getAllPlaces,
    getOnePlace,
    updatePlace,
    deletePlace,
    getAllByCountryName
}