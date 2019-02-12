import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'post-list-component-item',
  templateUrl: './post-list-component-item.component.html',
  styleUrls: ['./post-list-component-item.component.scss']
})
export class PostListComponentItemComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  content: string;
  @Input()
  loveIts: number;
  @Input()
  created_at: Date;

  constructor() {
  }

  ngOnInit() {
  }

  onLoveIt():void{
    this.loveIts+=1;
  }

  onDontLoveIt():void{
    this.loveIts-=1;
  }

}
