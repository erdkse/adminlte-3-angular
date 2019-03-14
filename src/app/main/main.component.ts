import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public sidebarMenuCollapsed = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  toggleMenuSidebar() {
    if (this.sidebarMenuCollapsed) {
      this.renderer.removeClass(document.body, 'sidebar-open');
      this.renderer.addClass(document.body, 'sidebar-collapse');
      this.sidebarMenuCollapsed = false;
    } else {
      this.renderer.removeClass(document.body, 'sidebar-collapse');
      this.renderer.addClass(document.body, 'sidebar-open');
      this.sidebarMenuCollapsed = true;
    }
  }
}
