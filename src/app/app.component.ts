import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { title: 'neat tree',
      content: 'saw this neat tree on my hike today',
      username: 'nature',
      imgUrl: 'assets/tree.jpeg'
    },
    { title: 'snowy mountain',
      content: 'look at this snowy boi',
      username: 'mtnlvr',
      imgUrl: 'assets/mountain.jpeg'
    },
    { title: 'mountain biking',
      content: 'shreddin the gnar',
      username: 'bikinguy',
      imgUrl: 'assets/biking.jpeg'
    }
  ]
}
