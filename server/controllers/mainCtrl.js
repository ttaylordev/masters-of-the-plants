"use strict";


const GoogleMapsAPI = require("googlemaps");
const keys = require('../../keys.js');


const publicConfig = {
  key: keys.googleAPIKey,
  stagger_time: 1000, // for elevationPath
  encode_polylines: false,
  secure: true // use https
};

const gmAPI = new GoogleMapsAPI(publicConfig);

module.exports = {

  postZip: function(req, res, next) {
    ZipData.create(req.body, function(error, response) {
      if (error) return res.status(500).send(error);
      res.send(response)
    })
  }

  // postZip: (request, response) => {
  //   if (request.body) {
  //     console.log(request.body)
  //     let zip = {
  //       "address": request.body.zip
  //     };
  //   }
  //   gmAPI.geocode(zip, (err, result) => {
  //   if (!err) {
  //     let coords = [result.results[0].geometry.location.lng, result.results[0].geometry.location.lat]
  //     console.log(coords)
  //   }
  // })
  // }



}
