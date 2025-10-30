import './App.css'

import Name from './components/React-HomeWork01/Name'
import Cars from './components/React-HomeWork01/Cars'
import Movies from './components/React-HomeWork01/Movies'
import Person from './components/react-homework02/Person'
import Car from './components/React-HomeWork02/Car'
import Movie from './components/react-homework02/movies'
import FemaleSwimmers from './components/React-HomeWork03/Swimmers'


const App = () => {

  const car = {
    year: 2015,
    model: "bmw x5",
    type: "SUV",
    HP: 300,
    color: "Black",
    tyres: "All season",
  }

  const person = {
    name: "ivan",
    surname: "ivanov",
    age: 30,
    height: "180",
    weight: "80",
    profession: "developer"
  }


  const movie = {
    name: "Godfather",
    year: "1972",
    mainActor: "Marlon Brando",
    Oscar: "3",
    Imdb: "9.2",
    boxOffice: "246 Million USD"
  }



  const movies = ["Inception", "Godfather", "Lucy", "Beautiful Mind"];


  const players = [
    { name: "Messi", howOld: "35", team: "Barcelona", price: "190M", stats: { goals: 300, assists: 180, } },
    { name: "Ronaldinho", howOld: "40", team: "FC-Milan", price: "170M", stats: { goals: 200, assists: 95, } },
    { name: "Ibrahimovic", howOld: "42", team: "Inter", price: "150M", stats: { goals: 150, assists: 73, } },


  ]

  const players1 = [
    { name: "LeBron James", height: "2.06m", position: "Small Forward", stats: { points: 35000, assists: 9500 }, MVP: true },
    { name: "Stephen Curry", height: "1.91m", position: "Point Guard", stats: { points: 22000, assists: 7000 }, MVP: true },
    { name: "Kevin Durant", height: "2.08m", position: "Power Forward", stats: { points: 25000, assists: 5000 }, MVP: false },
  ];


  const femaleSwimmers = [
    { name: "Katie Ledecky", height: "1.83m", weight: "70kg", hasBeenToOlympics: true },
    { name: "Sarah Sjöström", height: "1.83m", weight: "68kg", hasBeenToOlympics: true },
    { name: "Emma McKeon", height: "1.79m", weight: "65kg", hasBeenToOlympics: true },

  ]

  return (
    <>
      <Name />
      <Cars />
      <Movies />
      <Person person={person} />
      <Car car={car} />
      <Movie movie={movie} />
      <Movies listOfMovies={movies} />
      <FootballPlayers listOfPlayers={players} />
      <BasketballPlayers listOfPlayers={players} />
      <FemaleSwimmers listOfSwimmers={femaleSwimmers} />
    </>
  )
}
export default App