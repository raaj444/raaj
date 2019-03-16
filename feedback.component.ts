import {Component, OnInit} from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}
  @Component({
    selector : 'app-feedback',
    templateUrl : 'feedback.component.html'
  })

  export class FeedbackComponent {
    foods: Food[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];
  }
  