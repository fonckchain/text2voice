console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);

// Load environment variables from .env file
require('dotenv').config({ path: './.env' });

// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const util = require('util');

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

async function synthesizeSpeech() {
  // Read the SSML text from a file
  const ssml = fs.readFileSync('input.ssml', 'utf8');

  // Construct the request
  const request = {
    input: {ssml: ssml},
    // Select the language and SSML voice gender (optional)
    voice: {languageCode: 'es-US', ssmlGender: 'MALE', name: 'es-US-Studio-B'},
    // Select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);

  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');
}

synthesizeSpeech().catch(console.error);
