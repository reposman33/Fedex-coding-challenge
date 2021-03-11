import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpFormComponent } from './sign-up-form.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('SignUpFormComponent', () => {
	let component: SignUpFormComponent;
	let fixture: ComponentFixture<SignUpFormComponent>;
	let element: HTMLElement;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [component],
			imports: [HttpClientTestingModule]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SignUpFormComponent);
		component = fixture.componentInstance;
		element = fixture.nativeElement;
		spyOn(component, "onSubmitSigninForm");
	});

	it("should POST the sign up form", () => {
		const signUpForm = {
			value: {
				firstName: "Marc",
				lastName: "Bakker",
				email: "marc@bakker.com"
			}
		}
		expect(component).toBeDefined();
		component.onSubmitSigninForm()
		expect(component.onSubmitSigninForm).toHaveBeenCalled();
	})
});