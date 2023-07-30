const search = () => {
    const searchModal = document.querySelector('.search-model');
    const searcBtn = document.querySelector('.icon_search');
    const searcClose = searchModal.querySelector('.search-close-switch');
    const searchInput = searchModal.querySelector('#search-input');

    const searchFunc = (searchStr) => {
        fetch('./db.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {              
                data.filter(dataItem => {
                    console.log(dataItem);
                    return dataItem
                })
            })

    }

    searcBtn.addEventListener('click', () => {
        searchModal.style.display = 'block';
        searchInput.focus();
    });

    searcClose.addEventListener('click', () => {
        searchModal.style.display = '';
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            searchModal.style.display = '';

        }
    });

    searchInput.addEventListener('input', (event) => {
        searchFunc(event.target.value);
    });
}


search();

