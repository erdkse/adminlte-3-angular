import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-settings-tab',
    templateUrl: './settings-tab.component.html',
    styleUrls: ['./settings-tab.component.scss']
})
export class SettingsTabComponent {
    @Input() isActive: boolean = false;
    settingsForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.settingsForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            name2: ['', Validators.required],
            experience: [''],
            skills: [''],
            agreeTerms: [false, Validators.requiredTrue]
        });
    }

    onSubmit() {
        if (this.settingsForm.valid) {
            console.log('Form submitted:', this.settingsForm.value);
        } else {
            console.log('Form is not valid');
        }
    }
}
