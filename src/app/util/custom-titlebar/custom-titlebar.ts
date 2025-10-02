import { Component, OnInit, NgZone } from '@angular/core';
import {LucideAngularModule } from 'lucide-angular';

declare global {
  interface Window {
    electronAPI: {
      closeApp: () => void;
      minimizeApp: () => void;
      maximizeApp: () => void;
    };
  }
}

@Component({
  selector: 'app-custom-titlebar',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './custom-titlebar.html',
  styleUrls: ['./custom-titlebar.scss']
})
export class CustomTitlebar implements OnInit {

  ngOnInit(): void {

  }

  close(){
    window.electronAPI.closeApp();
  }

  minimize(){
    window.electronAPI.minimizeApp();
  }

  maximize(){
    window.electronAPI.maximizeApp();
  }
}
