import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { RecursoService } from '../../services/recurso.service';
import { Recurso } from '../../models/recurso.interface';

@Component({
  selector: 'app-recurso-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule
  ],
  template: `
    <div class="list-container">
      <h2 class="list-title">Lista de Recursos</h2>
      
      <div class="resources-list">
        <mat-card *ngFor="let recurso of recursos" class="resource-card">
          <mat-card-content>
            <div class="resource-content">
              <div class="resource-info">
                <h3 class="resource-name">{{ recurso.nombre }}</h3>
                <p class="resource-category">Categoría: {{ recurso.categoria }}</p>
                <mat-chip [color]="getPrioridadColor(recurso.prioridad)" selected>
                  {{ recurso.prioridad | titlecase }}
                </mat-chip>
              </div>
              
              <div class="resource-actions">
                <button *ngIf="!recurso.adquirido"
                        class="btn btn-primary me-2"
                        (click)="marcarComoAdquirido(recurso.id)">
                  <i class="bi bi-check-circle me-1"></i>
                  Adquirido
                </button>
                <button *ngIf="recurso.adquirido"
                        class="btn btn-success me-2"
                        disabled>
                  <i class="bi bi-check-circle-fill me-1"></i>
                  Adquirido
                </button>
                <button class="btn btn-danger"
                        (click)="eliminarRecurso(recurso.id)">
                  <i class="bi bi-trash me-1"></i>
                  Eliminar
                </button>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <div *ngIf="recursos.length === 0" class="empty-state">
        <p>No hay recursos agregados aún.</p>
      </div>
    </div>
  `,
  styles: [`
    .list-container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .list-title {
      font-size: 1.5rem;
      font-weight: 500;
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .resources-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .resource-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      transition: box-shadow 0.3s ease;
    }

    .resource-card:hover {
      box-shadow: 0 6px 12px rgba(0,0,0,0.3);
    }

    .resource-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }

    @media (min-width: 640px) {
      .resource-content {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

    .resource-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .resource-name {
      font-size: 1.25rem;
      font-weight: 500;
      color: #1a237e;
      margin: 0;
    }

    .resource-category {
      color: #666;
      margin: 0;
    }

    .resource-actions {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .empty-state {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    .empty-state p {
      color: #666;
      font-size: 1.1rem;
      margin: 0;
    }

    .btn i {
      font-size: 1.1rem;
      vertical-align: middle;
    }
  `]
})
export class RecursoListComponent implements OnInit {
  recursos: Recurso[] = [];

  constructor(private recursoService: RecursoService) {}

  ngOnInit(): void {
    this.recursoService.getRecursos().subscribe(recursos => {
      this.recursos = recursos;
    });
  }

  marcarComoAdquirido(id: number): void {
    this.recursoService.marcarComoAdquirido(id);
  }

  eliminarRecurso(id: number): void {
    this.recursoService.eliminarRecurso(id);
  }

  getPrioridadColor(prioridad: string): 'primary' | 'accent' | 'warn' {
    switch (prioridad) {
      case 'alta':
        return 'warn';
      case 'media':
        return 'accent';
      case 'baja':
        return 'primary';
      default:
        return 'primary';
    }
  }
} 