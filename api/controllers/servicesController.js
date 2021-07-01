var connection = require('../../config/mySqlConnection');
var moment= require('moment');

exports.upComingCampaigns = (req, res, next) => {
    console.log(moment(new Date()).format("YYYY-MM-DD hh:mm:ss") + ': function upComingCampaigns => start');
    let currentDate = moment(new Date()).format("YYYY-MM-DD");        
    const queryString = "SELECT * FROM `bluestack_campaign_data` where createdOn > '" + currentDate + "'";
    connection.query( queryString, (err, rows, fields) => {
        if(err) {
            throw err;
        } else {    
            console.log(moment(new Date()).format("YYYY-MM-DD hh:mm:ss") + ': function upComingCampaigns => start');
            res.send(rows);
        }
    });
}

exports.liveCampaigns = (req, res, next) => {
    console.log('liveCampaigns => start');
    let currentDate = moment(new Date()).format("YYYY-MM-DD");    
    const queryString = "SELECT * FROM `bluestack_campaign_data` where createdOn = '" + currentDate + "'";
    connection.query( queryString, (err, rows, fields) => {
        if(err) {
            throw err;
        } else {    
            console.log(moment(new Date()).format("YYYY-MM-DD hh:mm:ss") + ': function liveCampaigns => ended');
            res.send(rows);
        }
    });
}

exports.pastCampaigns = (req, res, next) => {
    console.log(moment(new Date()).format("YYYY-MM-DD hh:mm:ss") + ': function pastCampaigns => start');
    let currentDate = moment(new Date()).format("YYYY-MM-DD");    
    const queryString = "SELECT * FROM `bluestack_campaign_data` where createdOn < '" + currentDate + "'";
    connection.query( queryString, (err, rows, fields) => {
        if(err) {
            throw err;
        } else {    
            console.log("function pastCampaigns => ended");
            res.send(rows);
        }
    });
}

exports.saveNewDate = (req, res, next) => {
    console.log(moment(new Date()).format("YYYY-MM-DD hh:mm:ss") + ': function saveNewDate => start');
    const queryString = "update `bluestack_campaign_data` set createdOn = '"+ req.body.createdOn +"'where id = '" + req.body.id + "'";
    connection.query( queryString, (err, rows, fields) => {
        if(err) {
            throw err;
        } else {                
            console.log(moment(new Date()).format("YYYY-MM-DD hh:mm:ss") + ': function saveNewDate => ended');
            res.send('updated successfully');
        }
    });
}