import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sub-nav',
  imports: [
    Button,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sub-nav.layout.html',
  styleUrl: './sub-nav.layout.scss',
})
export class SubNavLayout {}
