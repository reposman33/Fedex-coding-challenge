import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it("should display error message when no email address provided", () => {
		const fixture = TestBed.createComponent(AppComponent);
		const compiled = fixture.nativeElement;
		// expect(compiled.querySelector('.content span').textContent).toContain('signup-form app is running!');
		console.log("compiled = ", compiled)
	})
});
