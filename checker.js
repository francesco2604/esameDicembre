
const fetch = require('node-fetch')


async  function check(url, invocationParameters,  expectedResultData, expectedResultStatus) {

    const checkResult = { // this is the object you need to set and return
        urlChecked: url,
        resultData: null,
        resultStatus: null,
        statusTestPassed: null,
        resultDataAsExpected: null
    }



        const check_response = await fetch('http://localhost:5000/counts'+'?lato1='+invocationParameters.lato1+'&lato2='+invocationParameters.lato2 ,{
                        headers: {
                            'Accept' : 'application/json',
                        }
                    })
    console.log(Object.keys(invocationParameters))
                    const chec_json = await check_response.json()
                    console.log(chec_json)
          return chec_json
}


// funzione che confronta due oggetti semplici e verifica se actual contiene tutti gli attributi di expected, e se per
// questi ha gli stessi valori
function compareResults(expected, actual) {
    if (!expected) return true //always ok if there are no expectations
    if (!actual) return false
    for (let e of Object.keys(expected)) {
        if (actual[e]===undefined || expected[e]!=actual[e]  ) return false
    }
    return true
}

module.exports = check
