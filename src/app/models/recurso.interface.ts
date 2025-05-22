export interface Recurso {
  id: number;
  nombre: string;
  categoria: string;
  prioridad: 'alta' | 'media' | 'baja';
  adquirido: boolean;
} 