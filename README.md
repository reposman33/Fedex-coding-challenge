# Fedex coding challenge

Build a single page app with a sign-up form.
- The form should allow users to enter first name, last name, email, and password. &#x2713;
- All fields are required. &#x2713;

Password validation:
- Should be a minimum of eight characters; &#x2713;
- Should contain lower and uppercase letters; &#x2713;
- Should not contain user’s first or last name;
*nope, didn't find out how to do that with RegExp.*

Email should be validated but there are various ways of accomplishing this. So, show us what you consider as a proper email validation.
*For some reason the built in email validator doesn't check if an emailaddress ends with a tld (eg .nl or .com) so I found a better RegExp and used it with a pattern validator.*

- Use the latest version of Angular in combination with TypeScript.
*Angular 11.2.3 latest enough?*
- UX/UI can be based on a CSS Framework (or do it yourself with minimal effort)
*I like Tania Rascia's Primitive ui since it's lightweight and makes for a simple nice looking interface.*
- You can target browsers that support ES6. Do not worry about supporting old browser versions. &#x2713;
- Make your solution available on GitHub or GitLab or Bitbucket. &#x2713;

Notes for your assessment:
- Correctness – Is it production-ready application? Does the application do what was asked? If not, does the README explain why it is missing and/or different?
- Code quality – Are there any code smells? Is the coding style consistent with the Angular style guide?
- Testing – Is your logic covered with unit or integration tests?
*Regretfully, no. I wanted to test if entering incomplete data in the email input field triggered the warnings but I was unable to do this using Jasmine. I also got error messaegs by just initialising a fixture. Maybe Jasmine doesn't lend itself well to testing the DOM?*
- UX – Is the web interface understandable and pleasing to use?
*I think so but tastes differ ;)*
- Documentation – Is there a README covering how to build and run your project? &#x2713;
- Technical choices – Are choices of libraries, architecture etc. appropriate for the task?
*Initially I wanted to use Angular material UI but that turned out to be overkill. I also assumed that testing would become much more difficult by introducing this framework. Architectural choices (class based OOP as opposed to FP) are made by the framework so I had no say in this.* 

# Running the app
Since you're reading this you already succeeded in cloning the repo. Hurra! All you have to do to get the app running is:
- open a terminal in the root of the folder "Fedex-coding-challenge";
- In the terminal type `npm install` and wait for the build process to end (indicated by the text `√ Compiled successfully.`)
- open a browser window and navigate to localhost:4200 (assuming this port is free. Otherwise you have entered another port number)

Have fun!

---

# SignupForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
