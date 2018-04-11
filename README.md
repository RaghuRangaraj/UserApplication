# UserApplication
This project was generated with [Angular CLI]

Run 'npm install -g @angular/cli' to install Angular cli

Clone this application from
https://github.com/RaghuRangaraj/UserApplication.git

Once cloned enter into "UserApplication" folder that gets generated, and Run 'npm install' to install all the dependencies required for this application

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma] coverage folder will be created.
Run `ng test --code coverage` to check Code coverage. On running this, a folder by name "coverage" gets created. Launch 'index.html' that is created to check the code coverage

Following are done for refactoring.
1. app.module is the main module that is bootstrapped on launched.
2. app.component is the default module.
3. app.route handles all the route to change view.
4. Lazy loading is used to launch other modules on requirement. Here user.module is launched on lazy loading
5. On lazy loading, user.route handles all the child routes that are required.
5. user.component is the default view shown on launch which shows all the list of users
6. Add, Delete, Search and Edit are the operations that is performed now
6. user.service is the common file that is used to handle all the user operation

User operations:-
When application is ran in 'http://localhost:4200/', list of users are shown, with Add, Delete, Edit and an Input to search user
Clicking on Add, navigates to Add form, where user details can be entered and Saved.
On Selecting any user, and click on Delete, that particular user details is deleted
On Selecting any user, and click on Edit, the selected user details are passed to edit.component via route params (by passing user id], user details can be edited saved.
For Search, User Id needs to be entered in text box and "Find user" button needs to be clicked