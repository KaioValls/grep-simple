import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Repo } from '../../models/repository';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repository-options',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './repository-options.html',
  styleUrl: './repository-options.scss',
})
export class RepositoryOptions {

  /**
   * Recebe o objeto completo do repositório selecionado, ou nulo.
   */
  @Input() repository: Repo | null = null;

  openRepoFolder() {
    window.electronAPI.openFolder(this.repository!.path);
  }

  openGitBash() {
    window.electronAPI.openGitBash(this.repository!.path);
  }

  openInIDE() {
    window.electronAPI.openIntelliJ(this.repository!.path);
  }
}
