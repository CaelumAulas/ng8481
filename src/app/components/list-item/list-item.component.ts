import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() destinatario = "";
  @Input() assunto = "";
  @Input() conteudo = "";
  @Input() dataEnvio = "";

  constructor() { }

  ngOnInit() {
  }

}
