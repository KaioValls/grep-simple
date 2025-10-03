import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-repository-list',
  imports: [LucideAngularModule,
    CommonModule
  ],
  templateUrl: './repository-list.html',
  styleUrl: './repository-list.scss'
})
export class RepositoryList {

  @Input() repositoriesList: Repository[] = [];
  @Input() selectedId: string | null = null;

  // @Output() emite um evento para o componente pai
  @Output() onSelect = new EventEmitter<string>();

  // Função para ser chamada no clique do botão
  selectRepository(id: string): void {
    this.onSelect.emit(id);
  }

  // Função trackBy para otimizar o *ngFor, evitando re-renderizações desnecessárias
  trackById(index: number, repo: Repository): string {
    return repo.id;
  }

}
