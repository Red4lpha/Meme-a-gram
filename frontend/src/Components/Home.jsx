import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  const [memesGet, setMemesGet] = useState([]);
  const getMemes = async () => {
    try {
      await fetch('/api/memes')
      .then((response) => response.json())
      .then((data) => setMemesGet(data))
    } catch (err) {
      console.error('Error:', err);
    }
  }
  useEffect (() => {
    getMemes();
  },[]);
  return (
    <main>
      {memesGet.map((meme, index) => (
        <article>
          <Link to={`./view/${index}`} state={{name: meme.name, image: meme.image}}>
            <img src={meme.image} className="meme" alt={`Meme image of: ${meme.name}`}  key={index}/>
          </Link>
        </article>  
      ))}
    </main>
  )
}

export default Home