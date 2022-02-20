import {
    Component,
    EventEmitter,
    HostBinding,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {v4 as uuidv4} from 'uuid';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
    @HostBinding('class') classes: string = 'form-group';
    public ID: string;
    @Input() type: string;
    @Input() disabled: boolean;
    @Input() options: Array<Option>;
    @Input() value: string;
    @Output() valueChange = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {
        this.ID = uuidv4();
    }

    onValueChange(event) {
        this.valueChange.emit(event.target.value);
    }

    public isNoneSelected(): boolean {
        if (!this.value) {
            return true;
        }
        return this.options.some(
            (option: Option) => option.value === this.value
        );
    }
}

export interface Option {
    label: string;
    value: string | number;
}
