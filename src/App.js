import { useState } from 'react';
import ReactBoxFlip from 'react-box-flip'
import './App.css';
import valoOne from "./image/valorant-red-logo.jpg"
import valoTwo from "./image/valorant-reyna-pose.jpg"

function App() {

  const [isFlipped, setIsFlipped] = useState(false)
  // const [isFlippedV, setIsFlippedV] = useState(false)
  let lastKnownScrollPosition = 0;
  let ticking = false;

  function doSomething(scrollPos) {
    // Do something with the scroll position
    setIsFlipped(!isFlipped)
  }

  document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;
  
    if (!ticking) {
      window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });
  
      ticking = true;
    }
  });

  return (
    <main>
      <div class="container">
        <h1 class="title">Flip Card</h1>
        {/* <div>
          <h2>Installation</h2>
          <p>
            To install ReactBoxFlip, just run the following command in your
            terminal:
          </p>
          <code>npm install --save react-box-flip</code>
          or with yarn:
          <code>yarn add react-box-flip</code>
        </div> */}
        <div>
          <h2>Scroll to see other image</h2>
        </div>
        <div>
          {/* <h3>Default</h3> */}
          <button class="btn" onClick={() => setIsFlipped(!isFlipped)}>Flip</button>
          <div class="box-container">
            <ReactBoxFlip isFlipped={isFlipped}>
              <div className='front-box'>
                <img src={valoOne} alt="front" />
              </div>
              <div className='back-box'>
                <img src={valoTwo} alt="back" />
              </div>
            </ReactBoxFlip>
          </div>
        </div>
        <footer>
          <p>
            Check out the code on <a href="https://github.com/iwancai/Flip-card-play">GitHub</a>.
          </p>
          <p>
            Made with <span role="img" aria-label="heart">❤️</span> by{' '}
            <a href="https://github.com/iwancai">Muhamad Ridwan</a>
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;
