const mainData = () => {

    const renderAnimateList = (array, ganres) => {
        // console.log(array);
        // console.log(ganres);
    }

    const renderTopAnimate = (array) => {
        const wrapper = document.querySelector('.filter__gallery');
        wrapper.innerHTML = '';
        array.forEach((item) => {
          
            wrapper.insertAdjacentHTML("afterbegin", `
                <div class="product__sidebar__view__item set-bg mix"
                    data-setbg="${item.image}">
                    <div class="ep">${item.rating}</div>
                    <div class="view"><i class="fa fa-eye"></i>${item.views}</div>
                    <h5><a href="/anime-details.html">${item.title}</a></h5>
                </div>              
            `)
        });
        wrapper.querySelectorAll('.set-bg').forEach((elem) => {
            elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
        });
    }

    fetch('./db.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            const ganres = new Set()

            renderTopAnimate(data.anime.sort((a, b) => b.views - a.views).slice(0, 5));

            data.anime.forEach((item) => {
                ganres.add(item.ganre)
            })
            renderAnimateList(data.anime, ganres)
        })
};
mainData();