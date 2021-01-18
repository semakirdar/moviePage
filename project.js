//formu ve inputları seçmem lazım
const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardBody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");
//UI objesini başlatalım
const ui = new UI();

//storage objesi üret
const storage =new Storage();

//tüm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm); //submit olduğunda addfilm fonksiyonunu çalıştırsın
document.addEventListener("DOMContentLoaded",function(){
let films = storage.getFilmsFromStorage();
ui.loadAllFilms(films);
});

cardBody.addEventListener("click",deleteFilm);
clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){

//inputların değerlerini almam gerekiyor.
const title=titleElement.value;
const director=directorElement.value;
const url =urlElement.value;

//inputların dolu olma durumunu konntrol ets
if(title === "" || director === "" || url === "")
{
    ui.displayMessages("tüm alanları doldurunuz","danger");
}
else 
{
    const newFilm=new Film(title,director,url); // yeni film
    
    ui.addFilmToUI(newFilm);//arayüze film ekleme
   storage.addFilmToStorage(newFilm);//storageye film ekleme
    ui.displayMessages("film başarıyla eklendi....","success");
}

ui.clearInputs(titleElement,directorElement,urlElement);



    e.preventDefault();//formun sumbit edilmesini önlemek için
}
function deleteFilm(e){
    if(e.target.id === "delete-film")
    {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("Silme işlemi başarılı...","success");
    }

}
function clearAllFilms(){

    if(confirm("Emin misiniz ?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
   

}