document.getElementById("btnAjouter").onclick = () => {
    const fruitInput = document.getElementById('fruit').value;
    document.getElementById('fruit').value='';

    if (fruitInput !="") {
        const p = document.createElement('tr'); 
        const p1 = document.createElement('td'); 
        p1.innerHTML = fruitInput;  
        const p2 = document.createElement('td'); 
        const p3 = document.createElement('button'); 
        p3.className = 'btn btn-danger';
        
        p3.onclick=(event)=>{
            const locate = event.target.closest('tr');
            locate.remove();
        }
        const p4 = document.createElement('i'); 
        p4.className = 'fa fa-trash';

        p.appendChild(p1);
        p.appendChild(p2);
        p2.appendChild(p3);
        p3.appendChild(p4);
        document.getElementById('myTbody').appendChild(p);
    }

};


