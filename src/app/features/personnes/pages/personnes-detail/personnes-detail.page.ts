import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../../../../shared/model/personnes.model';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-personnes-detail',
  standalone: true,
  imports: [Button, RouterLink],
  templateUrl: './personnes-detail.page.html',
})
export class PersonnesDetailPage implements OnInit {
  @Input() personne!: Personne;

  ngOnInit() {
    console.log('Données de la personne reçues :', this.personne);
  }
}
