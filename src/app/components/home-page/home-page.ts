import { CommonModule } from '@angular/common';
import { RepositoryService } from './../../services/repository-service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RepositoryList } from "../repository-list/repository-list";
import { RepositoryInfo } from "../repository-info/repository-info";
import { RepositoryOptions } from "../repository-options/repository-options";
import { TopBar } from "../top-bar/top-bar";
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-home-page',
   standalone: true,
  imports: [CommonModule, RepositoryList, RepositoryInfo, RepositoryOptions, TopBar],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage implements OnInit {
  repositories: Repository[] = [];

  // Inicia como nulo para que a tela de "selecione um repositório" apareça
  selectedRepository: Repository | null = null;

  constructor(private repositoryService:RepositoryService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.repositoryService.getRepositories().subscribe((data) => {
      this.repositories = data;
      if (data && data.length > 0) {
        this.selectedRepository = data[0];
      }
      this.cdr.markForCheck();
    });
  }

  handleRepositorySelection(repositoryId: string): void {
    console.log('Repositório selecionado com ID:', repositoryId);
    // Encontra o objeto completo do repositório na lista e o atribui a selectedRepository
    this.selectedRepository = this.repositories.find(repo => repo.id === repositoryId) || null;
  }

  // home.component.ts

// ...

  handleOpenInIDE(repo: Repository | null) {
    if (!repo) return;
    console.log(`Abrindo ${repo.name} no IDE... (Caminho: ${repo.path})`);
    // Ex: this.electronService.openPathInIDE(repo.path);
  }

  handleOpenTerminal(repo: Repository | null) {
    if (!repo) return;
    console.log(`Abrindo terminal em ${repo.path}...`);
    // Ex: this.electronService.openTerminalAt(repo.path);
  }

  handleOpenFolder(repo: Repository | null) {
    if (!repo) return;
    console.log(`Abrindo a pasta ${repo.path} no explorador de arquivos...`);
    // Ex: this.electronService.showItemInFolder(repo.path);
  }

}
