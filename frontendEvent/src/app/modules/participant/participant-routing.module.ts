import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
{ path: 'profile', component: ProfileComponent },
{ path: 'listparticipant', component: ListComponent },
{ path: 'inscription', component: InscriptionComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantRoutingModule { }
