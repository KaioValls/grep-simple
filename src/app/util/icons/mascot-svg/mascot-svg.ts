import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mascot-svg',
  standalone: true,
  imports: [],
  templateUrl: './mascot-svg.html',
  styleUrl: './mascot-svg.scss'
})
export class MascotSvg {

  @Input() size: number = 56;
}
