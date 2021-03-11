import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

type HttpOptions = {
	headers: HttpHeaders
}
@Component({
	selector: 'app-sign-up-form',
	templateUrl: './sign-up-form.component.html',
	styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {
	title: string = 'signup-form';
	feedback: string = "";
	SIGN_UP_SUCCES: string = "Succesfully signed in";
	SIGN_UP_ERROR: string = "Succesfully signed in";
	signedUp: boolean = false;
	validEmailPattern: RegExp = /[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}/i;
	demoURL: string = "https://demo-api.now.sh/users";
	httpOptions: HttpOptions = {
		headers: new HttpHeaders({
			"Content-type": "Application/json"
		})
	};
	constructor(private http: HttpClient) { }

	signUpForm = new FormGroup({
		firstName: new FormControl("", [Validators.required]),
		lastName: new FormControl("", [Validators.required]),
		email: new FormControl("", [Validators.required, Validators.pattern(this.validEmailPattern)]),
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
		const payload = {
			firstName: this.signUpForm.value.firstName,
			lastName: this.signUpForm.value.lastName,
			email: this.signUpForm.value.email
		}
		this.http.post(this.demoURL, payload, this.httpOptions)
			.pipe(catchError((error) => error))
			.subscribe(newUser => {
				this.feedback = this.SIGN_UP_SUCCES;
				this.signedUp = true;
			})
	}

}
