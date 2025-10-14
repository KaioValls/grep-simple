import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-repository-list',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './repository-list.html',
  styleUrl: './repository-list.scss',
})
export class RepositoryList implements OnInit {

  @Input() repositoriesList: Repository[] = [];
  @Input() selectedId: string | null = null;

  // @Output() emite um evento para o componente pai
  @Output() onSelect = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('Repositórios recebidos no RepositoryList:', this.repositoriesList);
  }

  // Função para ser chamada no clique do botão
  selectRepository(id: string): void {
    this.onSelect.emit(id);
  }

  // Função trackBy para otimizar o *ngFor, evitando re-renderizações desnecessárias
  trackById(index: number, repo: Repository): string {
    return repo.id;
  }

}
