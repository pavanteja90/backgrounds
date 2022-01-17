import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'backgrounds';
	editObj: any;
	selectedTab: FormControl = new FormControl("particles");
	constructor(private router: Router) { }

	ngOnInit() {
		this.selectedTab.valueChanges.subscribe(value => {
			this.router.navigateByUrl(value);
		});
	}
}
