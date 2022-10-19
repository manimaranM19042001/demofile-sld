const snakeScon = '🐍'
const ladderIcon = '🚀'
const snakes = [
    {
        id: 27,
        to: 5,
    },
    {
        id: 40,
        to: 3,
    },
    {
        id: 43,
        to: 18,
    },
    {
        id: 54,
        to: 31,
    },
    {
        id: 66,
        to: 45,
    }, {
        id: 76,
        to: 58,
    }, {
        id: 89,
        to: 53,
    },
    {
        id: 99,
        to: 41,
    },
]

const ladder = [
    {
        id: 4,
        to: 25,
    },
    {
        id: 13,
        to: 46,
    },
    {
        id: 43,
        to: 49,
    },
    {
        id: 42,
        to: 63,
    },
    {
        id: 62,
        to: 81,
    },
    {
        id: 50,
        to: 69,
    },
    {
        id: 74,
        to: 92,
    },
]

const CellData = []

let rows = 10
let column = 10
let count = 0

for (let i = (rows * column); i > 0; i -= (column)) {
    count++
    if (count % 2 !== 0) {
        for (let j = i; j > (i - column); j--) {
            CellData.push({
                id:j,
                number:j,
                players:['🐍','🐍'].join(''),
                image:'',
                from:j,
                to:'',
            })
        }
    } else if (count % 2 == 0) {
        for (let k = (i - (column - 1)); k <= i; k++) {
                        CellData.push({
                            id:k,
                            number:k,
                            players:[],
                            image:'',
                            from:k,
                            to:'',
                        })
        }
    }
}

// Updating Snakes data

snakes.map((snakeData) => {
    CellData.map((cells) => {
        if (cells.id == snakeData.id) {
            cells.to = snakeData.to
            cells.image = snakeScon
        }
    })
})

// Updating Ladders data

ladder.map((ladderData) => {
    CellData.map((cells) => {
        if(cells.id == 100){
            cells.number = '🏆'
        }
        if (cells.id == ladderData.id) {
            cells.to = ladderData.to
            cells.image = ladderIcon
        }
    })
})

export default CellData