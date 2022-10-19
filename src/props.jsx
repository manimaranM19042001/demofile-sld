function MyProps(props) {
    let names = props.nameOfPlayes

    return (
        <div className="hello" id ={`ID-${props.id.toString()}`}>
            <div>{names}</div>
            <div className="placeHolder">{props.cellNumber}</div>
            <div className="icon">{props.icon}</div>
            <div className="toPlace">{props.toPlace}</div>
        </div>
    )
}

export default MyProps

