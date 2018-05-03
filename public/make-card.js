//renvoie le html d'une card bootstrap pour un match
  const makeCard = item => {
    console.log(item)
    const displayPronoButton = document.getElementsByClassName("button-bet-display")
    let buttonOrProno = `<button type="button" data-match-id="${item.id}" data-teamHome="${item.teamHome}" data-teamOut="${item.teamOut}" data-drapeauHome="${item.drapeauHome}" data-drapeauOut="${item.drapeauOut}" data-localisation="${item.localisation}" data-numbermatch="${item.numberMatch}" class="btn btn-primary button-bet" data-toggle="modal" data-target=".bd-example-modal-lg">Pariez !</button>`
    // if pas de prono buttonOrProno = htmlButton
    // else prono
    // !item.pronoTeamHome return true if undefined or 0
    // object has key
    if ("pronoTeamHome" in item) {
      console.log("prono fait")
      buttonOrProno = `<p class="pari text-success"> Ton pari :  ${item.pronoTeamHome} - ${item.pronoTeamOut} </p>`
    }
      return `
      <div class="card mx-auto mb-3" style="width: 18rem;">
        <div class="card-body pb-0 mb-0 text-center">
          <div class="row mt-1 pb-0">
            <div class="col-6 mb-0"> 
              <img src="${item.drapeauHome}" style="width: 48px; height: 48px" class="rounded">
              <p class="name"> ${item.teamHome} </p>
            </div>
            <div class="col-6 mb-0">
              <img src="${item.drapeauOut}" style="width: 48px; height: 48px" class="rounded">
              <p class="name"> ${item.teamOut} </p>
            </div>
          </div>
        </div>
        <div class="text-center my-0 pb-2 button-bet-display">
        ${buttonOrProno}
        </div>
        <!-- Large modal -->
      </div>
      `
  }

export default makeCard
