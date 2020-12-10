const express = require('express');
const api = express.Router();
const faker = require('faker');
let peticion;
let data;



api.get('/getPeticion', async (req, res) => {
    

    peticion = { 
        name: faker.name.jobDescriptor(),
        id: faker.random.alphaNumeric()
    };
    console.log(peticion);
    //data = JSON.parse(peticion);
    data = JSON.stringify(peticion);
    console.log(data);
    
    peticion = JSON.parse(data);
    console.log(peticion);
    res.json({peticion});
});

module.exports = api; 