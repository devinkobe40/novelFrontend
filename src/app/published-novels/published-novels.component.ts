import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-published-novels',
  templateUrl: './published-novels.component.html',
  styleUrls: ['./published-novels.component.scss']
})
export class PublishedNovelsComponent implements OnInit {

  loops: any = [0,1,2,3,4];

  constructor() { }

  ngOnInit(): void {
  }

}
