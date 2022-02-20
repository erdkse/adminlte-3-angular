import {
    Component,
    EventEmitter,
    HostBinding,
    Input,
    OnInit,
    Output
} from '@angular/core';
import {v4 as uuidv4} from 'uuid';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
    @HostBinding('class') classes: string = '';
    public ID: string;
    @Input() type: string = 'default';
    @Input() value: boolean;
    @Output() valueChange = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit(): void {
        this.ID = uuidv4();
        this.classes = this.getClasses(this.type);
    }

    public onValueChange(event) {
        console.log(event);
        this.valueChange.emit(event.target.checked);
    }

    getClasses(type: string) {
        if (type === 'icheck') {
            return 'icheck-primary';
        }
        if (type === 'default') {
            return 'form-check';
        }
        if (type === 'custom') {
            return 'custom-control custom-checkbox';
        }
    }
}
