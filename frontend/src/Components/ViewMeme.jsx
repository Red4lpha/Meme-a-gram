import './Home.css';
import { useLocation } from 'react-router-dom'

function ViewMeme() {
  const location = useLocation()
  const { name, image } = location.state
  console.log('name, ', name);
  return (
    <main>
      <h1>{name}</h1>
      <img src={image} className="meme" alt={`Meme image of: ${name}`}/>
    </main>
  )
}

export default ViewMeme