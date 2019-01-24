import {Component} from '@angular/core';
import {Post} from "./model/Post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';
  posts: Array<Post> = [
    new Post('Mon premier titre', 'mon contenu', 1),
    new Post('Mon deuxième titre', 'mon contenu', -5),
    new Post('Mon troisième titre', 'mon contenu', 0)
  ]
}
