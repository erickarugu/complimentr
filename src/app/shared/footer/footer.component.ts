import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer is-dark">
    <div class="content has-text-centered">
    <p>
      <strong>Complimentr</strong> by <a href="https://erickarugu32.github.io">Eric Karugu</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
    </p>
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
