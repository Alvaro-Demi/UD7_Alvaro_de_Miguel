import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RecursoFormComponent } from './components/recurso-form/recurso-form.component';
import { RecursoListComponent } from './components/recurso-list/recurso-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    RecursoFormComponent,
    RecursoListComponent
  ],
  template: `
    <div class="app-container">
      <mat-toolbar class="toolbar">
        <div class="toolbar-content">
          <i class="bi bi-box-seam-fill me-2"></i>
          <span class="toolbar-title">Gestión de Recursos</span>
        </div>
      </mat-toolbar>

      <div class="content-container">
        <app-recurso-form></app-recurso-form>
        <app-recurso-list></app-recurso-list>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: linear-gradient(-45deg, #1a237e, #0d47a1, #01579b, #0277bd, #039be5);
      background-size: 300% 300%;
      animation: gradient 8s ease infinite;
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .toolbar {
      background: rgba(255, 255, 255, 0.1) !important;
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1rem 2rem;
    }

    .toolbar-content {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .toolbar-title {
      color: white !important;
      font-size: 1.5rem;
      font-weight: 500;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      letter-spacing: 0.5px;
    }

    .toolbar i {
      font-size: 1.8rem;
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .content-container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 1rem;
      display: grid;
      gap: 2rem;
      grid-template-columns: 350px 1fr;
    }

    @media (max-width: 1024px) {
      .content-container {
        grid-template-columns: 350px 1fr;
        padding: 0 1rem;
      }
    }

    @media (max-width: 768px) {
      .content-container {
        grid-template-columns: 300px;
        justify-content: center;
        padding: 0 1rem;
      }
    }

    @media (max-width: 480px) {
      .content-container {
        grid-template-columns: 280px;
      }
    }
  `]
})
export class AppComponent {
  title = 'recursos-app';
}
