import fs from 'fs'


function sumFromFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile('data/nums.txt', 'utf8', (err, str) => {
            if (err) reject(err)
            else {
                let strs = []
                strs.push(str)
                let splitedStrs = strs[0].split('\n')
                let cleanStrs = splitedStrs.filter(str => str !== '')
                let nums = cleanStrs.map(str => +str)
                let sum = 0

                nums.forEach(num => {
                    sum += num
                })

                resolve(sum)
            }

        })
    })
}


sumFromFile('data/nums.txt')
    .then(sum => console.log('Sum:', sum))
    .catch(err => console.log('Cannot sum:', err))