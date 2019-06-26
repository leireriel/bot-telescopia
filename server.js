require('dotenv').config();
const Twitter = require('twitter');
//import { riddles } from './riddles';

//Set client Twitter
const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

//Get array of riddles
const riddles = [
  {
    "id": 0,
    "text": "Hay dos niños y cada uno tiene manzanas, uno le dice al otro: “Dame una manzana, así tendré el doble que tú”; pero el otro le dice: “No, mejor tú dame una manzana y así los dos tendremos el mismo número de manzanas”, ¿Cuántas manzanas tienen cada uno?"
  },
  {
    "id": 1,
    "text": "Hay siete perros en el patio y cada uno de ellos ve a tres perros, ¿Cuántos perros son ahora?"
  },
  {
    "id": 2,
    "text": "En un barco hay dos padres y dos hijos, ¿Cuántas personas hay en el barco?"
  },
  {
    "id": 3,
    "text": "Solo aparezco cuando las gotas se van y la luz me ilumina, ¿Qué soy?"
  },
  {
    "id": 4,
    "text": "Si la hija de María es la madre de mi hija, ¿Qué soy yo de María?"
  },
  {
    "id": 5,
    "text": "¿Cuál es el número que si lo pones al revés, vale menos?"
  },
  {
    "id": 6,
    "text": "Negro por fuera y verde por dentro"
  },
  {
    "id": 7,
    "text": "Un ratón ha formado con diez monedas un triángulo con la punta hacia abajo, pero ahora quiere corregirlo y ordenarlo correctamente, ¿Qué tendría que hacer el ratón, para que el triángulo apunte hacia arriba?"
  },
  {
    "id": 8,
    "text": "Tres números que sean iguales que den 60 y que no sea 20, 20 y 20?"
  },
  {
    "id": 9,
    "text": "Un barco en el medio del mar tiene al costado una escalera con siete escalones, dos debajo del agua y cinco arriba, cada escalón mide 30 centímetros y están separados por otros 30 centímetros, si la marea sube 30 centímetros por hora, ¿Cuántos escalones estarán sobre el agua en 3 horas?"
  },
  {
    "id": 10,
    "text": "¿Quien es la abuela de la madre de la hermana de mi tía?"
  },
  {
    "id": 11,
    "text": "Comienza con la letra c y termina con la letra o, lo tenemos atrás y es arrugado. ¿Qué es?"
  },
  {
    "id": 12,
    "text": "Una adivinanza que te confundirá la cabeza bastante: Entre nadie y ninguno se construyó una casa, nadie salió por la puerta y ninguno salió por la ventana, Quién se quedó adentro?"
  },
  {
    "id": 13,
    "text": "Es más alto que un pino y pesa menos que un comino."
  },
  {
    "id": 14,
    "text": "Dicen que soy rey y no tengo rey, no, dicen que soy rubio y no tengo pelo, dicen que ando y no me muevo:"
  },
  {
    "id": 15,
    "text": "Un animalito va caminando por un caminito, ¿Qué animal es?"
  },
  {
    "id": 16,
    "text": "Desarrollo mi trabajo con mucho calor, dejando la ropa hecha un primor"
  },
  {
    "id": 17,
    "text": "Adivina adivinanza, ¿Por qué los esqueletos no tocan en las iglesias?"
  },
  {
    "id": 18,
    "text": "Me llamo Leo, me apellido Pardo, quien no lo adivine es un poco tardo:"
  },
  {
    "id": 19,
    "text": "Sabías decirme qué cosa es lo que llega, te coge y tú no lo ves?"
  },
  {
    "id": 20,
    "text": "Tiene cuernos y no es un toro, y guarda su casa como un Tesoro"
  },
  {
    "id": 21,
    "text": "Mi madre es tartamuda, mi padre cantor, tengo blanco mi vestido y amarillo el corazón"
  },
  {
    "id": 22,
    "text": "¿Qué le dice un árbol a otro?"
  },
];

const food = [
  {
    "id": 0,
    "text": "sandía"
  },
  {
    "id": 1,
    "text": "sandía"
  },
  {
    "id": 2,
    "text": "pizza sin gluten"
  },
  {
    "id": 3,
    "text": "hipotecas no"
  },
  {
    "id": 4,
    "text": "nubecitas 🌧"
  },
  {
    "id": 5,
    "text": "cosas que comemos laos baots"
  },
  {
    "id": 6,
    "text": "CACAHUETES!"
  },
  {
    "id": 7,
    "text": "undefined 010101"
  },
]

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random()*(max-min+1)+min);
};

const generateNewTweet = (type, number) => {
  let newTweet;
  newTweet = type.filter(element => element.id === number);
  newTweet = newTweet[0].text;

  if (type === riddles) {
    const finalTweet = `${newTweet} #adivinaAdivinanza`;
    console.log(finalTweet);
    return finalTweet;
  } else if (type === refrains) {
    const finalTweet = `${newTweet} #refranes`;
    console.log(finalTweet);
    return finalTweet;
  } else if (type === eatFoods) {
    const getFood = generateRandomFood();
    const finalTweet = `${newTweet} ${getFood}`;
    console.log(finalTweet);
    return finalTweet;
  } else {
    console.log(newTweet);
    return newTweet;
  }
}

const generateRandomFood = () => {
  const numberOfFood = randomIntFromInterval(0, 7);
  let newFood;
  newFood = food.filter(element => element.id === numberOfFood);
  newFood = newFood[0].text;
  return newFood;
}

const greetings = [
  {
    "id": 0,
    "text": "Holaaaaa! A las bots nos gusta saludar"
  },
  {
    "id": 1,
    "text": "¿Cómo te llamas? Yo soy bot-a"
  },
  {
    "id": 2,
    "text": "Soy un bot-ón"
  },
]

const eatFoods = [
  {
    "id": 0,
    "text": "Me gusta comer"
  },
]

const refrains = [
  {
    "id": 0,
    "text": "Burro grande, ande o no ande."
  },
  {
    "id": 1,
    "text": "Cuando menos se piensa, salta la liebre."
  },
  {
    "id": 2,
    "text": "Dame pan y dime tontoa."
  },
  {
    "id": 3,
    "text": "En todas partes cuecen habas."
  },
  {
    "id": 4,
    "text": "Échale harina al pavo."
  },
  {
    "id": 5,
    "text": "Vísteme despacio que tengo prisa."
  },
];

const selectRandomTypeOfText = () => {
  const numberOfText = Math.floor((Math.random() * 4) + 1);
  if (numberOfText === 1) {
    const numberOfRiddle = randomIntFromInterval(0, 22);
    generateNewTweet(riddles, numberOfRiddle);
    console.log('riddle', numberOfRiddle);
    return numberOfRiddle;
  } else if (numberOfText === 2) {
    const numberOfGreeting = randomIntFromInterval(0, 2);
    generateNewTweet(greetings, numberOfGreeting);
    console.log('greeting', numberOfGreeting);
    return numberOfGreeting;
  } else if (numberOfText === 3) {
    const numberOfRefrain = randomIntFromInterval(0, 5);
    generateNewTweet(refrains, numberOfRefrain);
    console.log('refrain', numberOfRefrain);
    return numberOfRefrain;
  } else {
    const numberOfEatFoods = randomIntFromInterval(0, 0);
    generateNewTweet(eatFoods, numberOfEatFoods);
    console.log('eat food', numberOfEatFoods);
    return numberOfEatFoods;
  }
}

selectRandomTypeOfText();

//Send tweet to Twitter
/*client.post('statuses/update', {status: newTweet})
  .then(tweet => {
    console.log(tweet);
  })
  .catch(error => {
    console.log(error);
  })*/
