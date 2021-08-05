import { NovelInterface } from './novel.interface';

export class NovelClass implements NovelInterface{
  "title" : string;
  "genre" : string[];
  "status" : string;
  "sypnosis" : string;
  "view_count" : number;
}
