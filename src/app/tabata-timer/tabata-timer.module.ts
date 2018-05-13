import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import {TabataTimerRoutingModule} from './tabata-timer-routing.module';
import {MaterialModule} from '../../shared/material.module';
import {FormsModule} from '@angular/forms';
import { StartComponent } from './components/start/start.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { FinishComponent } from './components/finish/finish.component';

@NgModule({
  imports: [
    CommonModule,
    TabataTimerRoutingModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [ContainerComponent, StartComponent, WorkoutComponent, FinishComponent]
})
export class TabataTimerModule {

}
