import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormInitComponent } from "../form-init/form-init.component";
import { StepStatus } from '@Shared/models';



@Component({
  selector: 'app-time-line',
  standalone: true,
  imports: [CommonModule, FormInitComponent, FormInitComponent],
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeLineComponent {
  stepStatus: StepStatus = {init: true, process: false, finaly: false};
}
