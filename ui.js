//Uİ constructorı oluşturduk
function UI(){


}
UI.prototype.addFilmToUI=function(newFilm){
                                          /*  <!-- <tr>
                                            <td><img src="" class="img-fluid img-thumbnail"></td>
                                            <td></td>
                                            <td></td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr> -->
                                          */
//seçme işlemi yapıyoruz

const filmList=document.getElementById("films");
//inner html ye <tr> leri eklicez
filmList.innerHTML +=
`
<tr>

                                            <td><img src="${newFilm.url}"class="img-fluid img-thumbnail"></td>
                                            <td>${newFilm.title}</td>
                                            <td>${newFilm.director}</td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr>
                                          `

}
//ilk newfilmin urlsini yazdırdık,newfilmin title nı,newfilmin director sini
//arayüze filmi eklemiş olacak
UI.prototype.clearInputs=function(element1,element2,element3){
    element1.value="";
    element2.value="";
    element3.value="";
}
UI.prototype.displayMessages=function(message,type){
    const cardBody=document.querySelector(".card-body");//cardbody i seçicez

    //alert divini oluşturma
    const div=document.createElement("div");

    div.className=`alert alert-${type}`;
    div.textContent=message;

    cardBody.appendChild(div);//cardbodyi çocuk olarak ekledik
   
    setTimeout(function(){  //1sn sonra bildirim silinecek
        div.remove();
    },1000);

}

UI.prototype.loadAllFilms = function(films){
const filmList = document.getElementById("films");
 //array üzerinde foreach ile gezinmek gerek
  films.forEach(function(film){
filmList.innerHTML +=
`<tr>

<td><img src="${film.url}"class="img-fluid img-thumbnail"></td>
<td>${film.title}</td>
<td>${film.director}</td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>`;

  });

}
UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
}
UI.prototype.clearAllFilmsFromUI=function(){
    const filmList=document.getElementById("films");

    while(filmList.firstElementChild !==null){//child olduğu sürece
filmList.firstElementChild.remove();
    }
}