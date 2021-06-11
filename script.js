fetch("https://restcountries.eu/rest/v2/all")
.then((response) => {
    return response.json();   
})
.then((result) => {
    display(result)
})
.catch((err) => {
    console.log(err);
});


function display(data){
    let row = document.getElementById('row')

    data.forEach(element => {
        let col = document.createElement('div')
        col.setAttribute('class', 'col-sm-6 col-md-4 col-lg-4')

        let card = document.createElement('div')
        card.setAttribute('class', 'card')

        let cardImg = document.createElement('img')
        cardImg.setAttribute('class', 'card-img-top')
        cardImg.src = element.flag;

        let cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')

        let h2 = document.createElement('h2')
        h2.innerHTML = element.name

        let pTag = document.createElement('p')
        pTag.setAttribute('class', 'card-text')
        pTag.innerHTML = element.capital

        let h3 = document.createElement('h5')
        h3.innerHTML = `Currency Code: ${element.currencies[0].code}, <br> Currency Name: ${element.currencies[0].name} <br> Currency Code: ${element.currencies[0].symbol}`

        cardBody.append(h2, pTag, h3)
        card.append(cardImg, cardBody)
        col.append(card)

        row.append(col)
    });
}
