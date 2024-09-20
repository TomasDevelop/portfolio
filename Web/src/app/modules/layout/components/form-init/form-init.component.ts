import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProcessStatus, StepStatus, UserType } from '@Shared/models';
import { StoreActionsLayout } from '@Store/actions';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-init',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-init.component.html',
  styleUrl: './form-init.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInitComponent implements OnInit {
  stepStatus: StepStatus = {init: true, process: false, finaly: false};
  stepProcessStatus: ProcessStatus = ProcessStatus.First
  userForm!: FormGroup;

  fb = inject(FormBuilder)
  store = inject(Store)
  
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      type: ['recruiter']
    });
  }

  onSumbit(){
    this.store.dispatch(StoreActionsLayout.initStatus({
      user: {
          name: 'Tomas',
          email: 'tomasema@gmail.com',
          type: 'company' as UserType
      }
  }));
  }
}
