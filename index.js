let cards = document.querySelectorAll(".card");
function clickCard() {
    cards.forEach(card => card.onclick = () => {
        document.body.style.overflow = 'hidden';
        const openedCard = document.querySelector(".openedCard");
        openedCard.style.opacity = "1";
        openedCard.style.display = "flex";
        const title = card.querySelector("h1").innerHTML;
        console.log(title)
        if (title === "Biznes binası layihəsi") {
            const image1 = "./images/Layihələr (portfolio) (3)_page-0004.jpg";
            const image2 = "./images/Layihələr (portfolio) (3)_page-0005.jpg";
            const description = card.querySelector("span").innerHTML;
            const programs = card.querySelector("ert").innerHTML;
            openedCard.innerHTML =
                `<div class="leftSideCard" style="justify-content: flex-start;">
            <img src="${image1}" class="cardImage" />
            <img src="${image2}" class="cardImage" />
            </div>
            <a href="./images/Biznes Binası.rar" download class="downloadPortfolioBtn">Yüklə</a>
            <div class="rightSideCard">
                <h1 class=".cardTitle">${title} </h1>
                <p class=".cardDescription">${description}</p>
                <h3 class=".cardPrograms">${programs}</h3>
            </div>
            <button class="closeCardBtn">X</button>
        `;
        }
        else if (title == "Şəhid Bulağı layihəsi") {
            const image1 = "./images/Layihələr (portfolio) (3)_page-0002.jpg";
            const image2 = "./images/Layihələr (portfolio) (3)_page-0003.jpg";
            const description = card.querySelector("span").innerHTML;
            const programs = card.querySelector("ert").innerHTML;
            openedCard.innerHTML =
                `<div class="leftSideCard" style="justify-content: flex-start;">
            <img src="${image1}" class="cardImage" />
            <img src="${image2}" class="cardImage" />
            </div>
            <a href="./images/Şəhid Bulağı.rar" download class="downloadPortfolioBtn">Yüklə</a>
            <div class="rightSideCard">
                <h1 class=".cardTitle">${title} </h1>
                <p class=".cardDescription">${description}</p>
                <h3 class=".cardPrograms">${programs}</h3>
            </div>
            <button class="closeCardBtn">X</button>
        `;
        }
        else if (title === "Məktəb layihəsi") {
            const image1 = "./images/Layihələr (portfolio) (3)_page-0007.jpg";
            const image2 = "./images/Layihələr (portfolio) (3)_page-0008.jpg";
            const image3 = "./images/Layihələr (portfolio) (3)_page-0009.jpg";
            const programs = card.querySelector("ert").innerHTML;

            openedCard.innerHTML =
                `<div class="leftSideCard" style="justify-content: flex-start;">
                <img src="${image1}" class="cardImage" />
                <img src="${image2}" class="cardImage" />          
                <img src="${image3}" class="cardImage" />                      
                </div>
                <a href="./images/Məktəb Layihəsi.rar" download class="downloadPortfolioBtn">Yüklə</a>
                <div class="rightSideCard">
                    <h1 class=".cardTitle">${title} </h1>
                    <h3 class=".cardPrograms">${programs}</h3>
                </div>
                <button class="closeCardBtn">X</button>
            `;
        }
        else if (title === "Yaşayış Kompleksi layihəsi") {
            const image1 = "./images/4.png";
            const image2 = "./images/5.jpg";
            const programs = card.querySelector("ert").innerHTML;
            openedCard.innerHTML =
                `<div class="leftSideCard" style="justify-content: flex-start;">
            <img src="${image1}" class="cardImage" />
            <img src="${image2}" class="cardImage" />
            </div>
            <a href="./images/Yaşayış Kompleksi.rar" download class="downloadPortfolioBtn">Yüklə</a>
            <div class="rightSideCard">
                <h1 class=".cardTitle">${title} </h1>
                <h3 class=".cardPrograms">${programs}</h3>
            </div>
            <button class="closeCardBtn">X</button>
        `;
        }
        else if (title === "Fərdi yaşayış evi layihəsi") {
            const image = card.querySelector("img").src;
            const programs = card.querySelector("ert").innerHTML;

            openedCard.innerHTML =
                `<div class="leftSideCard">
                <img src="${image}" class="cardImage" />
                </div>
                <a href="${image}" download class="downloadPortfolioBtn">Yüklə</a>
                <div class="rightSideCard">
                    <h1 class=".cardTitle">${title} </h1>
                    <h3 class=".cardPrograms">${programs}</h3>
                </div>
                <button class="closeCardBtn">X</button>
            `;
        }
        else {
            const image = card.querySelector("img").src;
            const description = card.querySelector("span").innerHTML;
            const programs = card.querySelector("ert").innerHTML;

            openedCard.innerHTML =
                `<div class="leftSideCard">
                <img src="${image}" class="cardImage" />
                </div>
                <a href="${image}" download class="downloadPortfolioBtn">Yüklə</a>
                <div class="rightSideCard">
                    <h1 class=".cardTitle">${title} </h1>
                    <p class=".cardDescription">${description}</p>
                    <h3 class=".cardPrograms">${programs}</h3>
                </div>
                <button class="closeCardBtn">X</button>
            `;
        }

        document.querySelector(".closeCardBtn").onclick = () => {
            const openedCard = document.querySelector(".openedCard");
            openedCard.innerHTML = "";
            openedCard.style.opacity = "0";
            openedCard.style.display = "none";
            document.body.style.overflow = '';
        }
    })
}

clickCard();

function hoverCard() {
    cards.forEach(card => card.onmouseenter = () => {
        const image = card.querySelector("img");
        image.style.width = "70%"
        image.style.transition = "0.4s all"
    })

    cards.forEach(card => card.onmouseleave = () => {
        const image = card.querySelector("img");
        image.style.width = "95%"
    })
}
hoverCard()

window.onload = () => {
    document.body.style.overflow = '';
    const openedCard = document.querySelector(".openedCard");
    openedCard.innerHTML = "";
    openedCard.style.opacity = "0";
    openedCard.style.display = "none"
}

