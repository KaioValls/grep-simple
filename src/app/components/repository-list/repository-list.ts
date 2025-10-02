import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-repository-list',
  imports: [LucideAngularModule,
    CommonModule
  ],
  templateUrl: './repository-list.html',
  styleUrl: './repository-list.scss'
})
export class RepositoryList {

  @Input() repositoriesList:any[] = [
    {
      repositoryName: 'infra-core',
      repositoryPath: 'C:/Users/kaio.dos.s.valls/Documents/projects/infra-core'
    },
    {
      repositoryName: 'infra-rtb',
      repositoryPath: 'C:/Users/kaio.dos.s.valls/Documents/projects/infra-rtb'
    }
   ];

}
