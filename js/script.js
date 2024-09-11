function validateluas(){
   //&&
   //|| artinya or
   
    let panjangalas = document.getElementById('panjangalas').value;
    let tinggi = document.getElementById('tinggialas').value;

    if (panjangalas == '' || tinggi == '' || panjangalas.includes('e') || tinggi.includes('e')){
        alert('Form masih kosong');
    }
    console.log(panjangalas);
}