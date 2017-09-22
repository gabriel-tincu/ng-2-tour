import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  title: string;
  link: string;
  votes: number;

  constructor() {
    this.title = "Some title";
    this.link = "https://angular.io";
    this.votes = 10;
  }
  voteUp(): boolean {
    this.votes ++;
    return false;
  }
  voteDown(): boolean {
    if (this.votes > 0) {
      this.votes --;
    }
    return false;
  }
  ngOnInit() {
  }

}
