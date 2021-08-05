import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  loops:any = [0,1,2,3,4,5,6,7,8,9,10,11,11,11,22,3,1,4,45];

  ngOnInit(): void {
  }

}
