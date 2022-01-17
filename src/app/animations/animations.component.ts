import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'animations',
	templateUrl: 'animations.component.html',
	styleUrls: ['animations.component.scss']
})

export class AnimationsComponent implements OnInit {
	enableComponent: boolean = true;
	constructor() { }

	ngOnInit() { }
}