import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/module';
import { DidacticMaterialsComponent } from './pages/didactic-materials/didactic-materials.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginService } from './services/login.service';
import { AuthService } from '@services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { LogoutComponent } from './pages/logout/logout.component';
import { DesignService } from '@services/design.service';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';

export function tokenGetter() {
	return localStorage.getItem('access_token');
}

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		LoginComponent,
		NotFoundComponent,
		DidacticMaterialsComponent,
		LogoutComponent,
		SanitizeUrlPipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ComponentsModule,
		ReactiveFormsModule,
		HttpClientModule,
		JwtModule.forRoot({
			config: {
				tokenGetter: tokenGetter,
				allowedDomains: ['http://locahost:4200'],
				disallowedRoutes: [],
			},
		}),
	],
	providers: [LoginService, AuthService, DesignService],
	bootstrap: [AppComponent],
})
export class AppModule {}
