import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContainerComponent} from './components/container/container.component';

const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    /*children: [
      {path: 'person/detail/:id', component: PersonDetailComponent},
      {path: 'person/edit/:id', component: PersonEditComponent},
      {path: 'person/detail/:personId/debt/edit/:debtId', component: DebtEditComponent},
      {path: '', component: PersonDetailComponent}
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabataTimerRoutingModule {

}
