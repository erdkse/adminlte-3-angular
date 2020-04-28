import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss'],
})
export class AppButtonComponent implements OnInit {
  @Input() type: string = 'button';
  @Input() block: boolean = false;
  @Input() color: string = 'primary';
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
