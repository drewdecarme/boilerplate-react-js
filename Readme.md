# ReactJs Boilerplate
This is a full react project boilerplate configuration that is the basis of any react project that I start. I'm constantly adding to it to make it faster, better, and accommodate any other packages that will help the development pipeline.


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
    * CSS Modules
    * PostCSS
    * ESLint

## Current Features
- [React](https://facebook.github.io/react) 
- [ES6](http://es6-features.org) (with [babel](https://babeljs.io))
- [SCSS](http://sass-lang.com) using ITCSS and [BEM](http://getbem.com/introduction/) methodology. 
    - See this [sample](https://github.com/xfiveco/chisel-sample/tree/master/src/styles)
- [Hot Module Replacement](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.xh6v0ht7j) ([React Hot Loader 3](https://github.com/gaearon/react-hot-loader/issues/243))
- Webpack 2
    - [Webpack-dev-server](https://webpack.js.org/how-to/develop/#webpack-dev-server)
    - Webpack Babel loader configuration
    - Webpack SCSS configuration
    - [Webpack configuration for HMR](https://webpack.js.org/how-to/hot-module-reload)
    - Webpack production configuration
         - Split out CSS files (two threads, JS and CSS) using [ExtractTextPlugin](https://github.com/webpack/extract-text-webpack-plugin) 
         - [UglifyJsPlugin with options](https://github.com/webpack/webpack/blob/v1.13.3/lib/optimize/UglifyJsPlugin.js)
         - Use include in the loader instead of the exclude. [More info](http://stackoverflow.com/questions/37823764/how-include-and-exclude-works-in-webpack-loader)
         - More performance tips: [here](https://medium.com/@khanght/optimize-webpack-production-build-ec594242b222#.bj3eyg65p)
    - Webpack stats (bundle optimization helper)
        - Generate stats.json file with profiler. Use (this tool)[http://webpack.github.io/analyse/] to analyze it.
        - [webpack visualizer](https://chrisbateman.github.io/webpack-visualizer/)

### Things to Add
  - [ ] Redux
  - [ ] React Router
  - [ ] React CSS Modules
  - [ ] PostCSS
  - [ ] ESLint 

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

## React Storybook
React Storybook is a UI development environment for your React components. With it, you can visualize different states of your UI components and develop them interactively without developing within the code base. Storybook is used to mimic the development environment before starting the asset pipeline and allows for component creation within a vacuum to ensure full component portability

Check out the link [here](https://github.com/storybooks/storybook/tree/master/packages/react-storybook):

### To get started...
1. `yarn storybook` or `yarn run storybook`
2. [http://localhost:6006/](http://localhost:6006/)

### Things to do
- [ ] Add custom webpack configuration
- [ ] Add React CSS Modules
