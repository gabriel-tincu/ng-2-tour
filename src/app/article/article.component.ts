import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input()
  article: Article;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      "thumbs-up",
      sanitizer.bypassSecurityTrustResourceUrl("../assets/images/ic_thumb_up_black_24px.svg")
    );
    iconRegistry.addSvgIcon(
      "thumbs-down",
      sanitizer.bypassSecurityTrustResourceUrl("../assets/images/ic_thumb_down_black_24px.svg")
    );
  }
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
  ngOnInit() {
  }

}
