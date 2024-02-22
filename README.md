# How to use this React App Template

This is a basic boiler-plate React app. It is a good start for your own react app that requires OKTA authentication in a MassMutual UI application.

To create this app locally, in a command terminal go to what will be the parent folder and run:

`git clone https://github.com/massmutual/react-app-template.git`

Once it's fully copied, run:

- `cd react-app-template` to be in the correct new folder
- `npm install` to install the necessary libraries
- `npm start` to run the app through your default browser (should be http://localhost:3000)

This app already has installed:

- `react`, `react-dom`, `react-router-dom`, `react-scripts` as its JS framework and state manager
- `@okta/okta-auth-js` and `@okta/okta-react` for authentication
- `axios` for making api calls
- `node-sass` for more powerful CSS options and easier coding of them
- `material-ui` for better styling of HTML form elements and pop-up modals
- `react-icons` for simple icons to use on pages
- `commitizen` for better git commit messaging

In order to work with current OKTA security methods, it is important to maintain specific versions of other libraries that are installed. Do not install newer versions of these at this time. The important ones are:

- `react` 17.0.2
- `react-dom` 17.0.2
- `react-router-dom` 5.2.0

You will most likely add additional libraries as you build our your apps. For example:

- if your app is very large or has multiple parent-child levels between components, you may consider using `redux` as your state manager
- if your app's data is complex and there is concern about maintaining variable types (string, number, boolean, etc.) and ensuring correct data is sent through functions and into templates, you might want to install `typescript`. For smaller simpler apps I don't recommend it.

For more documentation on setting up your React app, go to this Confluence page:

[Web Application Frontend Setup](https://massmutual.atlassian.net/wiki/spaces/DMD/pages/3526001660/Web+Application+Frontend+Setup)

## Features included in this app

- Okta security set-up (commented out so you can see how it's coded)
- PageViewLogic is template controlling the logic to determine which data page to show in between the header and footer, and passes data along to children components
- Header contains app name, MM logo, breadcrumb trail, and menu of other actions
- Footer contains action buttons updated per each page
- Message box that appears just below header with success or error messages
- Modal box for confirmation of specific actions
- Homepage displays a data table list, which can be updated with a query filter and sortable columns
- Form page uses material-ui for styling the input elements
- Form elements contain features such as required, errors, helper text, info buttons, value validation, logic to display or hide inputs
- Review & Submit page displays all entered data by page and field, in this case only one page
- Review & Submit page will also notify user of any missing or invalid data, and will disable save functionality until data is fixed

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

After cloning the repository, before running it, you will need to run the necessary libraries listed within package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
