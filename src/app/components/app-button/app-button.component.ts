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
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.disabled = this.disabled || this.loading;
  }
}
