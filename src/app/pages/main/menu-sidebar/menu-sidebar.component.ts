import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { AppService } from 'src/app/utils/services/app.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('mainSidebar', { static: false }) mainSidebar;
  @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();
  constructor(public appService: AppService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  }
}
