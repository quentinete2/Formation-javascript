class Personne {
  constructor(prenom, nom, statut = false) {
      this.prenom = prenom;
      this.nom = nom;
      this.statut = statut;
  }
}
const personnes = JSON.parse(localStorage.getItem('personnes')) || [];
function ajouterPersonne(prenom, nom) {
  const Newpers = new Personne(prenom, nom);
  personnes.push(Newpers);
  persisterDonnees();
  return Newpers;
}

function enleverPersonne(index) {
  if (index >= 0 && index < personnes.length) {
      personnes.splice(index, 1);
      persisterDonnees();
  } else {
      console.error("Index invalide");
  }
}
function persisterDonnees() {
  localStorage.setItem('personnes', JSON.stringify(personnes));
}

document.getElementById('btnAjouter').addEventListener('click', () => {
  const prenom = document.getElementById('prenom').value;
  const nom = document.getElementById('nom').value;
  if (prenom && nom) {
      const Newpers = ajouterPersonne(prenom, nom);
      afficherPersonnes();
      document.getElementById('prenom').value = '';
      document.getElementById('nom').value = '';
  } else {
      alert('Veuillez remplir tous les champs.');
  }
});
function afficherPersonnes() {
  const tbody = document.getElementById('myTbody');
  tbody.innerHTML = '';
  personnes.forEach((personne, index) => {
      const template = document.getElementById('templateTr');
      const tr = template.content.cloneNode(true).querySelector('tr');
      tr.children[0].textContent = personne.prenom;
      tr.children[1].textContent = personne.nom;
      tr.classList.add("table-success");
      const btndelete = tr.children[2].querySelector('button');
      const btnChangerStatut = tr.children[3].querySelector('button');

      btndelete.addEventListener('click', () => {
          enleverPersonne(index);
          afficherPersonnes();
      });
      btnChangerStatut.onclick = (evt) => {
        let tr = evt.target.closest("tr");
        let i = tr.rowIndex -1;
        personnes[i].status = !personnes[i].status;
        if (personnes[i].status) {
          tr.classList.remove("table-danger");
          tr.classList.add("table-success");
        } else {
          tr.classList.remove("table-success");
          tr.classList.add("table-danger");
        }
      tbody.appendChild(clone);
    }
      if (personne.statut) {
          tr.classList.add('table-success');
      }
      tbody.appendChild(tr);
  });
}
window.addEventListener('DOMContentLoaded', afficherPersonnes);