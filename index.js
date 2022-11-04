import dotenv from "dotenv/config"; // load .env
import logger from "./logger.js";
import { getAccessToken, getAccountSettings } from "./zoom.js";
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

if (!process.env.accountID) logger.warn("accountID missing in .env");
if (!process.env.clientID) logger.warn("clientID missing in .env");
if (!process.env.clientSecret) logger.warn("clientSecret missing in .env");

app.set("query parser", "simple");

app.get("/", express.json(), async (req, res) => {
  // Get an access token for use in future requests
  const accessToken = await getAccessToken();
  if (!accessToken) {
    res.status(500).json({ error: "Unable to get access token" });
    return;
  }
  
  // Get account settings
  const accountSettings = await getAccountSettings(accessToken, "me");

  // Available dialin numbers are in the response
  const numbers =
    accountSettings.audio_conferencing.toll_free_and_fee_based_toll_call
      .numbers;
  
  // Send data
  res.status(200).json(numbers);
});

app.listen(port, () => {
  logger.info(`listening on port ${port}`);
});
