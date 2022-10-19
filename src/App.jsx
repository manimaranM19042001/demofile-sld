import './game.css'
import { useState } from 'react';
import MyProps from './props.jsx'
import CellData from './extraFIles/api';

function App() {


    const [count, setCount] = useState(0)
    const [listOfPlayers, setListOfPlayers] = useState(
        [
            {
                name: 'A',
                icon: '👽',
                position: 5,
            },
            {
                name: 'B',
                icon: '🤖',
                position: 7,
            },
            {
                name: 'C',
                icon: '👻',
                position: 4,
            },
            {
                name: 'D',
                icon: '🤡',
                position: 9,
            }
        ]
    )


    let playersOrder = listOfPlayers.length

    // let count = 1
    let random = Math.ceil(Math.random() * 6)

    function startGame() {

        console.log(count)
        // listOfPlayers[count].position += random
        // let newList = listOfPlayers
        // newList[count].position = newList[count].position + random
        // setListOfPlayers(listOfPlayers[count].position+=random)
        // console.log(listOfPlayers)

            let newArr = [...listOfPlayers]; // copying the old datas array
            newArr[count].position += random ; // replace e.target.value with whatever you want to change it to

            console.log(newArr[count].position)

            setListOfPlayers(newArr); // ??


            // let newList = [...listOfPlayers]
            // setListOfPlayers([...newList])

            if (count == playersOrder - 1) {
                setCount(0)
            } else {
                setCount(count + 1)
            }

        }

        return (
            <>
                <div className='display'>
                    <div className="container">
                        <div className="board">
                            <div id='one'>
                                <div id='board-grid'>
                                    {CellData.map((element) => {
                                        return (<MyProps
                                            key={element.id}
                                            nameOfPlayes={element.players}
                                            id={element.id}
                                            cellNumber={element.number}
                                            icon={element.image}
                                            toPlace={element.to}
                                        />)
                                    })}
                                </div>
                            </div>
                            <div id='two'>
                                <div className="right-top" id="dice-image" >Dice</div>
                                <div className="right-top" id="show-name">Name</div>
                                <div className="right-top" id="points-board" >Points</div>
                                <div className="right-top" id="start-button" onClick={startGame}>start</div>
                                <div className="right-top" id="refresh-button">RESET</div>
                            </div>
                            <div id='Three'>
                                <div className="scoreOne">
                                    <h2 id='player-one-score'>
                                    </h2>
                                </div>
                                <div className="scoreTwo">
                                    <h2 id='player-two-score'>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mani' style={{ color: 'White' }}>
                    </div>
                </div>
            </>
        );
    }

    export default App;