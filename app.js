document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
 });

document.addEventListener('DOMContentLoaded', function () {
var elems = document.querySelectorAll('.modal');
var instances = M.Modal.init(elems);
});


db.collection('tareas').orderBy('damnificado').onSnapshot( snapshot => {
    let cambios = snapshot.docChanges();
    console.log(cambios);
} );


