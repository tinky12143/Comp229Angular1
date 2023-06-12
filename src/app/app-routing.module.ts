import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
// Import other components...

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: IndexComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Add other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
