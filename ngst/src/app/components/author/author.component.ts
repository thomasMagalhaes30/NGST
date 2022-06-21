import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author',
  template: `
<div class="author ion-padding-bottom">
  <img src="{{ githubAvatar }}" class="github-avatar"/>
  <div class="text-avatar ion-padding-start">
    <span class="ion-padding-end full-name-author">{{ fullName }}</span>
    <a href="https://github.com/{{ githubUsername }}" target="_blank">
    <ion-icon name="logo-github" size="large"></ion-icon>
    </a>
  </div>
</div>
`,
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {

  @Input()
  public githubUsername : string;

  @Input()
  public fullName : string;

  @Input()
  public githubAvatar : string;

  constructor() { }

  ngOnInit() {}

}
