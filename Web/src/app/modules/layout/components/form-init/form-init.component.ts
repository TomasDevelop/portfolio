import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserType } from '@Shared/models';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { initStatus } from '@Store/layout/actions';
@Component({
  selector: 'app-form-init',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-init.component.html',
  styleUrl: './form-init.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInitComponent implements OnInit {
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
    this.store.dispatch(initStatus({
      user: {
          name: 'Tomas',
          email: 'tomasema@gmail.com',
          type: 'company' as UserType
      }
  }));
  }
}
