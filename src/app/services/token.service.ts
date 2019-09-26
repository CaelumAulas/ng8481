import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenKeyName = 'cmail-token';

  gravar(token: string): void {
    localStorage.setItem(this.tokenKeyName, token);
  }

  obter(): string {
    return localStorage.getItem(this.tokenKeyName);
  }

  apagar(): void {
    localStorage.removeItem(this.tokenKeyName);
  }

}
