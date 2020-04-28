import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-messages-dropdown-menu',
  templateUrl: './messages-dropdown-menu.component.html',
  styleUrls: ['./messages-dropdown-menu.component.scss'],
})
export class MessagesDropdownMenuComponent implements OnInit {
  @ViewChild('dropdownMenu', { static: false }) dropdownMenu;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.hideDropdownMenu();
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  toggleDropdownMenu() {
    if (this.dropdownMenu.nativeElement.classList.contains('show')) {
      this.hideDropdownMenu();
    } else {
      this.showDropdownMenu();
    }
  }

  showDropdownMenu() {
    this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
  }

  hideDropdownMenu() {
    this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
  }
}
