import './App.css'
import ColorfulButton from './components/colorfulButton/colorfulButton.jsx'
import ExpandingSearchBar from './components/expandingSearchBar/expandingSearchBar.jsx'
import CodePenTile from './components/codePenTile/codePenTile.jsx'
import LoadingAnimation1 from './components/loadingAnimation1/loadingAnimation1.jsx'
import LoadingAnimation2 from './components/loadingAnimation2/loadingAnimation2.jsx'
import ArcheryTarget from './components/archeryTarget/archeryTarget.jsx'
import WordCarousel from './components/wordCarousel/wordCarousel.jsx'
import SwissFlag from './components/swissFlag/swissFlag.jsx'
import NigerFlag from './components/nigerFlag/nigerFlag.jsx'
import GithubProfileLayout from './components/githubProfileLayout/githubProfileLayout.jsx'

function App(){
  return (
    <div className="App">
      <h1>CSS Challenges</h1> 
      <p>I've been studying CSS for a couple days and decided it's 
        time to put what I learned to the test by completing the 
        challenges in this codecademy tutorial on 
        Youtube: <a href="https://www.youtube.com/watch?v=TzuWIHGFKCQ&list=TLPQMDQwODIwMjXvaTXlnE9G5g&index=1">
          24 CSS Projects: Loading Animations, Progress Bars, Flashcards & More!
        </a>
      </p>
      <p>I completed all of these on my own, and then referenced the solution 
        in the video to see how my code could be improved. So for any hiring managers out there,
        these challenges serve a good demonstration of what I can do with CSS!
      </p>

      <h3>1. Colurful Button</h3>
      <p>This Challenge taught me how to make gradients and use transforms.</p>
      <ColorfulButton />

      <h3>2. Expanding Search Bar</h3>
      <p>Click into the search field to watch it expand! There's also has a hidden label for screen readers.</p>
      <ExpandingSearchBar />

      <h3>3. Code Pen Tile</h3>
      <p>I modified this one a bit...I wanted to show my favorite soccer player Lamine Yamal.</p>
      <CodePenTile /> 

      <h3>4. Loading Animation 1</h3>
      <p>This Challenge taught me how to use animations!</p>
      <LoadingAnimation1 /> 

      <h3>5. Loading Animation 2</h3>
      <p>Another cool loading animation with more transforms.</p>
      <LoadingAnimation2 /> 

      <h3>6. Archery Target</h3>
      <p>stacking divs</p>
      <ArcheryTarget /> 

      <h3>7. Word Carousel</h3>
      <p>finally learned what ::after is for.</p>
      <WordCarousel />

      <h3>8. Swiss Flag</h3>
      <p>made with CSS grid!</p> 
      <SwissFlag />

      <h3>8. Niger Flag</h3>
      <p>made with CSS flexbox</p> 
      <NigerFlag />

      <h3>Github Profile Layout</h3>
      <p></p>
      <GithubProfileLayout />

    </div>
  )
}

export default App
