import {Component, OnInit} from '@angular/core';
import {TabataTimerSettings} from '../../models/tabata-timer-settings';

enum CurrentComponentType {
  Start, Workout, Finish
}

@Component({
  selector: 'tt-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  currentComponent = CurrentComponentType.Start;
  CurrentComponentType = CurrentComponentType;
  tabataTimerSettings = new TabataTimerSettings();

  constructor() {
  }

  ngOnInit() {
  }

  onStartWorkout() {
    this.currentComponent = CurrentComponentType.Workout;
  }

  onFinishWorkout() {
    this.currentComponent = CurrentComponentType.Finish;
  }

  onStartNewWorkout() {
    this.currentComponent = CurrentComponentType.Start;
  }

}
