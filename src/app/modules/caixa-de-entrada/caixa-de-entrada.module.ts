import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CaixaDeEntradaComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule
  ],
  exports: [CaixaDeEntradaComponent]
})
export class CaixaDeEntradaModule { }
