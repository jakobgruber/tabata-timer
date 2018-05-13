import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContainerComponent} from './components/container/container.component';
import {StartComponent} from './components/start/start.component';
import {WorkoutComponent} from './components/workout/workout.component';
import {FinishComponent} from './components/finish/finish.component';

const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      {path: 'start', component: StartComponent},
      {path: 'workout', component: WorkoutComponent},
      {path: 'finish', component: FinishComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabataTimerRoutingModule {

}
