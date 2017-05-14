# ReactJs Boilerplate
This is a full react project boilerplate configuration that is the basis of any react project that I start. I'm constantly adding to it to make it faster, better, and accommodate any other packages that will help the development pipeline.



## Table of Contents
1. [Why a boilerplate?](#why-a-boilerplate?)
2. [Current Features](#current-features)
3. [Getting Started](#getting-started)
4. [React Storybook](#react-storybook)
5. [Finishing Touches](#finishing-touches)



## Why a boilerplate?
I wanted the ability to be able to start any size React Js project right of the gate and not continually build the asset pipeline from scratch all of the time. I really like yoeman, but a lot of the scaffolds there don't really take advantage of a lot of the things that I would want to add into the project.

I didn't like the any of the yeoman builds, so I did some searching and found an excellent one by [jquintozamora](https://github.com/jquintozamora/react-es6-webpack-minimal-starter-template). He did a really good job in configuring and setting up the project. There were a couple of things I didn't like and planned on changing.

All credit should be given to the author as he was the one that came up with the base build that I utilized.

### Issues with the initial state
1. **Stylesheets are separate from the components**
    * The stylesheets of the source components aren't contained within the components singular directories. 
    * This is fine if you're using a pattern library or you plan on utilizing a strict class syntax, but when you deal with components, [CSS Modules]() is what I found the way to go. 
    * All styles should realistically be kept within each of their components except for global styles such as layout etc...
2. **Important items weren't included**
    * Redux
    * React Router
    * React CSS Modules
    * ESLint



## Current Features
#### Javscript
- [React](https://facebook.github.io/react) 
- [React Router](https://reacttraining.com/react-router/)
- [ES6](http://es6-features.org) (with [Babel](https://babeljs.io))
- [Redux](http://redux.js.org/)
- [React Storybook](https://github.com/storybooks/storybook)
- [AirBnB React Syntax Style Guide](https://github.com/airbnb/javascript/tree/master/react)
  
#### Style
- [ESLint](http://eslint.org/) based upon [AirBnB Best Practices](https://github.com/airbnb/javascript/tree/master/linters)
- [Babel Plugin React CSS Modules](https://github.com/gajus/babel-plugin-react-css-modules) used in conjunction with [SCSS](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html)
- [Post CSS]()

#### Asset Pipeline
- [Webpack 2](https://webpack.js.org/) based upon a cool ["how to"](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783)
- [Hot Module Replacement](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.xh6v0ht7j) ([React Hot Loader 3](https://github.com/gaearon/react-hot-loader/issues/243))
- [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/)
- [Webpack-dev-server](https://webpack.js.org/how-to/develop/#webpack-dev-server)



## Getting Started
  1. Clone the repo `git clone git@github.com:drewdecarme/boilerplate-react-js.git`
  2. Enter the working directory `cd boilerplate-react-js`
  3. Install dependencies `yarn install` (If you don't have yarn installed, you can install it by following the instructions [here](https://yarnpkg.com/lang/en/docs/install/))
  4. Start the solution `yarn start`
  5. A browser window will open with the solution (if it doesn't open, navigate to [http://localhost:3000/](http://localhost:3000))

### Common Commands
  1. `yarn start` Starts the development instance
  2. `yarn dev` TBD
  3. `yarn build` Builds the project via the asset pipeline
  4. `yarn stats` Prints the webpack statistics of the project
  5. `yarn lint` Lints the src directory
  6. `yarn lint:fix` Runs the linting autofixer on the src directory
  7. `yarn lint:storybook` Lints the storybook directory
  8. `yarn lint:fix:storybook` Runs the linting autofixer on the storybook directory



## React Storybook
React Storybook is a UI development environment for your React components. With it, you can visualize different states of your UI components and develop them interactively without developing within the code base. Storybook is used to mimic the development environment before starting the asset pipeline and allows for component creation within a vacuum to ensure full component portability

Check out the link [here](https://github.com/storybooks/storybook/tree/master/packages/react-storybook):

### To get started...
1. `yarn storybook` or `yarn run storybook`
2. [http://localhost:6006/](http://localhost:6006/)

### Things to do
- [ ] Add custom webpack configuration
- [ ] Add React CSS Modules



## Finishing Touches
- [x] Install React Router
- [x] Implement React Router
- [x] Create landing page and sample routes
- [x] Rewrite current features to align with newly added and removed features
- [x] Configure production webpack configuration with CSS Modules
- [ ] Manage History in React Router







