import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'tabata-timer', pathMatch: 'full' },
  { path: 'tabata-timer', loadChildren: './tabata-timer/tabata-timer.module#TabataTimerModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
