import React, { useState } from "react";
import '../styles/input_form.css'
import { IPlayerData } from "../enums_types_and_interfaces/interface";
import audio from "../resources/audio/popUp.mp3"

interface IProps {
    makeGridVisible: Function,
    sentData: Function,
    setInputForm: Function,
    setShow: Function,
    show: boolean,
    setText:Function
}

const InputWindow = ({ makeGridVisible, sentData, setInputForm, setShow, show,setText }: IProps) => {

    let popUpAudio: any = new Audio(audio)

    const emptyInputData: IPlayerData = {
        name: '',
        icon: '',
        position: 0,
    }

    const [inputArr, setInputArr] = useState<IPlayerData[]>([])
    const [inputData, setInputData] = useState<IPlayerData>(emptyInputData)

    function handleChange(e: any) {
        setInputData({ ...inputData, [e.target.name]: e.target.value.toUpperCase(), [e.target.icon]: e.target.value })
    }

    let { name, icon, position } = inputData

    function handleAddButton() {
        console.log(inputArr)

        if (inputData.name === '' || inputData.icon === '') {
            setShow(!show)
            popUpAudio.play()
            setText('PLEASE PROVIDE ALL NEEDED INPUTS')
            setInputForm(false)
        } else {
            let countOfPlayer = inputArr.filter((ele) => ele.name === inputData.name).length
            let countOfIcon = inputArr.filter((ele) => ele.icon === inputData.icon).length

            console.log(countOfIcon)

            if (countOfPlayer === 0 && countOfIcon === 0 && inputData.name !== '' && inputData.icon !== '') {  // Checking whether the player is already in
                if (inputArr.length < 4) {
                    setInputArr([...inputArr, { name, icon, position }])

                    // setting the inputData state to empty to show new input field
                    setInputData(emptyInputData)
                }

            } else {
                popUpAudio.play()
                setText('THE PLAYER / ICON ALREADY EXISTS IN THE GAME')
                setShow(true)
                setInputData(emptyInputData)
            }
        }
    }

    function handleSubmit() {
        if ((inputArr.length === 0)) {

            popUpAudio.play()
            setText('MINIMUM ONE PLAYER NEEDED')
            setShow(true)

        } else {
            setInputForm(false) // for hiding the form after submission
            makeGridVisible() // function for making grid visible
            sentData(inputArr)
        }
    }

    return (
        <>
            <div className="wrapper">
                <div className="heading">ஏணிப்படி 🚀 - பாம்புக்கடி 🐍</div>
                <div className="inputDisplay">
                    <input type="text" name="name" value={inputData.name} onChange={handleChange} placeholder='Enter player name' />
                    <select id="icon-options" name='icon' value={inputData.icon} onChange={handleChange} >
                        <option value="" disabled >Choose your icon</option>
                        <option value='👽'>👽</option>
                        <option value='👻'>👻</option>
                        <option value='😀'>😀</option>
                        <option value='👾'>👾</option>
                    </select><br /><br />

                    <button disabled={inputArr.length == 4 ? true : false} onClick={handleAddButton} >{inputArr.length == 4 ? 'Limit reached' : 'Add player'}</button>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}
export default InputWindow;