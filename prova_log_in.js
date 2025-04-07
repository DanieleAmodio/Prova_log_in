let tentativo = 0
let nomeUtente= "lobotka"
let password= "segreto"
let parolaChiave="forzanapoli"
let controlloUtente= prompt ("sei registrato? (inserisci Nome Utente altrimenti No")
if (controlloUtente===nomeUtente) {
    console.log(controlloUtente)
    let contatore = ciclo(tentativo,password,nomeUtente)
    console.log(contatore)
    tentativo+=contatore
    let controllo = controllato(nomeUtente,password,parolaChiave,tentativo)
  } else {
  nomeUtente = prompt("inserisci il Nome Utente ")
  password= prompt("inserisci la tua Password ")
  parolaChiave = prompt("inserisci la tua Parola chiave ")
  console.log(`Ciao ${nomeUtente}`)
  contatore=ciclo(tentativo,password,nomeUtente)
  tentativo+=contatore
  controllo = controllato(nomeUtente,password,parolaChiave,tentativo)

}

function controllato(nomeUtente,password,parolaChiave,tentativo) {
  if (tentativo === 3 ) {
    console.log(`Hai finito i tentativi, esegui la procedura per recuperare la password` )
    let recupero= prompt(" Hai finito i tentativi, esegui la procedura per recuperare la password. Inserisci la tua parola chiave")
    if (recupero===parolaChiave){
     password=prompt("inserisci la nuova password")
      console.log(`la tua nuova password è ${password}`)
      tentativo=0
      contatore=ciclo(tentativo,password)
      tentativo+=contatore
      if (tentativo === 3 ) { console.log("Hai finito i tentativi e la password e stata cambiata di recente.Contattare l'assistenza ")}

    } else{ console.log("ci dispiace non può effettuare il recupero,se ha dimenticato la sua parola chiave effettui di nuovo la registrazione " )}

} 
}

function ciclo ( tentativo,password)  {
    let contatore=0
  do  { let indovina = prompt (` Ciao ${nomeUtente} Inserisci la password `)
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

