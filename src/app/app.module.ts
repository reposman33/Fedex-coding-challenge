import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
	declarations: [
		AppComponent,
		FormInputComponent,
	],
	imports: [
		BrowserModule,
		MatInputModule,
		MatFormFieldModule,
		MatInputModule,
		NoopAnimationsModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
