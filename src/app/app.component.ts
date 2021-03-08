import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'signup-form';
	email = new FormControl("", [Validators.required, Validators.email]);

	getErrorMessage() {
		console.log(this.email.hasError('email'))
		return this.email.hasError('email')
			? 'Not a valid email'
			: this.email.hasError('required')
				? "Please enter a valid email address"
				: "";
	}

	validateEmail = (emailAddress: FormControl) => {
		return { invalidEmail: "email address invalid" }
	}
}
