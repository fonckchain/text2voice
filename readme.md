<p align="center">
  <img width="300" src="./Google-Cloud-Emblem.png" alt="Google Cloud">
  <h1 align="center">Text-to-Speech Application</h1>
  <p align="center">This application uses Google's Text-to-Speech API to convert text into speech</p>
</p>

## 🚀 Features 🚀

- Convert any text into speech
- Save the generated speech as an MP3 file
- Supports multiple voice profiles for customization
- Easy to use and integrate into your projects

## 🛠️ Setup 🛠️

1. Make sure you have [Node.js](https://nodejs.org/en/download/) installed on your system. If you don't have it installed, you can download it from the official website.
2. Clone this repository to your local machine.
3. Run `npm install` to install the necessary dependencies. This application uses the following Node.js packages:
   - `@google-cloud/text-to-speech`: The Google Text-to-Speech API client library for Node.js.
   - `dotenv`: A module that loads environment variables from a `.env` file into `process.env`.
4. Create a `.env` file in the root directory and add your Google Cloud credentials. You need to set the `GOOGLE_APPLICATION_CREDENTIALS` variable to the path of your Google Cloud service account key JSON file. For example:
   ```
   GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-file.json"
   ```

## 📝 How to Use 📝

1. Create a `input.ssml` file located in the root folder.
2. Write your text in the `input.ssml` file. You can use SSML tags for more control over the speech output.
3. Run `node app.js` to generate the speech.
4. The generated speech will be saved as an MP3 file in the `output` directory.

## 🎛️ Customization 🎛️

You can customize the voice profile used for the speech by editing the `voiceProfiles.js` file. Each voice profile is an object with the following properties:

- `languageCode`: The language of the voice.
- `ssmlGender`: The gender of the voice.
- `name`: The name of the voice.

## 📚 Resources 📚

- [Google Text-to-Speech API Documentation LINKS](https://cloud.google.com/text-to-speech/docs)
- [Speech Synthesis Markup Language (SSML) Reference](https://developers.google.com/assistant/df-asdk/ssml)

## 📃 License 📃

This project is licensed under the MIT License.
