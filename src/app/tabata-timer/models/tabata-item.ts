export enum TabatItemType {
  Start = 'start',
  Workout = 'workout',
  Rest = 'rest'
}

export abstract class TabataItem {
  constructor(public type, public label, public duration: number) {

  }

  isStart() {
    return this.type === TabatItemType.Start;
  }

  isWorkout() {
    return this.type === TabatItemType.Workout;
  }

  isRest() {
    return this.type === TabatItemType.Rest;
  }
}

export class StartTabatatItem extends TabataItem {
  constructor(public duration: number) {
    super(TabatItemType.Start, 'Start', duration);
  }
}

export class WorkoutTabataItem extends TabataItem {
  constructor(public duration: number) {
    super(TabatItemType.Workout, 'Workout', duration);
  }
}

export class RestTabataItem extends TabataItem {
  constructor(public duration: number) {
    super(TabatItemType.Rest, 'Rest', duration);
  }
}
