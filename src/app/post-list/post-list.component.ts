import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input()
  public posts: Array<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
