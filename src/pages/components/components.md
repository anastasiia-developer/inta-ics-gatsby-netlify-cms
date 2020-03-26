---
pageKey: components-common
locale: ua
title: UaОбщие компонентны для всех страницппhgghjghggh
warehouses:
  title: Наші склади
  list:
    - country: США
      city: (Washington)
      flag: /img/002-united-states (3).png
      postIndex: '999077'
      address: >-
        <p>RM Q, Floor 10, Houston Industrial Building,</p> <p>32-40 Wang Lung
        street, </p> <p>Tsuen Wan NT</p>
      phone: +852 94670135
      image: /img/Rectangle 121.png
      images:
        - image: /img/Rectangle 121.png
    - country: Польща
      city: (Chelm)
      flag: /img/poland.png
    - country: Польща
      city: (Warsaw)
      flag: /img/poland.png
      postIndex: 00-613
      address: '<p>ul. Chałubińskiego 8</p> <p>Oxford Tower, 29 pietro</p>'
      image: /img/store1.png
      images:
        - image: /img/store1.png
    - country: Україна
      flag: /img/ukraine.png
      city: (Київ)
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
  title: Розрахувати вартість доставки
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
  title: Наши клиенти
  list:
    - image: /img/image 18.png
    - image: /img/image 19.png
    - image: /img/image 20.png
    - image: /img/image 20 (copy).png
    - image: /img/image 19.png
    - image: /img/image 20.png
    - image: /img/image 20 (copy).png
destinations:
  title: Міжнародні вантажоперевезення
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
      flag: /img/202-taiwan.png
      link: dostavka-z-tayvanyu/
    - country: ОАЕ
      flag: /img/151-united-arab-emirates.png
      link: dostavka-z-oae/
  image: /img/map.png
calculateHeader:
  from: Звідки вантаж?
  phone: Телефон
  title: Розрахувати вартість доставки
  weight: Вага вантажу
  toCountry: Україна
  to: Куди?
  btn: Розрахунок вартості
  email: Email
  description: Надішліть запит та отримаєте 5% знижку на доставку для нових клієнтів!
  comment: Коментар
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
  description: 'UAДоставка сборных грузов и контейнеров из Китая, Сша в Украину.'
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
news:
  title: Новини
  btn: Читать все новости
ourServices:
  title: Наші послуги
  list:
    - title: 'Проведення платежів '
      svg: shopping
      link: oplata-postachalnyiku-v-kyitai/
    - title: Пошук постачальника
      svg: search
      link: poshuk-postachalnyikiv-v-kyitai/
    - title: 'Замовлення товару з Китаю '
      svg: delivery
      link: dostavka-tovariv-z-kytaju/
    - title: Митне оформлення вантажу
      svg: clipboard
      link: rozmyitnennya/
    - title: Складські послуги
      svg: warehouse
      link: 'skladski-poslugyi/ '
name: components
cargo:
  title: Можливості доставки вантажів
  list:
    - title: Контейнерні перевезення
      svg: storage
      link: konteynerni-vantazhoperevezennya/
    - title: Карго доставка
      svg: package
      link: cargo/
    - title: Доставка товарів
      svg: trolley
      link: dostavka-tovariv-z-kytaju/
    - title: Перевезення збірних вантажів
      svg: ship
      link: 'perevezennya-zbirnyih-vantazhiv/ '
    - title: Міжнародна доставка посилок
      svg: airplane
      link: dostavka-tovariv-z-evropyi/
    - title: Мультимодальні перевезення
      svg: packages
      link: multimodalni-vantazhoperevezennya/
    - title: Перевезення негабаритних вантажів
      svg: product
      link: perevezennya-negabaryitnyih-vantazhiv/
    - title: Доставка обладнання
      svg: protected
      link: dostavka-obladnannya/
    - title: Доставка з Китаю в Одесу
      svg: warehouse
      link: dostavka-z-kyitayu-v-odesu/
---
