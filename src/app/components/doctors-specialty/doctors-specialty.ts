import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Especialidad {
  nombre: string;
  descripcion: string;
}

interface Medico {
  nombreCompleto: string;
  nombreCorto: string;
  especialidad: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-doctors-specialty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctors-specialty.html',
  styleUrl: './doctors-specialty.css'
})
export class DoctorsSpecialty {
  especialidades: Especialidad[] = [
    { nombre: 'Terapista', descripcion: 'Profesional enfocado en brindar terapias integrales para mejorar la salud física y mental.' },
    { nombre: 'Fisioterapia', descripcion: 'Especialidad enfocada en la rehabilitación funcional y recuperación de la movilidad a través de medios físicos.' },
    { nombre: 'Terapia Neural', descripcion: 'Técnica de medicina alternativa para equilibrar el sistema nervioso autónomo y tratar dolores crónicos.' },
    { nombre: 'Quiropraxia', descripcion: 'Profesión dedicada al diagnóstico y tratamiento de los trastornos del sistema musculoesquelético y columna vertebral.' },
    { nombre: 'Nutricionista', descripcion: 'Especialistas en la alimentación, nutrición humana y dietética clínica.' },
    { nombre: 'Dietetica Terapeutica', descripcion: 'Elaboración de planes y dietas terapéuticas para diversas patologías y recuperación.' }
  ];

  especialidadSeleccionada: Especialidad | null = null;

  medicos: Medico[] = [
    { nombreCompleto: 'Dr. Carlos Alberto Ruiz', nombreCorto: 'C. Ruiz', especialidad: 'Médico - Terapia Neural', descripcion: 'Especialista en medicina alternativa para dolores crónicos.', imagen: 'resources/doctor.png' },
    { nombreCompleto: 'Dra. Elena Gómez', nombreCorto: 'E. Gómez', especialidad: 'Terapista - Fisioterapia', descripcion: 'Rehabilitación física funcional y recuperación de la movilidad.', imagen: 'resources/doctor.png' },
    { nombreCompleto: 'Dr. Santiago Valencia', nombreCorto: 'S. Valencia', especialidad: 'Terapista - Quiropraxia', descripcion: 'Experto en ajuste vertebral y salud del sistema nervioso.', imagen: 'resources/doctor.png' },
    { nombreCompleto: 'Dra. Martha Lucía Castro', nombreCorto: 'M. Castro', especialidad: 'Médico - Terapia Neural', descripcion: 'Dedicada a la medicina holística para restablecer equilibrio.', imagen: 'resources/doctor.png' },
    { nombreCompleto: 'Dr. Jorge Enrique López', nombreCorto: 'J. López', especialidad: 'Terapista - Fisioterapia', descripcion: 'Fisioterapia deportiva y recuperación muscular.', imagen: 'resources/doctor.png' },
    { nombreCompleto: 'Dra. Sofia Mendez', nombreCorto: 'S. Mendez', especialidad: 'Terapista - Quiropraxia', descripcion: 'Comprometida con aliviar tensiones y mejorar salud postural.', imagen: 'resources/doctor.png' },
    { nombreCompleto: 'Dr. Andrés Felipe', nombreCorto: 'A. Felipe', especialidad: 'Nutricionista', descripcion: 'Nutrición clínica y deportiva para mejorar tu rendimiento.', imagen: 'resources/doctor.png' },
    { nombreCompleto: 'Dra. Laura Camila', nombreCorto: 'L. Camila', especialidad: 'Dietetica Terapeutica', descripcion: 'Especialista en dietas terapéuticas para patologías crónicas.', imagen: 'resources/doctor.png' }
  ];

  seleccionarEspecialidad(esp: Especialidad) {
    this.especialidadSeleccionada = esp;
  }
}
