import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {  Clock, Database, FileCode, Folder, FolderGit2, GitBranch, GitCommitHorizontal, LucideAngularModule, Menu, Minus, RefreshCcw, Search, Settings2, Square, X } from 'lucide-angular';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Square,
        Minus,
        X,
        Menu,
        GitBranch,
        RefreshCcw,
        Folder,
        Search,
        FileCode,
        Clock,
        GitCommitHorizontal,
        Database,
        FolderGit2,
        Settings2
      })
    )
  ]
};
