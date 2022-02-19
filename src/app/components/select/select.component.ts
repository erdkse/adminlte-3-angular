import {
    Component,
    HostBinding,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';
import {v4 as uuidv4} from 'uuid';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, OnChanges {
    @HostBinding('class') classes: string = 'form-group';
    public ID: string;
    @Input() type: string;
    @Input() disabled: boolean;
    @Input() options: Array<Option>;
    @Input() modelValue: string;
    public isNoneSelected: boolean = false;

    constructor() {}

    ngOnInit(): void {
        this.ID = uuidv4();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.isNoneSelected = false;
        console.log(changes.prop);
    }
}

export interface Option {
    label: string;
    value: string | number;
}
