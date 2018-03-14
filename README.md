## PTE Admin Panel
The PTE Admin Panel is built using ReactJS with Redux and styled using bootstrap 4 (Reactstrap). This application connects
to the backend using RESTful API.

### Folder Structure

```
.
+-- config/ (required files for build)
+-- public/ (required files for build)
+-- scripts/ (required files for build)
+-- src/
|   +-- actions/ (contains all the actions creators)
|   +-- components/ (react components)
|   |   +-- Navigation/ (Side bar navigation files)
|   |   +-- Reading
|   |   +-- Speaking/ (all components related to speaking)
|   |   +-- Writing
|   |   +-- About.js (about page/component)
|   |   +-- Dashboard.css
|   |   +-- Dashboard.js (dashboard page/component)
|   +-- containers/ (higher order components)
|   +-- reducers/ (all the reducers)
|   +-- index.js (main index file)
|   +-- store.js (store where all the reducers are combined)
+-- package.json (required for dependencies)
+-- README.md
  
```

### Development Environment
Make sure you have npm installed in you machine.
`cd` to the directory of the project. `npm install` so that all the dependencies are installed into your project before you run it
`npm start` to start you local development server. It will redirect to `localhost:3000` where you can see the app running.
Whenever you make change to you project file, the page will refresh itself and see the necessary changes that follows.
