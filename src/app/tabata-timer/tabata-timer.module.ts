import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import {TabataTimerRoutingModule} from './tabata-timer-routing.module';
import {MaterialModule} from '../../shared/material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TabataTimerRoutingModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [ContainerComponent]
})
export class TabataTimerModule {

}
