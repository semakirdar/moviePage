function Storage(){ //storage consturctorı oluşturuldu

}
Storage.prototype.addFilmToStorage= function(newFilm){
let films =this.getFilmsFromStorage();

films.push(newFilm);

localStorage.setItem("films",JSON.stringify(films));
  }

  Storage.prototype.getFilmsFromStorage=function(){
    let films;//değişken oluşturduk

    //böyle bi değişken var mı diye kontrol ettik
    if(localStorage.getItem("films") === null){
   films=[]; //yoksa boş array oluşturdu
   }
    else{
  //varsa olan değeri almamız gerekiyor
  films=JSON.parse(localStorage.getItem("films"));
  
    }
    return films;
  }
 Storage.prototype.deleteFilmFromStorage = function(filmTitle){
     let films =this.getFilmsFromStorage();
     films.forEach(function(film,index){
if(film.title=== filmTitle){
    films.splice(index,1);
}
     });

     localStorage.setItem("films",JSON.stringify(films));


 }
 Storage.prototype.clearAllFilmsFromStorage = function(){
     localStorage.removeItem("films");
 }