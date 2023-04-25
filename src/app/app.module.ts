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
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ComponentsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [LoginService, AuthService],
	bootstrap: [AppComponent],
})
export class AppModule {}
