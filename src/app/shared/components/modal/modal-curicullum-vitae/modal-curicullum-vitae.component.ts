import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-modal-curicullum-vitae',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>modal-curicullum-vitae works!</p>`,
  styleUrl: './modal-curicullum-vitae.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalCuricullumVitaeComponent { 
  
}
