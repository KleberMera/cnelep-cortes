import { Component, inject } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  readonly srvRest = inject(RestService);
  consultaValue = '';
  consultaTipo = 'IDENTIFICACION';
  loading = false;
  error: string | null = null;
  cuentaContrato: string | null = null;
  cuen: string | null = null;
  direccion: string | null = null;
  horarios: Array<{
    fechaCorte: string;
    horaDesde: string;
    horaHasta: string;
  }> = [];

  // Método de consulta
  async consultar() {
    this.loading = true;
    this.error = null;
    try {
      const resp : any= await this.srvRest
        .getNotificaciones(this.consultaValue, this.consultaTipo.toUpperCase())
        .toPromise();

      if (resp.resp === 'OK' && resp.notificaciones.length > 0) {
        const notificacion = resp.notificaciones[0];

        console.log(resp);
        
        // Actualizar los datos
        this.cuentaContrato = notificacion.cuentaContrato;
        this.cuen = notificacion.cuen;
        this.direccion = notificacion.direccion;
        this.horarios = notificacion.detallePlanificacion;
        this.loading = false;
      }
    } catch (error) {
      console.error('Error al consultar:', error);
      this.loading = false;
    }
  }
}
