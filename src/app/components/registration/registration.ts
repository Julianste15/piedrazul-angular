import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Toastify from 'toastify-js';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {
  registroForm: FormGroup;
  formIntentado = false;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.maxLength(50)]],
      apellidos: ['', [Validators.required, Validators.maxLength(50)]],
      correo: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      genero: ['', [Validators.required]],
      terminos: [false, [Validators.requiredTrue]]
    });
  }

  mostrarMensajeExito(mensaje: string) {
    // @ts-ignore
    Toastify({
        text: mensaje || "✅ ¡Registro exitoso!",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "rgba(0, 128, 0, 0.8)",
            color: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            padding: "12px 20px"
        },
        stopOnFocus: true,
    }).showToast();
  }

  registrarUsuario() {
    this.formIntentado = true;
    
    if (this.registroForm.valid) {
      this.mostrarMensajeExito("✅ Usuario registrado con éxito. Se enviará confirmación a su correo.");
      this.registroForm.reset();
      this.formIntentado = false;
    } else {
      // Marcar todos los campos como touched para que muestren su error visual y se aplique a bootstrap.
      Object.keys(this.registroForm.controls).forEach(key => {
        const control = this.registroForm.get(key);
        control?.markAsTouched();
      });
      alert('Por favor, complete correctamente los campos obligatorios del formulario.');
    }
  }
}
