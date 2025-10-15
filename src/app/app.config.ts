import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {  Clock, CodeXml, Database, Download, FileCode, FileDown, Folder, FolderGit2, FolderOpen, GitBranch, GitCommitHorizontal, GitCompare, History, LucideAngularModule, Menu, Minus, Pause, RefreshCcw, Search, Settings, Settings2, Square, Terminal, Trash2, X } from 'lucide-angular';
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
        Settings2,
        CodeXml,
        Terminal,
        FolderOpen,
        Pause,
        History,
        GitCompare,
        Download,
        Settings,
        FileDown,
        Trash2
      })
    )
  ]
};
