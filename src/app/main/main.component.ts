import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public sidebarMenuCollapsed = false;
  @ViewChild('contentWrapper', { static: false }) contentWrapper;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  mainSidebarHeight(height) {
    // this.renderer.setStyle(
    //   this.contentWrapper.nativeElement,
    //   'min-height',
    //   height - 114 + 'px'
    // );
    console.log(
      'mainSidebarHeight',
      this.contentWrapper.nativeElement.offsetHeight
    );
  }

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
