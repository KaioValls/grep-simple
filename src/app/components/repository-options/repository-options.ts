import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { Repository } from '../../models/repository';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repository-options',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './repository-options.html',
  styleUrl: './repository-options.scss'
})
export class RepositoryOptions {

     /**
   * Recebe o objeto completo do repositório selecionado, ou nulo.
   */
  @Input() repository: Repository | null = null;

  /**
   * Eventos emitidos para o componente pai executar as ações.
   */
  @Output() openInIDE = new EventEmitter<void>();
  @Output() openTerminal = new EventEmitter<void>();
  @Output() openFolder = new EventEmitter<void>();
}
