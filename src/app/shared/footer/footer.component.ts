import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer is-dark">
    <div class="content has-text-centered">
    <p>
      <strong>Complimentr</strong> by <a href="https://erickarugu32.github.io">DigiTol</a>. The source code is licensed under
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
    </p>
    <a href="https//erickarugu32" title="Github Repository"> <span><i class="fa fa-github"></i>&nbsp;Repo</span></a>
  </div>
</footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
