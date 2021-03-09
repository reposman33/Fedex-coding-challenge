import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: 'app-sign-up-form',
	templateUrl: './sign-up-form.component.html',
	styleUrls: ['../../../main.css', './sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
	title = 'signup-form';
	signUpForm = new FormGroup({
		firstName: new FormControl("", [Validators.required]),
		lastName: new FormControl("", [Validators.required]),
		email: new FormControl("", [Validators.required, Validators.email]),
		password: new FormControl("", [Validators.required])
	})

	get firstName() { return this.signUpForm.get("firstName") }
	get lastName() { return this.signUpForm.get("lastName") }
	get email() { return this.signUpForm.get("email") }
	get password() { return this.signUpForm.get("password") }

	getErrorMessage(type: string) {
		return type === "firstName" ? "Please provide your first name" :
			type === "lastName" ? "Please provide your last name" :
				type === "email" ? "Please provide your email address" :
					type === "password" ? "Please provide a password" :
						""
	}

	onSubmitSigninForm() {
		console.warn(this.signUpForm.value);
	}
	ngOnInit(): void {
	}

}
