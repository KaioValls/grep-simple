import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repository-options',
  imports: [],
  templateUrl: './repository-options.html',
  styleUrl: './repository-options.scss'
})
export class RepositoryOptions {

    @Input() selectedRepository!:any;

}
