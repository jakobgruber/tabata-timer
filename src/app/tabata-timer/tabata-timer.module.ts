import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './components/container/container.component';
import {MaterialModule} from '../../shared/material.module';
import {FormsModule} from '@angular/forms';
import {StartComponent} from './components/start/start.component';
import {WorkoutComponent} from './components/workout/workout.component';
import {FinishComponent} from './components/finish/finish.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ContainerComponent,
    StartComponent,
    WorkoutComponent,
    FinishComponent
  ],
  exports: [
    ContainerComponent
  ]
})
export class TabataTimerModule {

}
