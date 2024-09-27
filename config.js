const fs = require('fs');

// Load environment variables from config.env if the file exists
if (fs.existsSync('config.env')) {
    require('dotenv').config({ path: './config.env' });
}

// Function to convert text to a boolean value
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// Export the SESSION_ID environment variable
module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'mBYGhIoJ#N973VZc8CG7894Wozlqyv4GdmqAKVsqb4ZnaFsFmmB4', // Your Session ID
    MONGODB: process.env.MONGODB || "mongodb://mongo:lXeSCuCxsffPJwNIsfrAGyZxpHtmzdIJ@autorack.proxy.rlwy.net:10236", // Mongo DB Api
    READ_CMD: process.env.READ_CMD || "true",
};
