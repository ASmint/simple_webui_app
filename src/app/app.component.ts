import { Component, OnInit } from '@angular/core';
import { TasksService } from './common/services/tasks.service';
import { Tasks } from './common/models/tasks.model';

@Component({
  selector: 'webui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'webui';
  tasks: Tasks[];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {

    const requestData = {
      ['ТекстЗапроса'] : 'ВЫБРАТЬ ПЕРВЫЕ 10 Задача.Номер КАК CCAR, Задача.Задание КАК Task, Задача.Исполнитель.ИмяРусское '+
                          ' КАК Developer ИЗ Документ.Задача КАК Задача УПОРЯДОЧИТЬ ПО Номер УБЫВ',
      ['ПараметрыЗапроса'] : new Array()
    }
    this.tasksService.postTasks(JSON.stringify(requestData)).subscribe(result => {
        console.log(result);
        this.tasks = result['Результат'];
    });
  }

}
