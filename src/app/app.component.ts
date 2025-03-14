import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Добавляем CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-telegram-app';
  user: any;

  ngOnInit(): void {
    // Проверяем, что Telegram WebApp объект доступен в window
    const telegramWebApp = (window as any)?.Telegram?.WebApp;

    if (telegramWebApp) {
      // Сообщаем Telegram, что наше мини-приложение готово
      telegramWebApp.ready();

      // Считываем данные пользователя
      this.user = telegramWebApp.initDataUnsafe?.user;

      // Выводим данные пользователя в консоль
      console.log('Telegram user:', this.user);
    }
  }
}
