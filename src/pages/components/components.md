---
pageKey: components-common
name: components
locale: ua
title:  UaОбщие компонентны для всех страниц
warehouses: 
    title: Наши склади
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
        address: <p>ul. Chałubińskiego 8</p> <p>Oxford Tower, 29 pietro</p>
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
  from: Откуда груз?
  phone: Телефон
  title: Рассчитать стоимость доставки
  weight: Вес груза
  toCountry: Украина
  to: Призначение груза?
  btn: Рассчет стоимости
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
cargo:
    title: Возможности доставки грузов
    list:
       - title: Контейнерные перевозки
         svg: <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 38.438v5.624h-3.75v-5.624H4.687v18.75h16.875v-18.75H15zM31.875 38.438v5.624h-3.75v-5.624h-6.563v18.75h16.875v-18.75h-6.562zM48.75 38.438v5.624H45v-5.624h-6.563v18.75h16.876v-18.75H48.75zM23.438 19.688v5.625h-3.75v-5.625h-6.563v18.75H30v-18.75h-6.563zM40.313 19.688v5.625h-3.75v-5.625H30v18.75h16.875v-18.75h-6.563z" fill="var(--color-1)"/><path d="M31.875 2.813v3.75h-3.75v-3.75h-6.563v16.875H38.438V2.813h-6.562z" fill="var(--color-1)"/><path d="M9.375 53.438H7.5a.938.938 0 000 1.874h1.875a.938.938 0 000-1.874zM9.375 50.625H7.5a.938.938 0 000 1.875h1.875a.938.938 0 000-1.875zM26.25 53.438h-1.875a.938.938 0 000 1.874h1.875a.938.938 0 000-1.874zM26.25 50.625h-1.875a.938.938 0 000 1.875h1.875a.938.938 0 000-1.875zM43.125 53.438H41.25a.938.938 0 000 1.874h1.875a.938.938 0 000-1.874zM43.125 50.625H41.25a.938.938 0 000 1.875h1.875a.938.938 0 000-1.875z" fill="var(--color-2)"/><path d="M55.313 37.5h-7.5V19.687a.938.938 0 00-.938-.937h-7.5V2.812a.938.938 0 00-.938-.937H21.564a.937.937 0 00-.938.938V18.75h-7.5a.938.938 0 00-.938.938V37.5h-7.5a.938.938 0 00-.937.938v18.75a.937.937 0 00.938.937h50.624a.938.938 0 00.938-.938v-18.75a.938.938 0 00-.938-.937zm-9.376 1.875h1.876v3.75h-1.876v-3.75zm0-1.875h-15V20.625h4.688v4.688a.938.938 0 00.938.937h3.75a.938.938 0 00.937-.938v-4.687h4.688V37.5zm-16.874 1.875h1.875v3.75h-1.875v-3.75zm10.312-18.75v3.75H37.5v-3.75h1.875zM30.937 3.75v1.875h-1.875V3.75h1.875zm-8.437 0h4.688v2.813a.938.938 0 00.937.937h3.75a.937.937 0 00.938-.938V3.75H37.5v15h-15v-15zm0 16.875v3.75h-1.875v-3.75H22.5zm-8.438 0h4.688v4.688a.938.938 0 00.938.937h3.75a.938.938 0 00.937-.938v-4.687h4.688V37.5h-15V20.625zm0 18.75v3.75h-1.874v-3.75h1.874zm-8.437 0h4.688v4.688a.938.938 0 00.937.937H15a.938.938 0 00.938-.938v-4.687h4.687V56.25h-15V39.375zm16.875 0h4.688v4.688a.938.938 0 00.937.937h3.75a.938.938 0 00.938-.938v-4.687H37.5V56.25h-15V39.375zM54.375 56.25h-15V39.375h4.688v4.688A.938.938 0 0045 45h3.75a.938.938 0 00.938-.938v-4.687h4.687V56.25z" fill="var(--color-2)"/><path d="M15.938 36.563h1.874a.938.938 0 000-1.876h-1.875a.938.938 0 000 1.876zM15.938 33.75h1.874a.938.938 0 000-1.875h-1.875a.938.938 0 000 1.875zM34.688 34.688h-1.876a.938.938 0 000 1.874h1.876a.938.938 0 000-1.874zM34.688 31.875h-1.876a.938.938 0 000 1.875h1.876a.938.938 0 000-1.875zM24.375 15h1.875a.938.938 0 000-1.875h-1.875a.938.938 0 000 1.875zM24.375 17.813h1.875a.938.938 0 000-1.875h-1.875a.938.938 0 000 1.874z" fill="var(--color-2)"/></svg>    
---
