import React from "react";
import car1 from "../img/car1.png";
import car2 from "../img/car2.png";
import car3 from "../img/car3.png";
import car4 from "../img/car4.png";
import car5 from "../img/car5.png";
import car6 from "../img/car6.png";
import car7 from "../img/car7.png";
import car8 from "../img/car8.png";
import CardNews from "./CardNews/CardNews";
import "./CardNews/CardNews.css";

const imagesList = [
  {
    id: 1,
    src: car1,
    alt: "Car 1",
    title: "Volkswagen ID.4: первый серийный кроссовер марки на батарейках",
    author: "Сергей Иванов",
    text: "К дебюту этого автомобиля марка готовилась три года — уже с момента презентации концепта ID.Crozz было понятно, что в скором времени линейка электрокаров пополнится кроссовером ... ",
    date: "3 часа назад",
  },
  {
    id: 2,
    src: car2,
    alt: "Car 2",
    title: "Tesla Roadster получит колеса как в Формуле 1",
    author: "Сергей Иванов",
    text: "Похоже, Илон Маск решил собрать в новом спорткаре Tesla Roadster все возможные необычные технические решения. Мы уже писали, что этот автомобиль получит опционные ...",
    date: "5 часов назад",
  },
  {
    id: 3,
    src: car3,
    alt: "Car 3",
    title: "Lucid Air сможет заряжаться быстрее всех",
    author: "Сергей Иванов",
    text: "Компания Lucid Motors раскрыла подробности о зарядке своего электрокара Air. Этот седан сможет заряжаться током с напряжением более 900 вольт, что станет рекордом для современных ...",
    date: "19 августа 2020",
  },
  {
    id: 4,
    src: car4,
    alt: "Car 4",
    title: "Porsche слегка улучшил Taycan",
    author: "Сергей Иванов",
    text: "Компания Porsche рассказала об электрокаре Taycan 2021 модельного года, который поступит в продажу в сентябре. Машина получила минимальные обновления ...",
    date: "19 августа 2020",
  },
  {
    id: 5,
    src: car5,
    alt: "Car 5",
    title:
      "В Volvo попытались доказать превосходство над Tesla. Получилось не очень",
    author: "Сергей Иванов",
    text: "Шведская марка Polestar, которая принадлежит концерну Volvo, организовала в США тест электромобилей на запас хода с целью доказать, что их седан Polestar 2 имеет преимущество ...",
    date: "19 августа 2020",
  },
  {
    id: 6,
    src: car6,
    alt: "Car 6",
    title: "Новые аккумуляторы Tesla подойдут самолетам",
    author: "Сергей Иванов",
    text: "Группа сотрудников канадского исследовательского центра Tesla опубликовала в журнале Nature научную статью о своих успехах в создании литий-металлических аккумуляторов ...",
    date: "5 часов назад",
  },
  {
    id: 7,
    src: car7,
    alt: "Car 7",
    title: "Cadillac Lyriq будет неожиданно дешевым",
    author: "Сергей Иванов",
    text: "На прошлой неделе концерн General Motors представил серийную версию электрического кроссовера Cadillac Lyriq, который, в сравнении",
    date: "19 августа 2020",
  },
  {
    id: 8,
    src: car8,
    alt: "Car 8",
    title: "В Формуле Е новый чемпион",
    author: "Сергей Иванов",
    text: "Анониу Феликс да Кошта финишировал вторым в четвертой из шести гонок в Берлине, которые завершают очередной сезон Формулы Е  Благодаря этому спортсмен стал недосягаем ...",
    date: "19 августа 2020",
  },
];

function NewsPage() {
  return (
    <div className="cars-icons">
      {imagesList.map((card) => (
        <CardNews
          text={card.text}
          title={card.title}
          author={card.author}
          date={card.date}
          img={card.src}
        />
      ))}
    </div>
  );
}

export default NewsPage;
