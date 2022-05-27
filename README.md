# PWA - Just Another Text Editor (JATE)

Visit the Heroku deployed app by clicking <a href="https://hidden-eyrie-12248.herokuapp.com/" target="_blank">**here**<a> 

## Table of contents
* [Description](#description)
* [Usage](#usage)
* [Technologies](#technologies)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)

---
## Description
This project was meant to encorporate several technologies that I recently learned. As A progressive web app, a visitor is able to install this text editor on their machine. By doing so, the editor can be used and the content can be saved even when not connected to the internet. This is accomplished using a suite of npm packages. IDBdatabase is used to store data on the browser, webpack is used to minify assets to lower load times, the manifest plugin is used to provide instructions necessary to install the app locally, workbox is used to build out the service worker that can fulfill requests without network connectivity, and the babel CLI is used in the build process to compile ES6 code to older versions. The expressJS framework is also used to serve the routes. In the end, we have a simple text-editor application whose dynamic functionality provides legitimate utility.

---
### Usage
A user can either navigate to the deployed heroku app (link above) or download this repository and initiate the app locally. 

If downloading the repository, do the following:

From the root directory, run the command 'npm run start'. This will startup the backend, initiate the build, and serve the client. 

Now, whether visiting the heroku app or running it locally, the text editor can be used naturally in the browser. Enter some text, and upon page reload or navigating away from the page the content will be saved and made available when the user returns to the page. To install, click the install button. You will be prompted to confirm the install. Once installed, you can run the app straight from your machine, and the service worker strategy will serve from the cache or network, as well as update the cache, as necessary. 

![app-demo](https://user-images.githubusercontent.com/101354032/170621619-839f7514-d2dd-4415-80b7-5437a15c4293.gif)

---
### Technologies
|   Languages  | Node Modules  |  Node Modules | Runtime Environment |
| ----------- | ----------- | ----------- |  ----------- | 
| ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) | @babel | ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) | ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  |
| ![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white) | babel loader  | mongoose  |   |
| ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)  | css loader |  html webpack |    |
|   |  webpack  | workbox  |   |

---
#### Credits
This was a solo project with started code provided by the staff at the UC Berkeley full-stack coding bootcamp.

---
##### Questions
Click <a href="https://github.com/jkwalsh127" target="_blank">**here**<a> to go to my GitHub profile

If you have any questions about this project or would just like to get in touch, you can email me at <a href="mailto:jkwalsh127@gmail.com" target="_blank">jkwalsh127@gmail.com</a>
  
---
###### License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The contents of this repository are protected under the <a href="https://opensource.org/licenses/MIT">MIT license.</a>