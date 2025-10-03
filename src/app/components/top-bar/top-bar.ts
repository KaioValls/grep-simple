import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-top-bar',
  imports: [LucideAngularModule],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss'
})
export class TopBar {

  @Input() rootDirectory: string = 'N/D';

  /**
   * Evento emitido quando o botão 'Alterar' é clicado.
   * O componente pai deve escutar este evento para abrir um seletor de diretório, por exemplo.
   */
  @Output() changeDirectory = new EventEmitter<void>();

  /**
   * Evento emitido quando o botão 'Escanear Agora' é clicado.
   * O componente pai deve escutar este evento para iniciar o processo de escaneamento.
   */
  @Output() scanNow = new EventEmitter<void>();
}
