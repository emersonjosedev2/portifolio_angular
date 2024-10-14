import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Aqui você pode adicionar lógica de autenticação
      const { username, password } = this.loginForm.value;

      // Suponha que a autenticação foi bem-sucedida
      if (username === 'admin' && password === 'admin') {
        this.router.navigate(['projetos']);
        alert('bem vindo')
      } else {
        alert('Credenciais inválidas');
      }
    }
  }

}
