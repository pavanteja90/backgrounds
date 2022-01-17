import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations';
import { ParticlesBackgroundComponent } from './particles-background/particles-background.component';
import { TwinklingStarsComponent } from './twinkling-stars/twinkling-stars.component';
import { UserInfoComponent } from './user-info/components';

const routes: Routes = [{
	path: 'particles',
	component: ParticlesBackgroundComponent
}, {
	path: 'twinkling',
	component: TwinklingStarsComponent
}, {
	path: 'animations',
	component: AnimationsComponent
}, {
	path: 'user-info',
	component: UserInfoComponent
}, {
	path: '**',
	redirectTo: 'user-info'
}];

/**
 * @description Defines the routes available for the application and the components that are instantiated for different paths
 */
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
