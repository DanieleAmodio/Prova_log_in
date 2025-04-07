
let controlloUtente= prompt ("sei registrato? (si o no)")
if (controlloUtente) {
    console.log(controlloUtente)
    let tentativo = 0
    let nomeUtente= "lobotka"
    let password= "segreto"
    let parolaChiave="forzanapoli"
    let contatore = ciclo(tentativo,password)
    console.log(contatore)
    tentativo+=contatore
  if (tentativo === 3 ) {
      console.log(`Hai finito i tentativi, esegui la procedura per recuperare la password` )
      let recupero= prompt(" Hai finito i tentativi, esegui la procedura per recuperare la password. Inserisci la tua parola chiave")
      if (recupero===parolaChiave){
       password=prompt("inserisci la nuova password")
        console.log(`la tua nuova password è ${password}`)
      } else{ console.log("ci dispiace non può effettuare il recupero,se ha dimenticato la sua parola chiave effettui di nuovo la registrazione " )}

  } else {
     nomeUtente = prompt("inserisci il Nome Utente ")
     passkey = prompt("inserisci la tua PassKey ")
     parolaChiave = prompt("inserisci la tua Parola chiave ")
  }

}
function ciclo ( tentativo,password)  {
    let contatore=0
  do  { let indovina = prompt (" Inserisci la pass segreta")
    if (indovina === password) {
        console.log("Puoi entrare!")
        break

    } else{
        console.log( " La password inserita è sbagliata")
        
    }
      tentativo++
      console.log( `Hai a disposizione altri ${3-tentativo}`)
} while (tentativo <3)
   contatore+=tentativo
   return contatore
}; 
