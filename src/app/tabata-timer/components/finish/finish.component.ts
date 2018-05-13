import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'tt-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent implements AfterViewInit {

  @Output() startNewWorkout = new EventEmitter<void>();

  constructor() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.startNewWorkout.emit();
    }, 3000);
  }

}
