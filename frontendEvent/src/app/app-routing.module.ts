import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'; // 🔥 importer ton LayoutComponent

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // 🔥 Le Layout s'applique à ces routes enfants
    children: [
      { path: 'evenements', loadChildren: () => import('./modules/evenement/evenement.module').then(m => m.EvenementModule) },
      { path: 'participants', loadChildren: () => import('./modules/participant/participant.module').then(m => m.ParticipantModule) },
      { path: '', redirectTo: '/evenements', pathMatch: 'full' }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) // 🔥 Sans Layout
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
