import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repository-list',
  imports: [],
  templateUrl: './repository-list.html',
  styleUrl: './repository-list.scss'
})
export class RepositoryList {

  @Input() repositoriesList:any[] = [ ];

}
