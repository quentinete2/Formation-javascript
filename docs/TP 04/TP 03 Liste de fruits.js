const couleur = [];

document.getElementById("btnAjouter").onclick = () => {
    
    const fruitInput = document.getElementById('fruit').value.trim();
    document.getElementById('fruit').value = '';

    if (fruitInput !== "") {
        const tr = document.createElement('tr');
        const tdFruit = document.createElement('td');
        tdFruit.innerHTML = fruitInput;
        const tdAction = document.createElement('td');
        const btnDelete = document.createElement('button');
        btnDelete.className = 'btn btn-danger';

        btnDelete.onclick = (event) => {
            const nom =event.target.closest("tr").querySelector('td').innerHTML
            const test = confirm('Effacer '+nom+' ?')
            if ( test) {
                const row = event.target.closest('tr');
                row.remove();

                const index = couleur.indexOf(fruitInput);
                if (index !== -1) {
                    couleur.splice(index, 1);
                }

                console.table(couleur);
            }
        };

        const iconDelete = document.createElement('i');
        iconDelete.className = 'fa fa-trash';

        tr.appendChild(tdFruit);
        tr.appendChild(tdAction);
        tdAction.appendChild(btnDelete);
        btnDelete.appendChild(iconDelete);

        document.getElementById('myTbody').appendChild(tr);

        couleur.push(fruitInput);
        console.table(couleur);
    }
};
