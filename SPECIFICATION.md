# Simple Frontend-only CRUD Application
***

## Table of Contents
1. Simple Frontend-only CRUD Application
  1.1 [Building](#building)
2. Technologies
  2.1 [App](#technologies)
  2.2 [Login page "/login"](#login-page)
  2.3 [Register page "/register"](#register-page)
  2.4 [Home (all entires) page "/" or "/all/{page?}"](#home-page)
  2.5 [Create entry page "/create"](#create-entry-page)
  2.6 [Edit entry page "/{entryId}"](#edit-entry-page)
3. [Miscellaneous](#miscellaneous)
  3.1 [P.S.](#p.s.)

### Building
- no gulp, grunt etc.
- babel 6.*, ES6
- only npm for all dependencies
- webpack-dev-server with:
  - watching (required) & hot reloading (optional)
  - each app routing page must be a separated webpack chunk, lazy loaded
  - cache-breaker for each chunk
  - all vendors must be moved to _vendors.[hash].js_ file and must be loaded automatically. It means you don't need to write the array of all your vendors somewhere in webpack config. Set up webpack so that if you import/require some global module in your app in automatically must be then built in that _vendors.[hash].js_ file
  - usage of HTML webpack plugin with _index.html_ as template; scripts must be appended to the <body/> tag

### Technologies
- Angular 1.5+ / React 15 + redux;
- Bootstrap for all styles (any theme you'd prefer)
- form validation: if Angular - only Angular forms validation, if React – validate.js library
- angular-bootstrap / react-bootstrap package could be used (preferable)
- use moment.js lib for _dateOfBirth_ model field formatting
- ui-router for AngularJS / react-router-redux for ReactJS
- no backend, all data – in local storage (any lib you'd prefer)

### Login page
- route `/login`
- model:
    ```javascript
    {
      email: string,
      password: string
    }
    ```
- validation:
  - all fields are required;
  - an _"email"_ field must be valid email
  - show error messages under the inputs
- browser autofill doesn't break a form validation (angular case only)
- page is not available for the logged in user

### Register page
- route `/register`
- model for form:
    ```javascript
    {
      email: string,
      name: string,
      password: string,
      rePassword: string,
      dateOfBirth: date in format MM/DD/YYYY
    }
    ```
- use any datepicker you'd prefer
- validation:
  - all fields are required
  - an _"email"_ field must be valid email
  - _"password"_ === _"rePassowrd"_
  - "dateOfBirth" is a valid and not expired date in above described format
  - show error messages under the inputs
- page is not available for the logged in user

### Home page
- route `/`
- page is not available for not logged in user
- grid (use any ready made solution you'll find):
  - columns are: email, name, date of birth, and the last column mustn't have any label `<th>` but its cells must contain “x” button for entry deletion; when you click on this button show a confirmation modal window first, and only when 'OK' is clicked remove an item and update a grid.
  - model: a collection of entries without current user entry, ordered by the “id” field. Each entry is the next object:
    ```javascript
      {
        id: number,
        email: string,
        name: string,
        dateOfBirth: date in format MM/DD/YYYY
      }
    ```
- pagination
  - a widget under the grid in the right corner
  - the view is (optional):  < 1, 2 … middle page … last-1 , last >
  - 5 entries per page
  - current page must be non-clickable in that widget
  - on each click on the page the URL must be updated (from `/?page={prevPage}` to `/?page={clickedPage}`)

### Create entry page
- route `/create`
- page is not available for not logged in user
- model for form:
    ```javascript
    {
      email: string,
      name: string,
      dateOfBirth: date in format MM/DD/YYYY
    }
    ```
- use the same datepicker as from register page
- validation:
  - all fields are required
  - an _"email"_ field must be valid email
  - _"dateOfBirth"_ is a valid date in above described format
  - show error messages under the inputs

### Edit entry page
- route `/{entryId}`
- page is not available for not logged in user
- model:
    ```javascript
    {
      email: string,
      name: string,
      dateOfBirth: date in format MM/DD/YYYY
    }
    ```
- use the same datepicker as from register page
- validation:
  - all fields are required
  - an "email" field must be valid email
  - _"dateOfBirth"_ is a valid date in above described format
  - show error messages under the inputs

### Miscellaneous
- add a logout button to the top right corner of the page. On click there should be a confirmation modal asking about 
- add a custom validator for the validation of rePassword field (must be equal to the _“password”_ one) on register page. See AngularJS / validate.js docs for instructions
- all app data (authentication, current user, entires collection) must be stored in local storage. No API, no backend, no WebSQL etc.

### P.S.
Feel yourself free in any solution you would like to implement, and boldly ask me using the skype (pavel.kantsedalov) / email (pavel.kantsedalov@gmail.com) about anything you need for the requirements clarification.