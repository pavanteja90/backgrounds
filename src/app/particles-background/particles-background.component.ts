import { Component, OnInit } from '@angular/core';
import { PARTICLES_CONFIG_2 } from "../../assets/particles.config";

declare let particlesJS: any;

@Component({
  selector: 'app-particles-background',
  templateUrl: './particles-background.component.html',
  styleUrls: ['./particles-background.component.scss']
})
export class ParticlesBackgroundComponent implements OnInit {

	ngOnInit(): void {
		this.invokeParticles();
	}

	private invokeParticles(): void {
		particlesJS('particles-js', PARTICLES_CONFIG_2, undefined);
	}

	openUrl(url: string) {
		window.open(url);
	}

}
