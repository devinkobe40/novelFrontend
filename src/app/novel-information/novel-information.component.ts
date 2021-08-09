import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novel-information',
  templateUrl: './novel-information.component.html',
  styleUrls: ['./novel-information.component.scss']
})
export class NovelInformationComponent implements OnInit {

  comments:any = {
    "comments" : [
      {
        "user" : "jwt2012",
        "comment" : "5/5 plot is good",
        "date_created" : "09/12/2021",
        "date_updated" : "09/12/2021",
      },
      {
        "user" : "peanutbuttercream54",
        "comment" : "If there’s one thing that’s enticing about the Noitamina network, it’s their way of broadcasting shows to a variety of audiences. Banana Fish seems like one of those shows that isn’t aimed at a wider audience but it definitely has its own appeal. Taking place in a crime-noir setting, the series deals with teenage gangs in a corrupted city. It’s a time period of recreation and Banana Fish sets a firm example of an old school crime drama resurrected to modern life.",
        "date_created" : "09/12/2021",
        "date_updated" : "09/12/2021",
      },

      {
        "user" : "commanderfish22",
        "comment" : "A soldier’s life is one of hardships. Seen as the pride of a nation, they are tasked with defending the honour of their motherland with both flesh and blood. A life that requires chivalry, discipline and steadfastness. Their existence serves as a beacon light to the tame and cowardly; a source of inspiration for the youth to grow strong. But underneath all the glory and medallions reveal a darker tale more telling of their lives. Ordinary people before donning a uniform and sent off to war, a life of violence and suffering entails them. A hellish nightmare seeming to never end makes it near impossible to return to their former self. One must be physically and mentally tough to ever hope to survive such a turbulent time, but not everyone is capable of carrying that weight.",
        "date_created" : "09/12/2021",
        "date_updated" : "09/12/2021",
      },

      {
        "user" : "snarkie",
        "comment" : "Thank you... for not growing to hate humans.Each episode Natsume encounters a different youkai. Sometimes, it's a youkai seeking to get his/her name back; at other times, a youkai wanting some other help from Natsume, which he can never refuse.As much as those stories revolve around youkai, Natsume Yuujinchou is ultimately about humans. It focuses on the bonds between humans, as well as the bonds between humans and youkai.Each story is very well thought out and carries a deep message that Natsume derives from his encounters. Reasons why Natsume cannot let go of his bond with youkai, reasons why youkai fall in love with humans; Natsume Yuujinchou is a collection of beautiful bittersweet pieces of a not very ordinary every day life. Each piece left me with a somewhat sad but warm feeling and made me go back to re-watch and think upon it again and again.",
        "date_created" : "08/06/2021",
        "date_updated" : "08/06/2021",
      },

      {
        "user" : "marioe",
        "comment" : "The story is simple, because there's no overall arcing plot. The series basically consists of self-contained episodes where Natsume looks to help youkai with their problems and give them back their names. Sometimes he seeks to help out humans troubled by youkai. In any case, Natsume is always trying to help s",
        "date_created" : "09/12/2021",
        "date_updated" : "09/12/2021",
      },

      {
        "user" : "jwt2012",
        "comment" : "Hiyori's shyness is similar to Sawako's even though she seems a little less mature than Sawako. The story, like kimi ni todoke, is told mostly through the inner dialogues of Hiyori. I really liked that part of kimi ni todoke, so I enjoyed it in Hiyokoi too. The animation and character designs are cute. Cute things these days tend to turn ecchi, but again, like kimi ni todoke, it stays pret",
        "date_created" : "09/12/2021",
        "date_updated" : "09/12/2021",
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
