import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	declarations: [
		AppComponent,
		SignUpFormComponent
	],
	imports: [
		BrowserModule,
		NoopAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
