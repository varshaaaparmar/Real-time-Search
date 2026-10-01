let users = [
    {
        name: "Riya Shekhawat",
        pic: "https://i.pinimg.com/1200x/6f/1d/68/6f1d681b36ea205985ce68770dd11b7f.jpg",
        bio: "Fashion & Lifestyle"
    },
    {
        name: "Aaina Mehta",
        pic: "https://i.pinimg.com/1200x/d0/02/23/d002230146fc617b1a18acc94ae77fae.jpg",
        bio: "Travel & Photography"
    },
    {
        name: "Dimple Maheshwari",
        pic: "https://i.pinimg.com/736x/ad/ea/67/adea67293c6544282d34b2fb59b3efbb.jpg",
        bio: "Digital Creator"
    },
    {
        name: "Aditya Ahuja",
        pic: "https://i.pinimg.com/1200x/08/96/5b/08965b16ea6aa97a205aa2ff6f4fd4f5.jpg",
        bio: "Content Creator"
    },
    {
        name: "Prachi Dave",
        pic: "https://i.pinimg.com/1200x/f5/99/b9/f599b931910f7e73adcafc1f98db43b7.jpg",
        bio: "Artist"
    },
    {
        name: "Riyaan Sharma",
        pic: "https://i.pinimg.com/736x/52/18/32/52183266247a61aa45c26d283d62765f.jpg",
        bio: "Photographer"
    }
];

let inp = document.querySelector(".inp");
let clrbtn = document.querySelector(".clear-btn");
let cards = document.querySelector(".cards");

function showUsers(arr) {

    arr.forEach((user) => {

        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.src = user.pic;

        let name = document.createElement("h2");
        name.textContent = user.name;

        let bio = document.createElement("p");
        bio.textContent = user.bio;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(bio);

        cards.appendChild(card);
    });
}

showUsers(users);

inp.addEventListener("input", (e) => {

    let newUsers = users.filter((user) => {
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    });

    cards.innerHTML = "";

    showUsers(newUsers);

    if (inp.value && newUsers.length === 0) {
        let h1 = document.createElement("h1");
        h1.textContent = "No user found";
        cards.appendChild(h1);
    }
});

clrbtn.addEventListener("click", () => {
    inp.value = "";
    cards.innerHTML = "";
});