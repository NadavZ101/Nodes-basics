import fs from 'fs'

drawSquareToFile()

function drawToFile(toDraw) {
    return new Promise((resolve, reject) => {
        fs.writeFile('data/square-draw.txt', toDraw, err => {
            if (err) reject(err)
            else {
                console.log('Success Writing to file')
                resolve(toDraw)
            }
        })
    })
}

function drawSquareToFile() {
    const str = getSquare(getRandomIntInclusive(3, 20))
    console.log(str)
    drawToFile(str)
        .then(() => {
            setTimeout(drawSquareToFile, 200)
        })
}

function getSquare(size) {
    var str = '*'.repeat(size) + '\n'
    for (let i = 0; i < size; i++) {
        str += '*' + ' '.repeat(size - 2) + '*\n'
    }
    str += '*'.repeat(size) + '\n'
    return str
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}