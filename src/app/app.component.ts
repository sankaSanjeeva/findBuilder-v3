import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isTop = true;

  @HostListener('window:scroll') // for window scroll events
  onScroll() {
    if (window.scrollY > 0) {
      this.isTop = false;
    } else {
      this.isTop = true;
    }
  }
}
