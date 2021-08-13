//'use strict';
var chalk = require('chalk');
var cron = require('node-cron');
var request = require('request');
var dateFormat = require('dateformat');
var log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'errors.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
var logger = log4js.getLogger();
var schedule = require("./Schedule.js");
var config = schedule.getConfig();
config.forEach(function (e) {
    cron.schedule(e.corn, function () {
        e.apiurl.forEach(function (url) {
            request(url, function (error, response, body) {
                if (error === null) {
                    console.log(dateFormat() + " connect: " + url + " " + chalk.green("return: " + body));
                }
                else {
                    let errmsg = dateFormat() + " connect: " + url + " " + chalk.bgRed("error: " + error);
                    logger.error(errmsg);
                    console.log(errmsg);
                }                
            });            
        });
    });    
});
console.log(dateFormat() + " Schedule service Started!");
