/**
𝘀𝗮𝗻𝗱𝗲𝘀𝗵 𝗺𝗱

* @project_name SANDESH-MD
* @authors SANDESH BHASHANA <https://github.com/prabathLK>
* @description The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier
* @link <https://github.com/prabathLK/PRABATH-MD>
* @version 2.0.6

© 2023 SANDESH BHASHANA, SANDESH-MD. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Enter your session-id",
BOT_NUMBER: process.env.BOT_NUMBER || "94741259325",
PASSWORD: process.env.PASSWORD || "vijithA1234@",
GITHUB_USERNAME: process.env.GITHUB_USERNAME || "vijitharanawakage",
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "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"
};
