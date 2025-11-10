import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomRoutingModule,
    FormsModule
  ]
})
export class CustomModule { }



// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-custom',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './custom.component.html',
//   styleUrl: './custom.component.css'
// })