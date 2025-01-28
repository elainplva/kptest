import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week2 - To Do List';

  thingsTODo = [
    'Learn Javascript',
    'Learn Angular',
    'Learn Redux'
  ];

  thingsCompleted=[];

  summary():string {
    return `${this.thingsTODo.length} to do / ${this.thingsCompleted.length} done`;
  }
}

