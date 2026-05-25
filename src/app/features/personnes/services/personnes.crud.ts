import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Personne } from '../../../shared/model/personnes.model';


@Injectable({
  providedIn: 'root',
})
export class PersonnesCrud {
  readonly #http: HttpClient = inject(HttpClient);
  personnesSignal = signal<Personne[]>([]);
  baseUrl: string = 'http://localhost:8081';

  getPersonnes() {
    this.#http.get<Personne[]>('/data/personnes.json').subscribe({
      next: (data) => this.personnesSignal.set(data),
      error: (err) => console.error('Erreur lors du chargement du JSON', err),
    });
  }

  getPersonnesById(id: string): Observable<Personne | undefined> {
    return this.#http.get<Personne[]>('/data/personnes.json').pipe(
      map((toutesLesPersonnes: Personne[]) => {
        // On cherche la personne dont l'ID correspond à celui de l'URL
        return toutesLesPersonnes.find(p => String(p.id) === id);
      }),
    );
  }
}
