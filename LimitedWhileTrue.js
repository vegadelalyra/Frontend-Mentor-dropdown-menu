// Create an iterator for the setLimit generator
const LIMIT = 5 // recomend small limits for console's better view 
const INCLUSIVE_LIMIT = 1 
const EXCLUSIVE_LIMIT = 0

const limitIterator = finiteWhileTrue(LIMIT, INCLUSIVE_LIMIT)
console.log('\n -- [EXECUTING A WHILE(TRUE)] -- \n')  

// Iterate through the values using a loop

for (let i = 0; i <= LIMIT*3; i++) {
    const { value, done } = limitIterator.next()
    if (done) break

    console.log(value)
}
console.log('.\n.\n.\n')

function* finiteWhileTrue(limit, inclusiveOrExclusive, step = 0, pace = 1) {
    while (true) {
        yield step % (limit + inclusiveOrExclusive)
        step += pace
    }
}