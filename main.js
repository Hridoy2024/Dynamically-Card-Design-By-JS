const cardsElements = document.getElementById("cards");

const data = [
    {
        name: "Jahedul Islam Rasel",
        img: 'https://rameem2003.github.io/oursite/img/gallery/jahid_rasel.jpg',
        position: "Papi",
        Details: "Amar kisu bolar Nai",
    },

    {
        name: "Fahmida Yeasmin",
        img: "https://rameem2003.github.io/oursite/img/gallery/fahmida.jpg",
        position: "President",
        Details: "Deshi Boin",
    },


    {
        name: "Mahmood Hassan Rameem",
        img: "https://rameem2003.github.io/oursite/img/gallery/MAHMOOD%20HASSAN%20RAMEEM%201.jpg",
        position: "CEO",
        Details: "Apni Amader Goru ",

    },

    {
        name: "Abdul Baten",
        img: "https://rameem2003.github.io/oursite/img/gallery/baten.jpg",
        position: "Pagla Member",
        Details: "Tui Ar Valo Hoili Nah",
    },

    {
        name: "Pavel Pathan",
        img: "https://rameem2003.github.io/oursite/img/gallery/pathan.jpg",
        position: "Member",
        Details: "Ek Narite ashokhtoo Hou",
    },

    {
        name: "Mahabul Alam",
        img: "https://rameem2003.github.io/oursite/img/gallery/mahabul_alam.jpg",
        position: "Member",
        Details: "Bibahito Bachelor",
    },

    

];

data.map((ele, i) => {
    const card = document.createElement("div");
    card.classList.add("col-lg-3");
    card.innerHTML = `<div class="card" style="width: 18rem;">
                      <img 
                      src="${ele.img}" 
                      class="card-img-top" 
                      alt="img">
                       <div class="card-body">${ele.Details}
                        <h5 class="card-title">${ele.name}</h5>
                        <p class="card-text">${ele.position}</p>
                        <a href="#" class="btn btn-primary">Click Profile</a>
                         </div>
                         </div>`;

    cardsElements.appendChild(card);

})