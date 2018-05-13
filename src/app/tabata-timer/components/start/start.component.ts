import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabataTimerSettings} from '../../models/tabata-timer-settings';

@Component({
  selector: 'tt-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  @Input() tabataTimerSettings: TabataTimerSettings;
  @Output() startWorkout = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

}
