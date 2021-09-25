import {
    AfterViewInit,
    Component,
    ElementRef,
    HostBinding,
    Input,
    OnInit,
    Renderer2
} from '@angular/core';

@Component({
    selector: 'app-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit, AfterViewInit {
    @Input() size: string;
    @HostBinding('class.dropdown-menu') hasDropdownMenu: boolean = true;
    @HostBinding('class.dropdown-menu-right') hasDropdownMenuRight: boolean =
        true;
    @HostBinding('class.show') hasShow: boolean = true;

    constructor(
        private dropdownMenuElement: ElementRef,
        private renderer: Renderer2
    ) {}

    ngOnInit() {
        this.renderer.addClass(
            this.dropdownMenuElement.nativeElement,
            `dropdown-menu-${this.size}`
        );
    }

    ngAfterViewInit() {
        const style = this.fixStyles();
        this.renderer.setStyle(
            this.dropdownMenuElement.nativeElement,
            'left',
            style.left
        );
        this.renderer.setStyle(
            this.dropdownMenuElement.nativeElement,
            'right',
            style.right
        );
    }

    fixStyles(): any {
        if (this.dropdownMenuElement) {
            const windowWidth = window.innerWidth;
            const offsetLeft =
                this.dropdownMenuElement.nativeElement.getBoundingClientRect()
                    .left;
            const offsetWidth =
                this.dropdownMenuElement.nativeElement.offsetWidth;
            const visiblePart = windowWidth - offsetLeft;

            if (offsetLeft < 0) {
                return {
                    left: 'inherit',
                    right: `${offsetLeft - 5}px`
                };
            } else if (visiblePart < offsetWidth) {
                return {left: 'inherit', right: `0px`};
            }
            return {left: 'inherit', right: `0px`};
        }
        return {left: 'inherit', right: `0px`};
    }
}
