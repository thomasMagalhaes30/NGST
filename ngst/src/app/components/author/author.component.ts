import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author',
  template: `
<li class="deco-none">
  <img src="{{ githubAvatar }}" height="48" width="48" />
  <span class="m-left ft24 ligthblue">{{ fullName }}</span>
  <a class="ft24 m-left greenyellow" href="https://github.com/{{ githubUsername }}"> {{ githubUsername }} (Github)</a>
</li>
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
