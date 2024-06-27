//shop

function printCards(no, text) {

    return new Promise(function (resolve, reject) {
        console.log("started printing the cards")
        console.log("going...")
        var isPrinted = true
        if (isPrinted) {
            console.log(no + " cards printed")
            var printedCards = 100
            resolve(printedCards)
        } else {
            reject(0)
        }
    })

}
//college
/*
var promiseObj = printCards(100, "NIT")

promiseObj.then(
    function (printedCards) {
        console.log('4,5,6')
    },
    function () {
console.log('find some other solution')
    }
)
// another ways
promiseObj
.then(
    function (printedCards) {
        console.log('4,5,6')
    }
)
.catch(
    function () {
        console.log('find some other solution')
    }
)
.finally(
    function () {
       console.log("success/failure")
    }
)

*/

async function getCards() {
    try {
        var result = await printCards(100, "nit")
        console.log(result + " cards recived")
        console.log('4,5,6')
    } catch (ex) {
        console.log(ex)
    } finally {

    }
}

getCards()




