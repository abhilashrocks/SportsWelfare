import{Component} from '@angular/core';

@Component({
    templateUrl:'trainingmodule.component.html'
})

export class TrainingModuleComponent{
    people: any[] = [
        {
          "name": "Cricket Rules"
        },
        {
          "name": "Soccer Rules"
        },
        {
          "name": "Hockey  Rules"
        },
        {
          "name": "Basketball Rules"
        },
        {
          "name": "Kho-kho  Rules"
        }
      ];
}