import { Component, signal } from '@angular/core';
import { CustomTitlebar } from "./util/custom-titlebar/custom-titlebar";
import { HomePage } from "./components/home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [ CustomTitlebar, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('electron-grep-rtb');
}
