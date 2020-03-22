---
pageKey: components-common
title: Общие компонентны для всех страниц
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
  title: Розрахувати вартість доставки
  resultBlock:
    title: Вага вантажу
    btnText: Розрахунок вартості
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
    - country: Туреччина
      flag: /img/218-turkey.png
      link: dostavka-vantazhiv-z-turtsii/
    - country: Німеччина
      flag: /img/162-germany.png
      link: dostavka-z-nimechchyinyi/
    - country: 'Франція '
      flag: /img/195-france.png
      link: dostavka-z-franzii/
    - country: 'Англія '
      flag: /img/260-united-kingdom.png
      link: 'dostavka-z-anglii/  '
    - country: 'Італія  '
      flag: /img/013-italy.png
      link: dostavka-z-italii/
    - country: Португалія
      flag: /img/224-portugal.png
      link: dostavka-z-portugalii/
    - country: Іспанія
      flag: /img/128-spain.png
      link: 'dostavka-z-ispanii/ '
    - country: 'Чехія  '
      flag: /img/149-czech-republic.png
      link: dostavka-z-chehii/
    - country: Індія
      flag: /img/246-india.png
      link: dostavka-z-indii-v-ukrainu/
    - country: Ізраїль
      flag: /img/155-israel.png
      link: dostavka-z-izrailyu-v-ukrainu/
    - country: Тайвань
      flag: /img/italy.png
      link: dostavka-z-tayvanyu/
    - country: ОАЕ
      flag: /img/002-united-states (7).png
      link: dostavka-z-oae/
  image: /img/map.png
name: components
calculateHeader:
  from: Откуда груз?
  phone: Телефон
  title: Рассчитать стоимость доставки
  weight: Вес груза
  to: Призначение груза?
  btn: Рассчет стоимости
  email: Email
  description: Отправьте заявку и получите до 5% скидку на доставку для новых клиентов!
  comment: Комментари
locale: ua
description: Общие компонентны для всех сртраниц
---
