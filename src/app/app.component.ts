import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
	title = 'backgrounds';
	editObj: any;
	selectedTab: FormControl = new FormControl("user-info");
	sub: Subscription;
	constructor(private router: Router) { }

	ngOnInit(): void {
		this.sub = this.selectedTab.valueChanges.subscribe(value => {
			this.router.navigateByUrl(value);
		});
	}

	ngOnDestroy(): void {
		this.sub?.unsubscribe();
	}
}
