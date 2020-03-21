---
pageKey: components-common
title: RU testОбщие компонентны для всех сртраниц
storage:
  - country: США (Washington)
    flag: /img/002-united-states (3).png
  - country: Польща (Chelm)
    flag: /img/poland.png
  - country: Польща (Warsaw)
    flag: /img/poland.png
  - country: Україна (Київ)
    flag: /img/ukraine.png
  - country: Китай (Shanghai)
    flag: /img/001-china 3.png
  - country: Гонконг
    flag: /img/002-united-states (1).png
calculator:
  constituents:
    - category:
        - image: /img/box1.png
          nameCategory: Готовый груз
          price: 0
          default: true
        - image: /img/logistics.png
          nameCategory: Консолидация
          price: 1
        - image: /img/shipping.png
          nameCategory: Консолидация <p>+</p> стандартная проверка
          price: 2
      title: 'Вид складской услуги:'
      canChoose: true
      name: storeServices
    - category:
        - image: /img/plane.png
          nameCategory: Авиадоставка
          price: 11
          default: true
      title: 'Вид отправления:'
      name: typeArrive
    - category:
        - image: /img/shipping1.png
          nameCategory: Курьером в руки
          price: 3
        - image: /img/post-office.png
          nameCategory: В почтомат/ отделение
          price: 2
          default: true
      title: 'Вид доставки:'
      canChoose: true
      name: typeDeliver
    - category:
        - image: /img/box.png
          nameCategory: Доп. упаковка
          price: 2
      title: Дополнительные услуги
      canChoose: true
      name: moreServices
  title: Рассчитайте стоимость доставки
  resultBlock:
    title: Укажите вес посылки
    btnText: Рассчет стоимости
    resultText: Итого стоимость доставки
    note: >-
      Данный расчет является ориентировочным по тарифу Авиадоставки. Точная
      стоимость доставки будет зависеть от веса посылки и полного перечня
      заказанных услуг. Для более детальной информации обратитесь к менеджеру
      компании.
clients:
  - image: /img/image 18.png
  - image: /img/image 19.png
  - image: /img/image 20.png
  - image: /img/image 20 (copy).png
  - image: /img/image 19.png
  - image: /img/image 20.png
  - image: /img/image 20 (copy).png
destinations:
  countries:
    - country: Китай
      flag: /img/001-china 3.png
    - country: Англия
      flag: /img/002-united-states.png
    - country: Италия
      flag: /img/italy.png
    - country: Гонконг
      flag: /img/002-united-states (1).png
    - country: Италия
      flag: /img/italy.png
    - country: США
      flag: /img/002-united-states (3).png
    - country: Германия
      flag: /img/002-united-states (4).png
    - country: Италия
      flag: /img/italy.png
    - country: Индия
      flag: /img/002-united-states (5).png
    - country: Франция
      flag: /img/002-united-states (6).png
      link: /france
    - country: Италия
      flag: /img/italy.png
    - country: Израиль
      flag: /img/002-united-states (7).png
  image: /img/map.png
name: components
locale: ru
reviews:
  - name: Иван Заец
    source:
      name: отзывы Google
      url: 'https://www.google.com'
    text: >-
      Груз пришел 18/10 на склад , 29/10 со мной связался менеджер и уточнил
      куда его отправлять . Был приятно удивлен скоростью. На следующий день
      забрал в отделении, сделали дополнительную упаковку - бесплатно. Ребята ,
      так держать
  - name: Anastasiia
    source:
      name: отзывы Google
      url: 'https://www.google.com/'
    text: >-
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto error
      exercitationem incidunt officia omnis perspiciatis rem sit suscipit
      tenetur voluptatibus! A dignissimos ea facere, fuga maiores, possimus
      praesentium quia repudiandae totam velit veniam veritatis voluptates. Amet
      cupiditate deleniti dolor error, facilis laborum possimus provident quasi
      quo repellendus sequi, tempora, unde?
description: RU Общие компонентны для всех сртраниц
calculateHeader:
    title: Рассчитать стоимость доставки
    description: Отправьте заявку и получите до 5% скидку на доставку для новых клиентов!
    btn: Рассчет стоимости
    from: Откуда груз?
    to: Призначение груза?
    toCountry: Украина
    weight: Вес груза
    phone: Телефон
    email: Email
    comment: Комментарий
---
