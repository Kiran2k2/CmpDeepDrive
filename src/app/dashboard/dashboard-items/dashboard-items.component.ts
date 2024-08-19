import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-items',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-items.component.html',
  styleUrl: './dashboard-items.component.css'
})
export class DashboardItemsComponent {
// @Input({required:true}) images!:{src:string,alt:string}
// @Input({required:true}) title!:string


//! anotherwat as input function
 image =input.required<{src:string,alt:string}>()
 title=input.required<string>()

}
