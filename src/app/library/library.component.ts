import { Component, OnInit } from '@angular/core';
import { NovelClass } from '../data/novel.class';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  // novelDb = <NovelClass>{};

    novels: any = {
      "novel": [
        {
          "title": "Villain",
          "genre": [
            "horror",
            "action",
            "romance"
          ],
          "status": "completed",
          "sypnosis": "Young man found a book.",
          "view_count": 1232
        },
        {
          "title": "My Hero",
          "genre": [
            "horror",
            "action",
            "romance"
          ],
          "status": "completed",
          "sypnosis": "Young man found a book.",
          "view_count": 1232
        },
        {
          "title": "Beginnner",
          "genre": [
            "horror",
            "action",
            "romance"
          ],
          "status": "completed",
          "sypnosis": "Young man found a book.",
          "view_count": 1232
        },
        {
          "title": "Red",
          "genre": [
            "horror",
            "action",
            "romance"
          ],
          "status": "completed",
          "sypnosis": "Young man found a book.",
          "view_count": 1232
        },
      ]
    }
  novelDb = {} as NovelClass;

  constructor() { }

  ngOnInit(): void {
    this.novelDb = this.novels;
    console.log(this.novelDb);

  }

}
