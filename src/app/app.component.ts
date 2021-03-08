import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'signup-form';
	firstName = new FormControl("", [Validators.required]);
	lastName = new FormControl("", [Validators.required]);
	email = new FormControl("", [Validators.required]);
	password = new FormControl("", [Validators.required]);

	getFirstNameErrorMessage() {
		console.log(this.firstName)
		return this.firstName.touched && this.firstName.hasError('required')
			? "Please enter your first name"
			: "";
	}

	getLastNameErrorMessage() {
		console.log(this.lastName)
		return this.lastName.touched && this.lastName.hasError('required')
			? "Please enter your surname"
			: "";
	}

	getEmailErrorMessage() {
		console.log(this.email)
		return this.email.touched && this.email.hasError('email')
			? 'Not a valid email'
			: this.email.touched && this.email.hasError('required')
				? "Please enter a valid email address"
				: "";
	}

	getPasswordErrorMessage() {
		console.log(this.password)
		return this.password.touched && this.password.hasError('required')
			? "Please enter your password"
			: "";
	}
}
