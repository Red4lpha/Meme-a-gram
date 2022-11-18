import React from 'react'
import './Home.css';

interface MemeInterface {
  name: string,
  image: string,
} 

const memes: MemeInterface[] = [
  {
    name: 'first',
    image: '../images/Ike.webp'
  },
  {
    name: '2nd',
    image: '../images/Fox.webp'
  },
  {
    name: '3rd',
    image: '../images/Kirby.webp'
  },
  {
    name: '4th',
    image: '../images/Pikachu.webp'
  },
  {
    name: '5th',
    image: '../images/Peach.webp'
  },
  {
    name: '6th',
    image: '../images/Ike.webp'
  },
  
]


function Home() {
  return (
    <main>
      {memes.map((meme, index) => (
        <article>
          <img src={meme.image} className="meme"  key={index}/>
        </article>  
      ))}
    </main>
  )
}

export default Home