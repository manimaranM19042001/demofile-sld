import React, { FC, useState } from 'react';
import './App.css';
import { ICellData, IHistory, IPlayerData } from './enums_types_and_interfaces/interface';
import { CellData } from './game_data/gameData';
import ScrollDownWindow from './components/scroll_down_window'
import Cell from './components/board_cell'
import InputWindow from './components/input_form';
import audio from '../src/resources/audio/winner.mp3'
import { AlertWindow } from './components/alertComponent';
import { WinnerPopUp } from './components/winnerPopUp';

const App: FC = () => {

  // visibitlity states
  const [show, setShow] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [end, setEnd] = useState<boolean>(false)

  const [showGrid, setShowGrid] = useState<boolean>(false)
  const [inputForm, setInputForm] = useState<boolean>(true)

  // state for setting the winner

  const [winner, setWinner] = useState({
    name: 'SNAKE AND LADDER',
    icon: '🏆',
  })

  const [randomNumber, setRandomNumber] = useState<string | number>('🎲')
  const [currentplayer, setCurrentPlayer] = useState<string>('LETS START')

  const [count, setCount] = useState<number>(0)
  const [cellData, setCellData] = useState<ICellData[]>(CellData)
  const [listOfPlayers, setListOfPlayers] = useState<IPlayerData[]>([])
  const [history, setHistory] = useState<IHistory[]>([])

  let playersOrder = listOfPlayers.length

  function bringData(playerData: IPlayerData[]) { // bring data from 
    setListOfPlayers(playerData)
  }

  function playGame() {

    let random = Math.ceil(Math.random() * 6)     // generate a random number between (1-6)
    setRandomNumber(random)   // set the number in the randomNumber state variable
    setCurrentPlayer(listOfPlayers[count].name + `  '${listOfPlayers[count].icon}'`)  // setting player sequentially

    let winnerAudio: any = new Audio(audio)

    let newArray = listOfPlayers

    // add position value in object 

    newArray[count].position + random <= 100 ? newArray[count].position += random : newArray[count].position = newArray[count].position

    let position: number = newArray[count].position
    let toValueOfPlayer: any; // doubt !!

    // declaring the winner and changing position when facing snake or ladder

    toValueOfPlayer = cellData.find((ele) => ele.id === position)?.to

    if (toValueOfPlayer !== '') {
      newArray[count].position = toValueOfPlayer
    }

    setListOfPlayers([...newArray])

    cellData.find((ele) => ele.players.includes(listOfPlayers[count].icon))?.players.splice(0, 1)
    cellData.find((ele) => ele.id === listOfPlayers[count].position)?.players.push(listOfPlayers[count].icon)

    // show the winner

    if (newArray[count].position === 100) {
      console.log(count)
      setWinner({
        name: listOfPlayers[count].name,
        icon: listOfPlayers[count].icon,
      })

      winnerAudio.play()
      setEnd(true)
    }

    setCellData(cellData)

    count === playersOrder - 1 ? setCount(0) : setCount(count + 1)

    let currentHistory = {
      icon: listOfPlayers[count].icon,
      random: random,
      position: listOfPlayers[count].position,
    }
    setHistory([...history, currentHistory])
  }

  function makeGridVisible(): void {
    setShowGrid(!showGrid)
  }

  return (
    <>

      <div className='Whole-display' >
        {show && <AlertWindow setInputForm={setInputForm} text={text} setShow={setShow} show={show} />}

        {end && <WinnerPopUp icon={winner.icon} name={winner.name} setEnd={setEnd} />}
        {inputForm && <InputWindow makeGridVisible={makeGridVisible} setInputForm={setInputForm} sentData={bringData} setShow={setShow} show={show} setText={setText} />}

        {
          showGrid && (
            <>
              <div className='fixed-window'>

                <div className='partition'>

                  <div id='partition-board'>
                    <div id='board-grid' >
                      {
                        cellData.map((element: ICellData, index: number) => {
                          return (
                            <Cell dataObject={element} index={index} />
                          )
                        })
                      }
                    </div>
                  </div>

                  <div id='partition-buttons' >
                    <div className="top-right" id="dice-image" ><div id="imageOfGame" ></div></div>
                    <div className="top-right" id="show-name">{currentplayer}</div>
                    <div className="top-right" id="points-board" >{randomNumber}</div>
                    <div className="top-right" id="start-button" onClick={playGame}>PLAY</div>
                    <div className="top-right" id="refresh-button" onClick={
                      () => {
                        window.location.reload()
                      }}>RESET</div>
                  </div>

                  <div id='partition-score-board'>
                    <div className="scoreOne">
                      <h2 id="player-name">{winner.name}</h2>
                      <h2 id='player-one-score'>
                        {winner.icon}
                      </h2>
                    </div>
                  </div>

                </div>

              </div>

              <div className='scroll-down-window'>
                <div id='tag' style={{ backgroundColor: '#eed970', height: '7vh',display:'flex',justifyContent:'space-around'}}>
                  <div id='tag-move'>🔢</div>
                  <div id='tag-player'>📛</div>
                  <div id='tag-diceGot'>🎲</div>
                  <div id='tag-position'>🪑</div>
                  <div>🔃</div>
                </div>
                {history.map((ele: IHistory, index: number) => {
                  let inOrDec: string;

                  index > playersOrder ? (ele.position === history[index - (playersOrder)].position ? inOrDec = '⏳' : (ele.position > history[index - (playersOrder)].position ? inOrDec = '⬆' : inOrDec = '⬇')) : (inOrDec = '⬆') // setting increment decrement symbols

                  return (
                    <>
                      <ScrollDownWindow dataObject={ele} index={index} key={index} inOrDec={inOrDec} />
                    </>
                  )
                })}
              </div>
            </>
          )}
      </div>
    </>
  )
}

export default App