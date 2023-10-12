// const functions = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const axios = require("axios").default;
const cheerio = require("cheerio");

// exports.instaGrab = functions.https.onCall(async (data, context) => {
//   functions.logger.info(data);
//   const html = await axios(data.url);
//   functions.logger.info(html);
//   const $ = cheerio.load(html.data);
//   functions.logger.info("Cheerio Loaded html: ", $);
//   var imageString;
//   if (data.radio === "image") {
//     imageString = $("meta[property='og:image']").attr("content");
//     functions.logger.info("Instagram Image URL: ", imageString);
//   }
//   if (data.radio === "video") {
//     imageString = $("script[nonce='od0scHEf']").attr("contentUrl");
//     functions.logger.info("Instagram Video URL: ", imageString);
//   }
//   return { type: data.radio, url: imageString };
// });

const app = express();

const corsOptions = {
  'Access-Control-Allow-Origin': '*',
  'Methods': ['GET','OPTION'],
};

app.use(cors(corsOptions)); 

const imageDownload = app.get("/image", async (request, response) => {
  logger.info(request.query.url);
  const html = await axios(request.query.url);
  logger.info(html.data);
  const $ = cheerio.load(html.data);
  var imageString;
    imageString = $("meta[property='og:image']").attr("content");
    response.header("Access-Control-Allow-Origin", "*", "Content-Type", "text/plain");
  response.status(200).json({src:imageString});
})

const videoDownload = app.get("/video", async (request, response) => {
  logger.info(request.query.url);
  const html = await axios(request.query.url);
  logger.info(html.data);
  const $ = cheerio.load(html.data);
  var imageString;
    imageString = $("meta[property='og:video']").attr("content");
    response.header("Access-Control-Allow-Origin", "*", "Content-Type", "text/plain");
  logger.info(imageString);
  response.status(200).json({src:imageString});
});

exports.instaDownloadImage = onRequest(imageDownload);
exports.instaDownloadVideo = onRequest(videoDownload);