# carousel Joao Uva Application 

Hello and thank you for this opportunity!

## Requirements
Setup the environment manually (including Webpack or any other bundler configuration). 👍
Create a carousel component that works on mobile and desktop, demonstrate it in action. 👍
Make a useful readme - tell us how to set up your application. 👍
The requirements for the carousel are:

Must work for mobile and desktop devices 👍
Must support swipes 👍
Must work for any HTML content 👍
Must be animated, finger-following swipes, you can use a multi-picture post in Instagram as a reference. 👍
Following carousel features will be considered as advantages:

Supports multiple slides on the screen
Supports infinite option 👍
Supports scrolling to a selected slide (like go to slide X)
Any optimizations related to performance are welcome and appreciated!


## Environment setup
Started by creating a new package.json inside the app folder:
npm init

Added Webpack to the project by installing the following packages:
npm install webpack webpack-cli webpack-dev-server 

Added webpack.config to the project

Installed the path package 
npm install path html-webpack-plugin

Added React to the project by installing the following packages:
npm install react react-dom --save
--At this point don't forget to change your index.js file--

Added babel to the project:
npm install @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader


## Project Tree
I decided to organize the project as:

- Containers Folder - Where all the logic is. I created the Carousel.js where I have added the following features:
    -   Autoplay
    -   Move next/previous slide with buttons and touch
    -   Carousel functionality to move from one slide to another
    -   The only props receive are from App.js witch are the slides array with all the slides

- Components Folder - Where I render all the app
    - It has the rendering of the Arrows, Dots, and Slides.
    - All the props are from Carousel.js
    - Used styled components for style (Created a separated file for each component, except for the slides where I found more easy to have it before the function)

- Images - There is a folder for images, where I have added one image, however, I found more easily to add url for each image, since this is a test app. 


## Run the APP
To run the app please install all the npm packages:
NPM INSTALL

Them you can start it (it's in the localhost 8080)
NPM START