import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabataTimerSettings} from '../../models/tabata-timer-settings';
import {RestTabataItem, StartTabatatItem, TabataItem, WorkoutTabataItem} from '../../models/tabata-item';

@Component({
  selector: 'tt-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit, AfterViewInit {

  @Input() tabataTimerSettings: TabataTimerSettings;
  @Output() finishWorkout = new EventEmitter<void>();

  currentTabataItem: TabataItem;

  private tabataItems: TabataItem[] = [];

  constructor() {
  }

  ngOnInit() {
    this.tabataItems.push(new StartTabatatItem(10));

    for (let i = 0; i < this.tabataTimerSettings.rounds; i++) {
      this.tabataItems.push(new WorkoutTabataItem(this.tabataTimerSettings.workout));

      if (i < this.tabataTimerSettings.rounds - 1) {
        this.tabataItems.push(new RestTabataItem(this.tabataTimerSettings.rest));
      }
    }

    this.currentTabataItem = this.tabataItems[0];
  }

  ngAfterViewInit() {
    this.startNextTabataItem();
  }

  getRoundCount(): number {
    const restTabataItems = this.tabataItems.filter((tabataItem: TabataItem) => {
      return tabataItem.isRest();
    });

    return this.tabataTimerSettings.rounds - restTabataItems.length;
  }

  private startNextTabataItem() {
    this.currentTabataItem = this.tabataItems.shift();

    if (this.currentTabataItem) {
      this.countDownCurrentTabataItem();
    } else {
      this.finishWorkout.emit();
    }
  }

  private countDownCurrentTabataItem() {
    setTimeout(() => {
      this.currentTabataItem.duration--;

      if (this.currentTabataItem.duration === 0) {
        this.startNextTabataItem();
      } else {
        this.countDownCurrentTabataItem();
      }
    }, 1000);
  }

}
