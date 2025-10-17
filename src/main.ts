import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

declare global {
  interface Window {
    electronAPI: {
      closeApp: () => void;
      minimizeApp: () => void;
      maximizeApp: () => void;
      openFolder: (path: string) => void;
      openGitBash: (path: string) => void;
      openIntelliJ: (path: string) => void;
    };
  }
}

export {};
