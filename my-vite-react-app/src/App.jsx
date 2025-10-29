import './App.css'

import Name from './components/React-HomeWork01/Name'
import Cars from './components/React-HomeWork01/Cars'
import Movies from './components/React-HomeWork01/Movies'
import Person from './components/react-homework02/Person'
import Car from './components/React-HomeWork02/Car'
import Movie from './components/react-homework02/movies'


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



  return (
    <>
      <Name />
      <Cars />
      <Movies />
      <Person person={person} />
      <Car car={car} />
      <Movie movie={movie} />
      <Movies listOfMovies={movies} />
    </>
  )
}
export default App