import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RecursoService } from '../../services/recurso.service';

@Component({
  selector: 'app-recurso-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  template: `
    <mat-card class="form-card">
      <div class="form-header">
        <i class="bi bi-plus-circle-fill header-icon"></i>
        <h2 class="form-title">Agregar Recurso</h2>
      </div>
      
      <mat-card-content>
        <form (ngSubmit)="onSubmit()" class="form-content">
          <div class="form-field-wrapper">
            <mat-form-field appearance="fill" class="form-field">
              <mat-label>Nombre del Recurso</mat-label>
              <input matInput [(ngModel)]="nombre" name="nombre" required placeholder="Ingrese el nombre">
              <i class="bi bi-box-seam field-icon"></i>
            </mat-form-field>
          </div>

          <div class="form-field-wrapper">
            <mat-form-field appearance="fill" class="form-field">
              <mat-label>Categoría</mat-label>
              <input matInput [(ngModel)]="categoria" name="categoria" required placeholder="Ingrese la categoría">
              <i class="bi bi-tags field-icon"></i>
            </mat-form-field>
          </div>

          <div class="form-field-wrapper">
            <mat-form-field appearance="fill" class="form-field">
              <mat-label>Prioridad</mat-label>
              <mat-select [(ngModel)]="prioridad" name="prioridad">
                <mat-option value="alta">Alta</mat-option>
                <mat-option value="media">Media</mat-option>
                <mat-option value="baja">Baja</mat-option>
              </mat-select>
              <i class="bi bi-flag field-icon"></i>
            </mat-form-field>
          </div>

          <button type="submit" class="btn btn-primary submit-button">
            <i class="bi bi-plus-circle me-2"></i>
            Agregar Recurso
          </button>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .form-card {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
      overflow: hidden;
    }

    .form-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    }

    .form-header {
      background: linear-gradient(135deg, #0d6efd, #0a58ca);
      padding: 1.5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .form-header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1));
      z-index: 1;
    }

    .header-icon {
      font-size: 2rem;
      color: white;
      margin-bottom: 0.5rem;
      display: block;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }

    .form-title {
      color: white;
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
      position: relative;
      z-index: 2;
    }

    .form-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 2rem;
    }

    .form-field-wrapper {
      position: relative;
      width: 100%;
    }

    .form-field {
      width: 100%;
    }

    .field-icon {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: #0d6efd;
      font-size: 1.2rem;
      pointer-events: none;
      z-index: 1;
    }

    .form-field ::ng-deep .mat-mdc-text-field-wrapper {
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 8px;
      transition: all 0.3s ease;
      padding: 0 12px;
    }

    .form-field ::ng-deep .mat-mdc-form-field-flex {
      padding: 0;
    }

    .form-field ::ng-deep .mat-mdc-form-field-infix {
      padding: 12px 0;
      min-height: 48px;
      width: auto;
    }

    .form-field ::ng-deep .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
      top: 24px;
    }

    .form-field ::ng-deep input.mat-mdc-input-element {
      width: 100%;
    }

    .form-field ::ng-deep .mat-mdc-form-field.mat-focused .mat-mdc-text-field-wrapper {
      background-color: white;
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.2);
    }

    .form-field ::ng-deep .mat-mdc-select-value {
      padding-right: 24px;
    }

    .form-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {
      display: none;
    }

    .form-field ::ng-deep .mat-mdc-form-field-bottom-align {
      display: none;
    }

    .form-field ::ng-deep .mat-mdc-form-field-underline {
      display: none;
    }

    .form-field ::ng-deep .mat-mdc-form-field-infix::before {
      display: none;
    }

    .form-field ::ng-deep .mat-mdc-form-field-infix::after {
      display: none;
    }

    .submit-button {
      margin-top: 1rem;
      padding: 0.8rem;
      font-size: 1.1rem;
      font-weight: 500;
      border-radius: 8px;
      transition: all 0.3s ease;
      background: linear-gradient(135deg, #0d6efd, #0a58ca);
      border: none;
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.2);
    }

    .submit-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(13, 110, 253, 0.3);
    }

    .submit-button i {
      font-size: 1.2rem;
      vertical-align: middle;
    }

    @media (max-width: 768px) {
      .form-content {
        padding: 1.5rem;
      }
    }
  `]
})
export class RecursoFormComponent {
  nombre: string = '';
  categoria: string = '';
  prioridad: 'alta' | 'media' | 'baja' = 'media';

  constructor(private recursoService: RecursoService) {}

  onSubmit(): void {
    if (this.nombre && this.categoria) {
      this.recursoService.agregarRecurso({
        nombre: this.nombre,
        categoria: this.categoria,
        prioridad: this.prioridad
      });
      this.resetForm();
    }
  }

  private resetForm(): void {
    this.nombre = '';
    this.categoria = '';
    this.prioridad = 'media';
  }
} 