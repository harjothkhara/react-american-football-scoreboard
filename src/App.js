//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, sethomeScore] = useState(32);
  const [awayScore, setawayScore] = useState(32);

  console.log('this is useState', useState(0));
  console.log(homeScore);
  console.log(sethomeScore);

  return (
    <div className='container'>
      <section className='scoreboard'>
        <div className='topRow'>
          <div className='home'>
            <h2 className='home__name'>Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className='home__score'>{homeScore}</div>
          </div>
          <div className='timer'>00:03</div>
          <div className='away'>
            <h2 className='away__name'>Tigers</h2>
            <div className='away__score'>{awayScore}</div>
          </div>
        </div>
        <BottomRow />
        npmfff
      </section>
      <section className='buttons'>
        <div>
          <button
            onClick={() => sethomeScore(0)}
            className='homeButtons__fieldGoal'
          >
            Reset
          </button>
        </div>
        <div className='homeButtons'>
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={() => sethomeScore(homeScore + 7)}
            className='homeButtons__touchdown'
          >
            Home Touchdown
          </button>
          <button
            onClick={() => sethomeScore(homeScore + 3)}
            className='homeButtons__fieldGoal'
          >
            Home Field Goal
          </button>
        </div>
        <div className='awayButtons'>
          <button
            onClick={() => setawayScore(awayScore + 7)}
            className='awayButtons__touchdown'
          >
            Away Touchdown
          </button>
          <button
            onClick={() => setawayScore(awayScore + 3)}
            className='awayButtons__fieldGoal'
          >
            Away Field Goal
          </button>
        </div>
        <div>
          <button
            onClick={() => setawayScore(0)}
            className='homeButtons__fieldGoal'
          >
            Reset
          </button>
          <button
            onClick={() => {
              sethomeScore(0);
              setawayScore(0);
            }}
            className='homeButtons__fieldGoal'
          >
            New Game
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
