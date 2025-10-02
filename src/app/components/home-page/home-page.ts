import { Component } from '@angular/core';
import { RepositoryList } from "../repository-list/repository-list";
import { RepositoryInfo } from "../repository-info/repository-info";
import { RepositoryOptions } from "../repository-options/repository-options";
import { TopBar } from "../top-bar/top-bar";

@Component({
  selector: 'app-home-page',
  imports: [RepositoryList, RepositoryInfo, RepositoryOptions, TopBar],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

  repositoriesList:any[] = [];
  selectedRepository!:any;

}
