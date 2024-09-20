// Angular imports
import { ChangeDetectionStrategy, Component } from '@angular/core';
// Components
import { HeaderComponent, IframeProyectsComponent, ContactMeComponent } from '@Shared/components';
import { FormInitComponent, TecnologiesSectionComponent, TimeLineComponent } from '@Layout/components';
// Models
import { ProcessStatus, StepStatus } from '@Shared/models';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent, 
    FormInitComponent, 
    TimeLineComponent, 
    TecnologiesSectionComponent, 
    ContactMeComponent,
    IframeProyectsComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  readonly ProccessStatus = ProcessStatus

  stepStatus: StepStatus = {init: true, process: false, finaly: false};
  stepProcessStatus: ProcessStatus = ProcessStatus.first
  // Sin signals para poder usar el Store viejo.
  stepCounter = 0;
}
