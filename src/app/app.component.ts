import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Calculator';

  display: string = '0';


  appendToDisplay(value: string) {
    if (this.display === '0') {
      this.display = value;
    } else {
      this.display += value; 
    }
  }

  clear() {
    this.display = '';
  }

  removeLastCharacter() {
    this.display = this.display.slice(0, -1);
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (e) {
      this.display = 'Error';
    }
  }
}
