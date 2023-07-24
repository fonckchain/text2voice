// Load environment variables from .env file
require('dotenv').config({ path: './.env' });

// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const util = require('util');
const path = require('path');

// Import voice profiles
const voiceProfiles = require('./voiceProfiles');

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

async function synthesizeSpeech(profile) {
  // Read the SSML text from a file
  const ssml = fs.readFileSync('input.ssml', 'utf8');

  // Construct the request
  const request = {
    input: {ssml: ssml},
    // Select the voice profile
    voice: voiceProfiles[profile],
    // Select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);

  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  const timestamp = new Date().toISOString().replace(/:/g, '-');
  const outputFilePath = path.join('C:\\Users\\Fonck\\Music\\sound2text', `text2speech_${timestamp}.mp3`);
  await writeFile(outputFilePath, response.audioContent, 'binary');
  console.log(`Audio content written to file: ${outputFilePath}`);
}

// Use the male profile
synthesizeSpeech('femenina1').catch(console.error);
