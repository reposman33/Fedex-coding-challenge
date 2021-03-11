import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormGroup, FormBuilder } from "@angular/forms";

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
		}).compileComponents();
	});

	it('should render', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeDefined();
	});
});
