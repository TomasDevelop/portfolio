// Angular imports
import {  ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
// Components
import { HeaderComponent, IframeProyectsComponent, ContactMeComponent } from '@Shared/components';
import { FormInitComponent, TecnologiesSectionComponent, TimeLineComponent } from '@Layout/components';
// Models
import { ProcessStatus, StepStatus } from '@Shared/models';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
// State
import { changeState, stepProccess } from '@Store/layout/selectors';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent, 
    FormInitComponent, 
    TimeLineComponent, 
    TecnologiesSectionComponent, 
    ContactMeComponent,
    IframeProyectsComponent,
    CommonModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  // Vars
  readonly ProccessStatus = ProcessStatus
  // Injects
  store = inject(Store)
  stepStatus$: Observable<StepStatus> = this.store.select(changeState)
  stepProcessStatus$: Observable<ProcessStatus> = this.store.select(stepProccess)

}
