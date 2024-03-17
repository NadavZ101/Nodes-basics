import fs from 'fs'
import ms from 'ms'


function getRelativeTime() {
    let result
    fs.readFile('data/time-stamps.txt', 'utf8', (err, content) => {
        if (err) return console.log('Had issues with reading the file')
        let timeStrs = []
        timeStrs.push(content)
        console.log(timeStrs)

        let cleanTimeStrs = timeStrs[0].split('\n')
        console.log(cleanTimeStrs)

        cleanTimeStrs.forEach(timeStr => {
            console.log(ms(+timeStr, { long: true }))
        })
    })
}

getRelativeTime()

