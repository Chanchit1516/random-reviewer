import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom',
  imports: [CommonModule],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent {
  selectedCondition: string | null = "AND";
  inputCounter: number = 1;

  selectCondition(condition: string) {
    this.selectedCondition = condition;
  }

  addCondition(){
    this.inputCounter++;
  }
  removeCondition(){
    if(this.inputCounter > 1){
      this.inputCounter--;
    }
  }
}
