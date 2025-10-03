import { Component } from '@angular/core';
import { RepositoryList } from "../repository-list/repository-list";
import { RepositoryInfo } from "../repository-info/repository-info";
import { RepositoryOptions } from "../repository-options/repository-options";
import { TopBar } from "../top-bar/top-bar";
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-home-page',
  imports: [RepositoryList, RepositoryInfo, RepositoryOptions, TopBar],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
 repositories: Repository[] = [
    {
      id: '1',
      name: 'infra-core',
      path: 'C:/Projetos/infra-core',
      isActive: true,
      branch: 'main',
      lastCommit: 'feat: add kubernetes support',
      commits: [
        { message: 'feat: add kubernetes support', author: 'Kaio Valls', date: '2h ago' },
        { message: 'fix: update dockerfile', author: 'Jane Doe', date: '1 day ago' },
        { message: 'refactor: simplify service logic', author: 'Kaio Valls', date: '2 days ago' },
      ],
      stats: {
        filesScanned: '1,428',
        lastScan: '5m ago',
      },
      files: [
        { path: 'src/config/db.ts', type: 'TypeScript', status: 'modified' },
        { path: 'k8s/deployment.yaml', type: 'YAML', status: 'internal' },
        { path: 'README.md', type: 'Markdown', status: 'untracked' },
      ],
    },
    {
      id: '2',
      name: 'frontend-portal',
      path: 'C:/Projetos/frontend-portal',
      isActive: false,
      branch: 'develop',
      lastCommit: 'style: adjust login page layout',
      commits: [
        { message: 'style: adjust login page layout', author: 'John Smith', date: '5h ago' },
        { message: 'feat: implement user profile page', author: 'John Smith', date: '3 days ago' },
      ],
      stats: {
        filesScanned: '859',
        lastScan: '1h ago',
      },
      files: [
        { path: 'src/app/login/login.component.html', type: 'HTML', status: 'modified' },
        { path: 'angular.json', type: 'JSON', status: 'internal' },
      ],
    },
  ];

  // Inicia como nulo para que a tela de "selecione um repositório" apareça
  selectedRepository: Repository | null = null;

  /**
   * Este método é chamado quando o evento (onSelect) é emitido pelo app-repository-list.
   * @param repositoryId O ID do repositório que foi clicado.
   */
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
