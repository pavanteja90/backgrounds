import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwinklingStarsComponent } from './twinkling-stars/twinkling-stars.component';
import { ParticlesBackgroundComponent } from './particles-background/particles-background.component';
import { environment } from 'src/environments/environment';
import { UserInfoModule } from './user-info/user-info.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AnimationsComponent } from './animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [
		AppComponent,
		TwinklingStarsComponent,
		ParticlesBackgroundComponent,
		AnimationsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatIconModule,
		MatCardModule,
		MatCheckboxModule,
		MatDividerModule,
		AngularFireModule.initializeApp({
			apiKey: environment.firebaseConfig.apiKey,
			authDomain: environment.firebaseConfig.authDomain,
			projectId: environment.firebaseConfig.projectId,
			storageBucket: environment.firebaseConfig.storageBucket,
			messagingSenderId: environment.firebaseConfig.messagingSenderId,
			appId: environment.firebaseConfig.appId,
			measurementId: environment.firebaseConfig.measurementId
		}),
		AngularFirestoreModule,
		UserInfoModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: "en-AU" },
		{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
