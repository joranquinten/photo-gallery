# Photo gallery

This repo is part of a series of articles on Medium. Please feel free to dive into this code! Any improvements or suggestions are always welcome!

---

## Installation & Getting started:

Fork or clone this repository and install the dependencies with the npm command:

`npm i`

This app is dependant on [Contentful](https://www.contentful.com/) as a CMS. **Make sure you set the keys in the *.ENV* file!** For more information, read through the related article.

After you've set up contentful, you should be able to start the application with the following command:

`npm run dev`

To run unit tests, user the command:

`npm run test`

You can add a flag to also generate a coverage report:

`npm run test:coverage`

For developing purposes, this should be enough to follow the article. Feel free to explore the other scripts as well, if you're interested in tweaking and/or expanding the repository for your own purposes.

## Scripts:

Runs the app in development mode and starts a server at your localhost:

`npm run dev`

Runs a production build of the application and stores it in the default Next.js deployment folder:

`npm run production`

Runs a build from the development environment and stores it in the default Next.js deployment folder:

`npm run build`

Starts a local webserver to serve the exported application from the default deployment folder:

`npm run start`

Runs the linter (eslint configuration) on the code. Can be run with a :fix flag to attempt automagical fixes:

`npm run lint`

Runs the unit tests on the code. Can be run with a :coverage flag to display a coverage report:

`npm run test`

## Built with:

- [ReactJs](https://reactjs.org) - A JavaScript library for building user interfaces
- [NextJs](https://nextjs.org/) - The React Framework for static websites
- [Jest](https://jestjs.io/) - Delightful JavaScript Testing
- [Contentful](https://www.contentful.com/) - Content Infrastructure for Digital Teams

## Contributing:

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## Author:

Joran Quinten

## License:

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)
