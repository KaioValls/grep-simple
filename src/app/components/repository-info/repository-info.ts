import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repository-info',
  imports: [],
  templateUrl: './repository-info.html',
  styleUrl: './repository-info.scss'
})
export class RepositoryInfo {

  @Input() selectedRepository!:any;

}
