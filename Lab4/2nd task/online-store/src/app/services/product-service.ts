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
      link : "https://kaspi.kz/shop/p/paroochistitel-atreon-dfhs-01-belyi-chernyi-142540734/?c=750000000"
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
      link : "https://kaspi.kz/shop/p/ainomi-a1-premium-power-chernyi-mokryi-asfal-t-137712147/?c=750000000"
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
      link : "https://kaspi.kz/shop/p/elektrochainik-merlin-ke-1309dtx-zelenyi-135697511/?c=750000000"
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
      link : "https://kaspi.kz/shop/p/uvlazhnitel-vozduha-mibaby-mi001-belyi-130030210/?c=750000000"
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
      link : "https://kaspi.kz/shop/p/paroochistitel-denx-se8620-zheltyi-130443158/?c=750000000"
    },
    {
      id : 6,
      name : "Двойной аэрогриль SPRXß",
      description : "🍟 Больше никакой жарки на сковороде — забудьте о разбрызганном масле и запахе на кухне.",

      price : 38000,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p48/p74/63065800.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p48/p74/63065800.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p50/pe6/65509164.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/sprx-sprx-8017d-10-l-chernyi-144297982/?c=750000000"
    },
    {
      id : 7,
      name : "Вафельница NEXME NSMß",
      description : "Вафельница NEXME NSM 811A — это простое и удобное решение для приготовления вкусных бельгийских вафель прямо у вас дома.",

      price : 4990,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p18/p0c/79801438.png?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p18/p0c/79801438.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p13/p6e/44694580.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pf7/p6d/44694581.png?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/vafel-nitsa-nexme-nsm-811a-chernyi-138223196/?c=750000000"
    },
    {
      id : 8,
      name : "Робот-пылесос Karcher RCV 2 ",
      description : "Простота управления при помощи мобильного приложения с WiFi-соединением, Интеллектуальное дистанционное управление для легкого выполнения функций управления и контроля, Корректировка параметров уборки и функция таймера, Легкое соединение с локальной сетью, Защита информации и обновления, Датчики перепада высот, Речевое информирование.",

      price : 104990,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/h82/hfd/86493787750430.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/h82/hfd/86493787750430.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hbb/hbd/86494030364702.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/karcher-rcv-2-1-269-670-0-belyi-121226355/?c=750000000"
    },
    {
      id : 9,
      name : "AUX ASW-H09A4/FXR1",
      description : "Простота управления при помощи мобильного приложения с WiFi-соединением, Интеллектуальное дистанционное управление для легкого выполнения функций управления и контроля, Корректировка параметров уборки и функция таймера, Легкое соединение с локальной сетью, Защита информации и обновления, Датчики перепада высот, Речевое информирование.",

      price : 101728,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/pd4/p7f/28543517.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/pd4/p7f/28543517.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p0c/p80/28543515.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p9c/p7f/28543519.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/aux-asw-h09a4-fxr1-montazhnyi-komplekt-belyi-135472704/?c=750000000"
    },
    {
      id : 10,
      name : "Кофемашина Delonghi Rivelia",
      description : "Погрузитесь в фантастический мир кофе с помощью Rivelia. Откройте для себя бесконечное разнообразие сортов кофейных зерен благодаря уникальной системе Bean Switch. Наслаждайтесь захватывающими впечатлениями на ярком 3,5-дюймовом сенсорном дисплее с разнообразной анимацией и предустановленными программами приготовления кофе, которые можно настроить под ваши предпочтения.",

      price : 499990,
      rating : 5,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p21/pd0/4367803.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p21/pd0/4367803.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p3d/pd0/4367804.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p59/pd0/4367805.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/kofemashina-delonghi-rivelia-exam441-55-gr-zelenyi-128844594/?c=750000000"
    }
  ];



  // public addProduct(product  : ProductModel) : void {
  //   this.products.push(product);
  // }

  public getProducts() : ProductModel[] {
    return this.products;
  }

}
