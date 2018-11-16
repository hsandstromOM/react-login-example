# Take Home Dev Assignment

### Instructions
Your task is to create a React web app based on the provided designs. The app will consist of a login screen, and a success screen. The login screen will require the user to enter a valid email address (formatted as `user@example.com`) as well as a secure password. The password must contain one uppercase letter, one lowercase letter, one special character (`!?#$*`) and be at least 8 characters long. Upon submit, if a user fails to enter the required information, a corresponding error message should show up:

- Empty email/password field: 'All fields are required.'
- Improperly formatted email: 'Email address is not valid.'
- Improperly formatted password: 'Password must contain one uppercase letter, one lowercase letter, one special character (`!?#$*`) and be at least 8 characters long.'


On successful login, your app should route to a `/success` route which displays your favorite success gif.

### Project architecture
The project is set up using a component based architecture, so that every "feature" of the app lives in it's own directory with its own Reducer, Action Creator, Type, and Views. We also have a `common` directory where we typically put reusable, commonplace components such as modals, photo pickers, styled wrappers etc. If you have any reusable components (hint: your inputs) place them in there to show how you might import them into a view.

Styling can be applied either with SASS or normal CSS in the `sass/style.scss` file.

### Requirements
The most difficult part of development is pulling down existing code and getting it to run on your machine. For the best shot at getting it running the first time, make sure your version of node is at "8.9.3" and npm is at "5.6.1". Check out [NVM](https://github.com/creationix/nvm) for help setting your node/npm versions. Once you got that all squared away and you've run 'npm install', type the following in your terminal:

`npm run dev`

Your app should be live at http://localhost:8080. Good luck!
