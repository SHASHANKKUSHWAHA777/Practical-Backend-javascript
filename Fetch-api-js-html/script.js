async function getanimaldata() {
            const response = await fetch("https://fakerapi.it/api/v1/persons")
            const finaldata = await response.json()
            console.log(finaldata)
}