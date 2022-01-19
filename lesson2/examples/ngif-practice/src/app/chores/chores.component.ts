import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   finishedChores = ["1", "2", "3", "4", "5"];

   targetImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKalrMKPqLBydV9vvjffW5qf2F6QDQSzpCAQ&usqp=CAU';

   constructor() { }

   ngOnInit() {
   }

}
