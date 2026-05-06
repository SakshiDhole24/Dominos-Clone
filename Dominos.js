document.addEventListener("DOMContentLoaded", function(){
    const container = document.getElementById("bestseller-container");

    container.innerHTML = "";
    menuData.forEach(item => {

        const card = document.createElement("div");
        card.className = "card2";

        card.innerHTML = `
        <img src = "${item.img}" class= "card-img-top">
        
        <div class="card-body">
            <div class = "img-text-left">
                <h5 class = "card-title">${item.name}</h5>
                <p class = "card-text">${item.desc}</p>
                <hr>
                <h6>₹${item.price}</h6>
                <span>${item.spe || ""}</span>
            </div>

            <div class = "img-text-right">
                <a href = "#" class = "add-btn btn-primary">Add +</a>
            </div>
        </div>
        `;

        container.appendChild(card);
    });
});