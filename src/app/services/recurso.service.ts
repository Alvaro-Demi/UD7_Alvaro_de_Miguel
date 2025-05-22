import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recurso } from '../models/recurso.interface';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  private recursos: Recurso[] = [];
  private recursosSubject = new BehaviorSubject<Recurso[]>([]);

  constructor() { }

  getRecursos(): Observable<Recurso[]> {
    return this.recursosSubject.asObservable();
  }

  agregarRecurso(recurso: Omit<Recurso, 'id' | 'adquirido'>): void {
    const nuevoRecurso: Recurso = {
      ...recurso,
      id: Date.now(),
      adquirido: false
    };
    this.recursos.push(nuevoRecurso);
    this.recursosSubject.next([...this.recursos]);
  }

  marcarComoAdquirido(id: number): void {
    this.recursos = this.recursos.map(recurso => 
      recurso.id === id ? { ...recurso, adquirido: true } : recurso
    );
    this.recursosSubject.next([...this.recursos]);
  }

  eliminarRecurso(id: number): void {
    this.recursos = this.recursos.filter(recurso => recurso.id !== id);
    this.recursosSubject.next([...this.recursos]);
  }
} 