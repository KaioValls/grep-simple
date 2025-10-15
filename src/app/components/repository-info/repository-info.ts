import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { FilePreview, Repo } from '../../models/repository';

@Component({
  selector: 'app-repository-info',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './repository-info.html',
  styleUrl: './repository-info.scss'
})
export class RepositoryInfo {

 // Recebe o objeto do repositório (ou nulo) de um componente pai
  @Input() repository: Repo | null = null;

  /**
   * Retorna as classes CSS com base no status do arquivo.
   * Chamada diretamente do template com [ngClass].
   */
  getStatusColor(status: FilePreview['status']): string {
    switch (status) {
      case 'modified':
        return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'internal':
        return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'untracked':
      default:
        return 'text-gray-400 bg-slate-800/50 border-slate-700';
    }
  }

  /**
   * Retorna as iniciais do nome do repositório para o ícone.
   */
  getInitials(name: string): string {
    if (!name) return '';
    const parts = name.split(/[-_ ]/);
    if (parts.length > 1) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
}
