import { Component, OnInit } from '@angular/core';
import { Article, articles } from './articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public articles!: Article[];

  constructor() {}

  ngOnInit(): void {
    this.articles = articles;
  }
}
