import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products : ProductModel[] = [
    {
      id : 1,
      name : "Паро-\nочиститель atreon DFHS-01",
      description : "Пароочиститель Atreon 3 в 1 — мощная уборка без химии! Универсальный помощник для дома: Пароочиститель. Отпариватель. Стеклоочиститель Подходит для полов, мебели, кухни, плитки, духовки, одежды, авто и сантехники. Комплектация: Сам прибор Atreon 8 насадок: Для стекол и зеркал Мягкая круглая щетка Скребок - насадка Угловая трубка Щетка с мягкой щетиной Прямая насадка Металлическая щетка Насадка для швов и углов Удлинённый шланг Тканевая насадка Технические характеристики: Температура пара: до 140 C Мощность: 1800 Вт Объём резервуара: 330 мл Давление пара: 4. 5 бар Время нагрева: всего 15 секунд Длина шланга: 110 см Убивает до 99. 9% бактерий без использования химии! Почему выбирают Atreon: Высокое давление и температура Мгновенный старт (15 сек) Удобный LED - дисплей и выбор режима Эргономичный дизайн, лёгкий и компактный. Результат до/после: Отчищает плитку, ванны, духовки, рубашки, диваны и полы. Освежает текстиль и убирает плесень, жир, налёт и грязь Остерегайтесь подделок! Только оригинальный Atreon даёт заявленный результат.",

      price : 29900,
      rating : 5,
      image : "",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/pd7/p7b/97012559.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p30/p6e/97012555.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pfc/p0c/59895566.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/paroochistitel-atreon-dfhs-01-belyi-chernyi-142540734/?c=750000000",
      category : "Малая техника для дома",
      likes : 4
    },
    {
      id : 2,
      name : "Пылесос AINOMI A1",
      description : "AINOMI A1 Premium Power — это современный вертикальный беспроводной пылесос с мощностью 400 Вт, созданный для идеальной уборки любых поверхностей. Благодаря аккумулятору нового поколения Li-ion (3.7 В, 2200 мАч × 7) пылесос работает до 50 минут в эко-режиме, до 30 минут в среднем режиме и до 15 минут в турбо-режиме, а гарантия на 1000 циклов перезарядки обеспечивает долговечность устройства. Мощная V-образная турбощетка с собственным мотором и подсветкой легко справляется с шерстью, волосами и крупным мусором, обеспечивая глубокую очистку ковров, ламината и других типов покрытий. Сенсорный смарт-дисплей показывает режим мощности, уровень заряда, наличие засора или запутывания щетки, что делает процесс уборки максимально удобным и понятным. Маневренная конструкция с подсветкой позволяет легко убирать под мебелью и в труднодоступных местах, не оставляя ни одного пропущенного угла. Пылесос оснащен системой 5-ступенчатой фильтрации HEPA, которая удерживает мельчайшие частицы пыли и аллергены, делая воздух в доме чище и безопаснее. Удобная настенная станция обеспечивает компактное хранение и быструю зарядку устройства, а аккумулятор можно заряжать отдельно. Очистка контейнера для пыли объемом 0,6 л выполняется одним нажатием, что экономит время и силы. AINOMI A1 Premium Power сертифицирован по стандартам ЕАС, поставляется в стильной подарочной упаковке и станет отличным выбором для тех, кто ищет мощный, надежный и современный аккумуляторный пылесос для дома с животными и без, обеспечивающий эффективную уборку и комфортное использование каждый день.",

      price : 79990,
      rating : 4.5,
      image : "",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p69/pd2/87533453.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pc2/p78/80690959.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p87/p69/62456898.jpeg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/ainomi-a1-premium-power-chernyi-mokryi-asfal-t-137712147/?c=750000000",
      category : "Малая техника для дома",
      likes : 4
    },
    {
      id : 3,
      name : "Электро-\nчайник Merlin",
      description : "Электрочайник Merlin KE-1309DTX — свежесть цвета, комфорт в деталях. Эффектный дизайн, высокая мощность и продуманная безопасность — чайник, который радует глаз и делает утро удобным. Преимущества: Яркий зелёный цвет — стильный акцент в интерьере. Объём 1.7 литра — оптимально для семьи или офиса. Мощность 2200 Вт — быстрое закипание воды. Материал корпуса — нержавеющая сталь с глянцевым покрытием. Термометр нагрева — следите за температурой воды с помощью аналогового индикатора. Поворотное основание 360° — ставьте чайник как удобно. Шкала уровня воды — контролируйте объём наполнения. Съёмная крышка — легко наливать и очищать. Контактная группа STRIX® — британское качество и долговечность. Merlin KE-1309DTX — это не просто чайник, а удобство и эстетика в каждой детали. Поставляется в фирменной упаковке — отлично подойдёт и как подарок.",

      price : 17990,
      rating : 4,
      image : "https://resources.cdn-kaspi.kz/img/m/p/pa0/p62/57312338.png?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/pa0/p62/57312338.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p17/p60/57312340.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pdf/p5f/57312342.png?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/elektrochainik-merlin-ke-1309dtx-zelenyi-135697511/?c=750000000",
      category : "Малая техника для дома",
      likes : 4
    },
    {
      id : 4,
      name : "Увлажнитель воздуха MiBaby",
      description : "Портативный увлажнитель воздуха используют, как аромадиффузор и наслаждаются ароматерапией в квартире или офисе. Бытовая и климатическая техника должна быть у каждого, особенно, когда есть новорожденные дети. Мощное арома устройство имеет объем емкости 2 л и верхний залив, встроенный светильник ночник, автоматическое отключение.",

      price : 4990,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p67/p2d/8582066.jpeg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p67/p2d/8582066.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p2a/p23/8582069.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p54/p2b/8582071.jpeg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/uvlazhnitel-vozduha-mibaby-mi001-belyi-130030210/?c=750000000",
      category : "Малая техника для дома",
      likes : 4
    },
    {
      id : 5,
      name : "Паро-\nочиститель Denxß",
      description : "Denx SE8620 помогает быстро и эффективно удалять грязь, жир и бактерии без использования химических средств. Высокотемпературный пар до 160 °C глубоко очищает поверхности и дезинфицирует их за считанные секунды.",

      price : 37800,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p0b/pd9/57310129.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p0b/pd9/57310129.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p9f/pd6/57310130.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p83/pd6/57310131.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/paroochistitel-denx-se8620-zheltyi-130443158/?c=750000000",
      category : "Малая техника для дома",
      likes : 4
    },
    {
      id : 6,
      name : "Смартфон Apple iPhone 17 Pro 256Gb",
      description : "Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.",

      price : 814935,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pdf/p95/64168415.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000",
      category : "Смартфоны",
      likes : 4
    },
    {
      id : 7,
      name : "Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 Г",
      description : "Представляем вам Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой.",

      price : 555000,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pb5/p27/20120114.png?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000",
      category : "Смартфоны",
      likes : 4
    },
    {
      id : 8,
      name : "Смартфон Xiaomi Redmi Note 13 Pro 5G 12 ГБ/512 ГБ",
      description : "Xiaomi Redmi Note 13 Pro 5G 12 ГБ/512 ГБ — это мощный и стильный смартфон с передовыми технологиями, созданный для тех, кто ценит высокую производительность и яркий дизайн.",

      price : 700000,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/h50/h41/84949401436190.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/h50/h41/84949401436190.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p1a/p64/64532671.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pe2/p63/64532673.png?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-12-gb-512-gb-fioletovyi-115993250/?c=750000000",
      category : "Смартфоны",
      likes : 4
    },
    {
      id : 9,
      name : "Смартфон Realme GT 8 Pro 16 ГБ/512 ГБ",
      description : "Смартфон realme GT 8 Pro в белом корпусе из пластика и металла имеет встроенную память объемом 512 ГБ. Этого хватает для десятков приложений и тысяч фотографий. Безрамочный AMOLED-экран диагональю 6.79 дюйма обладает разрешением 3136x1440 пикс. За быстрое функционирование смартфона отвечает оперативная память объемом 16 ГБ и 8-ядерный процессор Qualcomm Snapdragon 8 Elite Gen 5. Основная камера с 7-элементной линзой состоит из 3 модулей, которые в совокупности позволяют делать снимки разрешением до 200 Мп. Видеосъемка может вестись в двойном режиме и в стандарте Dolby Vision. Панель блока камер имеет съемную конструкцию. Кроме стандартной и быстрой зарядки, realme GT 8 Pro поддерживает беспроводную. За защиту конфиденциальности данных пользователя отвечают сканеры распознавания лица и отпечатков пальцев (в экране).",

      price : 649990,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p4e/pb4/96245343.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p6b/pb4/96245344.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pfc/pbe/96245377.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p0d/pb8/96245356.png?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/aux-asw-h09a4-fxr1-montazhnyi-komplekt-belyi-135472704/?c=750000000",
      category : "Смартфоны",
      likes : 4
    },
    {
      id : 10,
      name : "Смартфон OPPO Find N5 16 ГБ/512 ГБ",
      description : "✨ OPPO Find N5 ✨ – это революционный сгибаемый смартфон, сочетающий в себе передовые технологии, элегантный дизайн и невероятную функциональность. Этот смартфон создан для тех, кто ценит инновации и стремится быть впереди.",

      price : 999990,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p96/p78/36314961.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p96/p78/36314961.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pb3/p78/36314962.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p07/p79/36314965.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/oppo-find-n5-16-gb-512-gb-chernyi-138016078/?c=750000000",
      category : "Смартфоны",
      likes : 4
    },
    {
      id : 11,
      name : "Распашной шкаф Aisha Pro 1103",
      description : "Это бюджетный, но при этом функциональный и современный шкаф, который идеально подойдет для небольшой спальни, прихожей или детской комнаты. Его лаконичный серый дизайн и продуманная организация пространства помогут вам поддерживать идеальный порядок и добавят уюта интерьеру.",

      price : 61989,
      rating : 4.1,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p4f/pd8/83121137.png?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p4f/pd8/83121137.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h96/h13/85764655841310.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h4a/h7b/85764655906846.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/oppo-find-n5-16-gb-512-gb-chernyi-138016078/?c=750000000",
      category : "Шкафы для одежды",
      likes : 4
    },
    {
      id : 12,
      name : "Распашной шкаф Ваша Мебель Модерн",
      description : "Распашной шкаф Ваша Мебель 02 — функциональное решение для организации пространства, которое сочетает в себе стильный дизайн и высокую вместительность.",

      price : 125994,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p1e/p23/22517084.jpeg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p1e/p23/22517084.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pb5/p1f/22517085.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p4b/p1c/22517086.jpeg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/raspashnoi-shkaf-vasha-mebel-modern-240x230h50-9-sm-belyi-134056752/?c=750000000",
      category : "Шкафы для одежды",
      likes : 4
    },
    {
      id : 13,
      name : "Распашной шкаф Scandi Lagom",
      description : "Вот описание для модели Scandi Lagom в указанных габаритах: Распашной шкаф Scandi Lagom — элегантное и вместительное решение, идеально подходящее для хранения одежды и текстиля в спальне, гардеробной или просторной прихожей. Выполненный в скандинавском стиле, он гармонично сочетает в себе минимализм, функциональность и светлую цветовую гамму, создавая ощущение уюта и порядка.",

      price : 176000,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/hc3/h89/85672335704094.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/hc3/h89/85672335704094.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h5c/h0e/85672335769630.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/raspashnoi-shkaf-scandi-lagom-300x250h55-sm-belyi-118183355/?c=750000000",
      category : "Шкафы для одежды",
      likes : 4
    },
    {
      id : 14,
      name : "Шкаф-пенал Euromebel ПН 6",
      description : "Шкаф-пенал — это стильное и функциональное решение для любого помещения. Его приятный цвет и лаконичный дизайн позволяют гармонично вписать его в интерьер гостиной, спальни, детской комнаты или ванной. Универсальное открывание двери обеспечивает удобство использования, а вместительные полки позволяют разместить большое количество вещей. Качественные материалы и фурнитура гарантируют долговечность и надежность шкафа.",

      price : 38990,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/pc4/p2b/67789012.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/pc4/p2b/67789012.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p28/pcc/52296517.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pf7/pc8/52296525.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/shkaf-penal-euromebel-pn-6-40x193-7h38-6-sm-belyi-zolotistyi-123271101/?c=750000000",
      category : "Шкафы для одежды",
      likes : 4
    },
    {
      id : 15,
      name : "Распашной шкаф Qazyna Jihaz Ультра",
      description : "Элегантный и компактный распашной шкаф от бренда Qazyna Jihaz станет стильным решением для хранения одежды и текстиля даже в ограниченном пространстве. Модель выполнена в универсальной цветовой гамме — сочетание белого и коричневого оттенков придаёт мебели современный, но в то же время уютный вид. Лаконичный дизайн гармонично впишется в интерьер в стиле модерн, сканди, минимализм или классика.",

      price : 42000,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/pb4/pd0/83083485.png?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/pb4/pd0/83083485.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p50/p3f/72662073.bin?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/ha2/h45/86503356858398.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/raspashnoi-shkaf-qazyna-jihaz-ul-tra-80x190h45-sm-belyi-korichnevyi-108794828/?c=750000000",
      category : "Шкафы для одежды",
      likes : 4
    },
    {
      id : 16,
      name : "Телевизор Yasin 81 см",
      description : "Yasin 32E9000 2025 года получил полное обновление, улучшив как производительность, так и дизайн, чтобы предложить пользователям еще более совершенный опыт. Это умный выбор для тех, кто ценит комфорт, функциональность и доступную цену!",

      price : 50216,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p58/pf7/58296734.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p58/pf7/58296734.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p20/pf7/58296736.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p3c/pf7/58296735.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/yasin-32e9000-81-sm-chernyi-101748828/?c=750000000",
      category : "Телевизоры",
      likes : 4
    },
    {
      id : 17,
      name : "Телевизор SMART 81",
      description : "Телевизор SMART QUA32QX2AAJXXZ — это компактное решение для вашего дома, которое сочетает в себе высокое качество изображения, умные функции и удобство использования. С диагональю 32 дюйма (81 см) он идеально впишется в любой интерьер.",

      price : 45126,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/hd5/hb6/85422668644382.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/hd5/hb6/85422668644382.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p20/pf7/58296736.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/smart-qua32qx2aajxxz-81-sm-chernyi-117403264/?c=750000000",
      category : "Телевизоры",
      likes : 4
    },
    {
      id : 18,
      name : "Телевизор Samsung 140 см",
      description : "LED-телевизор Samsung QE55Q60DAUXCE со Smart TV поддерживает голосовое управление через помощника Samsung Bixby. Благодаря встроенным технологиям динамики на 20 Вт выдают чистый и объемный стереозвук. Есть беспроводные модули, LAN- и HDMI-порты для выбора удобного способа подключения к сети Интернет и другим устройствам. Вы можете записывать видео, передавать контент на экран с помощью функции AirPlay, управлять телевизором через мобильное приложение SmartThings.",

      price : 449989,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/h63/h21/85990957187102.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/h63/h21/85990957187102.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p20/pf7/58296736.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/samsung-qe55q60dauxce-140-sm-seryi-119285285/?c=750000000",
      category : "Телевизоры",
      likes : 4
    },
    {
      id : 19,
      name : "Телевизор Samsung 109 см",
      description : "Yasin 32E9000 2025 года получил полное обновление, улучшив как производительность, так и дизайн, чтобы предложить пользователям еще более совершенный опыт. Это умный выбор для тех, кто ценит комфорт, функциональность и доступную цену!",

      price : 205989,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p50/p17/56185013.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p50/p17/56185013.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p33/p17/56185014.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/samsung-lh43befmvguxci-109-sm-chernyi-143416071/?c=750000000",
      category : "Телевизоры",
      likes : 4
    },
    {
      id : 20,
      name : "Телевизор Samsung QE55Q7FAAUXCE 140 см",
      description : "Характеристики Телевизор Samsung  140 см черный",

      price : 369990,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/pe9/p8b/64279726.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p05/p8c/64279727.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p21/p8c/64279728.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pc6/p8e/64279731.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/yasin-32e9000-81-sm-chernyi-101748828/?c=750000000",
      category : "Телевизоры",
      likes : 4
    },
  ];

  // public addProduct(product  : ProductModel) : void {
  //   this.products.push(product);
  // }

  public getProducts() : ProductModel[] {
    return this.products;
  }

}
