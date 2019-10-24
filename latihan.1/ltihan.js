var personnel = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },]
console.log (trrue = personnel.filter(ppi => ppi.isForceUser  === true))
 console.log (falsee = personnel.filter (pi => pi.isForceUser === false))

 document.write("<br>")

console.log(shootingScore = personnel.reduce((acc,personellll)=> acc + personellll.shootingScore,0))

document.write("<br>")

console.log (personnell = personnel.map(pii => pii.pilotingScore) )
document.write("<br>")


    



