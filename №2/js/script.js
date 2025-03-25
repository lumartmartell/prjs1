"use strict";

let surname = prompt("Пожалуйста, введите вашу Фамилию:");
let name = prompt("Пожалуйста, введите ваше Имя:");
let patronymic = prompt("Пожалуйста, введите ваше Отчество:");

let isTrue = confirm(`Ваше ФИО: ${surname} ${name} ${patronymic}, Верно?`);

alert(isTrue);