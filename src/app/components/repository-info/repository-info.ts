import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-repository-info',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './repository-info.html',
  styleUrl: './repository-info.scss'
})
export class RepositoryInfo {

  @Input() selectedRepository!:any;
  commitHystory:any[] = [
    {message: 'fix(payment): handle null pointer', author: 'Kaio', date: '2025-09-18'},
    {message: 'feat(api): add retry', author: 'Kaio', date: '2025-09-18'}
  ];

  gitChangeList:any[] = [
    {path: 'src/main/java/com/example/PaymentProcessor.java', type: 'Java', status: 'modified'},
    {path: 'src/main/resources/application.yml', type: 'YAML', status: 'added'},
    {path: 'src/test/java/com/example/PaymentProcessorTest.java', type: 'Java', status: 'modified'},
  ];
}
