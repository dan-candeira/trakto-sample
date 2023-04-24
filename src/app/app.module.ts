import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/module';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DidacticMaterialsComponent } from './pages/didactic-materials/didactic-materials.component';

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
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
