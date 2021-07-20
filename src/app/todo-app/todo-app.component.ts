import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
})
export class TodoAppComponent implements AfterViewInit {
  inputValue: string = 'Learn Angular';
  todos: string[] = [];

  @ViewChild('inputTodo')
  input!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    this.input.nativeElement.focus();
    console.log('onAfterViewInit');
  }

  onClick() {
    if (this.input.nativeElement.value) {
      this.todos.push(this.input.nativeElement.value);
      this.input.nativeElement.value = '';
    }
  }
}
