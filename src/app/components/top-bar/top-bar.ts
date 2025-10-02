import { Component } from '@angular/core';
import { MascotSvg } from '../../util/icons/mascot-svg/mascot-svg';

@Component({
  selector: 'app-top-bar',
  imports: [MascotSvg],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss'
})
export class TopBar {


  selectedPath!:String;

}
