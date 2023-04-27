import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DidacticMaterialsComponent } from './pages/didactic-materials/didactic-materials.component';
import { LoggedGuard } from './guards/logged.guard';
import { LogoutComponent } from './pages/logout/logout.component';
import { AllDidacticMaterialsComponent } from './pages/all-didactic-materials/all-didactic-materials.component';

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [LoggedGuard],
	},
	{
		path: 'material-didatico',
		children: [
			{
				path: '',
				component: DidacticMaterialsComponent,
			},
			{
				path: 'all',
				component: AllDidacticMaterialsComponent,
			},
		],

		canActivate: [AuthGuard],
	},
	{
		path: 'logout',
		component: LogoutComponent,
		canActivate: [AuthGuard],
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
