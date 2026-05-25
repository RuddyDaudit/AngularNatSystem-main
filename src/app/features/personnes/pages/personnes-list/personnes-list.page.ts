import { Component, inject } from '@angular/core';
import { PersonnesCrud } from '../../services/personnes.crud';
import { Button } from "primeng/button";
import { DialogModule } from 'primeng/dialog';
import { Table, TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-personnes-list',
  imports: [Button, DialogModule, TableModule, RouterLink, CurrencyPipe],
  templateUrl: './personnes-list.page.html',
  styleUrl: './personnes-list.page.scss',
  standalone: true,
})
export class PersonnesListPage {
  readonly #personnesCrud: PersonnesCrud = inject(PersonnesCrud);
  isDialogVisiblie = false;

  addPersonne(): void {
    this.isDialogVisiblie = true;
  }
  protected personnesCrud = inject(PersonnesCrud);

  ngOnInit(): void {
    this.personnesCrud.getPersonnes();
  }
}
