const arr = [336, 246, 147, 172, 219, 110, 123, 109]
const sum = 676
let elementAmount = 0

let result = null
let resultSums = []
let complexResults = []

function subset_sum(numbers, target, partials) {
    let s, n, remaining

    partials = partials || []
    s = partials.reduce( (a, b) => a + b, 0)

    if (s > target || partials.length > elementAmount) 
        return null
    
    if (s <= target && partials.length == elementAmount) {
        if(!result) 
            result = []
        
        resultSums.push(s)
        result.push(partials)
        complexResults.push({s, partials})
    }

    for (let i = 0; i < numbers.length; i++) {
        n = numbers[i]
        remaining = numbers.slice(i + 1)
        subset_sum(remaining, target, partials.concat([n]))
    }
    return result
}

function tryRun() {
    console.log(elementAmount)
    let res = subset_sum(arr, sum)
    if(res == null) {
        console.log("oops")
        elementAmount = elementAmount - 1
        console.log("aaa")
        return tryRun()
    } else {
        if(elementAmount > 4) {
            console.log("bbb")
            return tryRun()                
        }
    }
    console.log("ccc")
    return res
}


console.log(`Finding the closest sum and its elements to ${sum}!`)
let allResults = []
for (elementAmount; elementAmount < arr.length; elementAmount++) {
    let res = subset_sum(arr, sum)
    let sorted = complexResults.sort((a,b) => b.s - a.s);
    allResults.push(sorted[0])
}

let allResultsSorted = allResults.sort((a,b) => b.s - a.s);
console.log(allResultsSorted[0])
