import { Tarefa, TarefaService } from './../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css'],
})
export class ListarTarefaComponent implements OnInit {
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    // this.tarefas = [
    //   new Tarefa(1, 'tarefa 1', false),
    //   new Tarefa(2, 'tarefa 2', true),
    // ];
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }
}
