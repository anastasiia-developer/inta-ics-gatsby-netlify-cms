---
pageKey: components-common
locale: ru
title: RU testОбщие компонентны для всех сртраниц
warehouses:
  title: Наши склади
  list:
    - country: США
      city: (New Jersey)
      flag: /img/002-united-states (3).png
      postIndex: '999077'
      address: >-
        <p>RM Q, Floor 10, Houston Industrial Building,</p> <p>32-40 Wang Lung
        street, </p> <p>Tsuen Wan NT</p>
      phone: +852 94670135
      image: /img/Rectangle 121.png
      images:
        - image: /img/Rectangle 121.png
    - country: Польша
      city: (Piaseczno)
      flag: /img/poland.png
    - country: Польша
      city: (Warsaw)
      flag: /img/poland.png
      postIndex: 00-613
      address: '<p>ul. Chałubińskiego 8</p> <p>Oxford Tower, 29 pietro</p>'
      image: /img/store1.png
      images:
        - image: /img/store1.png
    - country: Украина
      flag: /img/ukraine.png
      city: (Киев)
      postIndex: '03141'
      address: <p>ул. Линейная 17 </p> <p>БЦ “FIM”</p>
      phone: +38 (068) 5555 999
      image: /img/storeContact.png
      images:
        - image: /img/storeContact.png
        - image: /img/Rectangle 121.png
        - image: /img/Rectangle 121.png
        - image: /img/Rectangle 121.png
        - image: /img/Rectangle 121.png
    - country: Китай
      flag: /img/001-china 3.png
      city: (Shanghai)
      postIndex: '528248'
      address: >-
        <p>Warehouse No. 67-70, C4 Building,</p>  <p>Dumhao Logistics Storage
        Base, </p> <p>Huangpu Construction Road, Dali Town, </p> <p>Nanhai
        District, Foshan City. </p>
      phone: +86 188 2991 5259
      image: /img/storeqqqq.png
      images:
        - image: /img/storeqqqq.png
    - country: Гонконг
      flag: /img/002-united-states (1).png
      postIndex: '999077'
      address: >-
        <p>RM Q, Floor 10, Houston Industrial Building,</p> <p>32-40 Wang Lung
        street, </p> <p>Tsuen Wan NT</p>
      phone: +852 94670135
      image: /img/Rectangle 121.png
      images:
        - image: /img/Rectangle 121.png
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
  title: Наши клиенты
  list:
    - image: /img/image 18.png
    - image: /img/image 19.png
    - image: /img/image 20.png
    - image: /img/image 20 (copy).png
    - image: /img/image 19.png
    - image: /img/image 20.png
    - image: /img/image 20 (copy).png
destinations:
  title: Международные грузоперевозки
  countries:
    - country: 'Турция '
      flag: /img/218-turkey.png
      link: dostavka-gruzov-iz-turtsii
    - country: Германия
      flag: /img/162-germany.png
      link: dostavka-iz-germanii
    - country: 'Франция '
      flag: /img/195-france.png
      link: dostavka-iz-franzii
    - country: 'Англия '
      flag: /img/260-united-kingdom.png
      link: dostavka-iz-anglii
    - country: Италия
      flag: /img/013-italy.png
      link: dostavka-iz-italii
    - country: 'Португалия  '
      flag: /img/224-portugal.png
      link: dostavka-iz-portugalii
    - country: 'Чехия  '
      flag: /img/149-czech-republic.png
      link: dostavka-iz-chehii
    - country: 'Испания  '
      flag: /img/128-spain.png
      link: dostavka-iz-ispanii
    - country: Индия
      flag: /img/246-india.png
      link: dostavka-iz-indii-v-ukrainu
    - country: 'Израиль  '
      flag: /img/155-israel.png
      link: dostavka-iz-izrailya-v-ukrainu
    - country: 'Тайвань '
      flag: /img/202-taiwan.png
      link: dostavka-iz-tayvanya
    - country: 'ОАЭ '
      flag: /img/151-united-arab-emirates.png
      link: dostavka-iz-oae
  image: /img/map.png
calculateHeader:
  from: Откуда груз?
  phone: Телефон
  title: Рассчитать стоимость доставки
  weight: Вес груза
  toCountry: Украина
  to: Куда?
  btn: Расчет стоимости
  email: Email
  description: Отправьте заявку и получите до 5% скидку на доставку для новых клиентов!
  comment: Комментарий
mainPopup:
  title: Организуем прозрачную и понятную доставку.
  description: Закажите консультацию прямо сейчас!
  subTitle: Или оставьте номер и мы вам перезвоним
  btn: Отправить
popupThanks:
  title: 'Спасибо, за Вашу заявку!'
  subTitle: В контакт-центре уже идет борьба за такого замечательного клиента как Вы!
  description: В ближайшее время с Вами свяжется менеджер.
  bonus: И ЕЩЕ ОДИН ПРИЯТНЫЙ БОНУС!
  bonusTitle: >-
    Как быстро продать импортируемый товар и **повысить количество клиентов на
    76%**
  btn: Читать
  btnLink: 2020-02-06-украина-привлекательный-рынок-для-китая
  image: /img/popupImage.jpg
footer:
  description: 'Доставка сборных грузов и контейнеров из Китая, Сша в Украину.'
  storeName: Мобильное приложение
  navCollection:
    - nav:
        - name: Доставка
          link: /
        - name: Услуги
          link: /
        - name: О компании
          link: /
        - name: Блог
          link: /
        - name: Помощь
          link: /
        - name: Контакты
          link: /
    - nav:
        - name: Авиадоставка из Китая
          link: /
        - name: Дополнительная переупаковка товара
          link: /
        - name: Доставка из США
          link: /
        - name: Проверка производителя
          link: /
        - name: Доставка из Европы
          link: /
    - nav:
        - name: Выкуп товаров
          link: /
        - name: Доставка из Польши
          link: /
        - name: Доставка морем из Китая
          link: /
        - name: Доставка морем из Китая
          link: /
        - name: Доставка Китай-Одесса
          link: /
    - nav:
        - name: Поиск поставщиков в Китае
          link: /
        - name: Таможенное оформление грузов
          link: /
        - name: Доставка из Польши
          link: /
formFooter:
    title: Остались вопросы?
    subTitle: Отправьте заявку и получите до 5% скидку на доставку для новых клиентов!
    description: <span className="blue">Есть вопрос? </span>Наш менеджер ответит вам за<span className="blue"> 15 минут</span>         
    descriptionTwo: Отправьте заявку и получите до 5% скидку на доставку для новых клиентов! 
    form:
        name: Имя
        phone: Телефон 
        comment: Комментарий
        btn: Отправить          
news:
  title: Новости
  btn: Читать все новости
ourServices:
  title: Наши услуги
  list:
    - title: Проведение платежей
      svg: shopping
      link: oplata-postavschiku-v-kitae
    - title: Поиск поставщика
      svg: search
      link: poisk-postavschika-v-kitae
    - title: Заказ товара из Китая
      svg: delivery
      link: dostavka-tovarov-iz-kitaya
    - title: Таможенное оформление груза
      svg: clipboard
      link: raztamozhka
    - title: Складские услуги
      svg: warehouse
      link: skladskie-uslugi
name: components
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
cargo:
  title: Возможности доставки грузов
  list:
    - title: 'Контейнерные перевозки '
      svg: storage
      link: konteynernyie-perevozki
    - title: Карго доставка
      svg: package
      link: cargo
    - title: Доставка товаров
      svg: trolley
      link: dostavka-tovarov-iz-kitaya
    - title: 'Перевозка сборных грузов '
      svg: ship
      link: perevozki-sbornyih-gruzov
    - title: 'Международная доставка посылок '
      svg: airplane
      link: dostavka-tovarov-i-posyilok-iz-evropyi
    - title: Мультимодальные перевозки
      svg: packages
      link: multimodalnye-gruzoperevozki
    - title: Перевозка негабаритных грузов
      svg: product
      link: perevozki-negabaritnyih-gruzov
    - title: Доставка станков и оборудования
      svg: trolleybig
      link: dostavka-oborudovaniya
    - title: Доставка из Китая в Одессу
      svg: warehouse
      link: dostavka-iz-kitaya-v-odessu
---
