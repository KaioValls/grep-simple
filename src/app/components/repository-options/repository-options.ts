import { Component, Input } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-repository-options',
  imports: [LucideAngularModule],
  templateUrl: './repository-options.html',
  styleUrl: './repository-options.scss'
})
export class RepositoryOptions {

    @Input() selectedRepository!:any;

}
