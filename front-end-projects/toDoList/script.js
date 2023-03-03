
//CLOSE SİMGESİ EKLE

//Tüm "li" etiketlerini al
var myList = document.getElementsByTagName("li");

var i;
// "li" etiketinin sayısı kadar döngü oluştur.
for (i = 0; i < myList.length; i++) {
  //span etiketini oluştur.
  var span = document.createElement("SPAN");
  //close sınıfını ekle.
  span.className = "close";
  //fontAwesome'dan "times" simgesini temsil eden "i" etiketini oluştur.
  var icon = document.createElement("i");
  icon.className = "fas fa-times";
  span.appendChild(icon);
  //Her bir "li" elemanına "span etiketini ekle."
  myList[i].appendChild(span);
}

function createItem(){
// FontAwesome'dan "circle-check" simgesini temsil eden "i" etiketi oluştur
  var faCircle = document.createElement("i");
  faCircle.classList.add("fa-solid", "fa-circle-check");

  // FontAwesome'dan "circle" simgesini temsil eden "i" etiketi oluştur
  var faCheck = document.createElement("i");
  faCheck.classList.add("fa-regular", "fa-circle");

  // "li" etiketi oluştur
  var li = document.createElement("li");

  // "myInput" alanındaki değeri al
  var inputValue = document.getElementById("myInput").value;

  // "t" değişkeni ile metin düğümü oluştur ve "li" etiketine ekle
  var t = document.createTextNode(" " + inputValue);
  li.appendChild(faCircle);
  li.appendChild(faCheck);
  li.appendChild(t);
  var alert = document.getElementById("alert");
  if (inputValue === '') {
    inputError.style.pointerEvents= "none"
    inputError.style.userSelect= "none"
    alert.style.display = "flex";
  } else {
    // "myUl" listesine "li" elemanını ekle
    document.getElementById("myUl").appendChild(li);
  }

  // "myInput" alanının içeriğini temizle
  document.getElementById("myInput").value = "";

  // "span" etiketi oluştur ve "li" etiketine ekle
  var span = document.createElement("SPAN");
  var icon = document.createElement("i");
  icon.className = "fas fa-times";
  span.className = "close";
  span.appendChild(icon);
  li.appendChild(span);
}

//yeniElement() fonksiyonu
var inputError = document.querySelector("container")
//var inputError = document.getElementById("myInput")
inputError.style.pointerEvents= "auto"
inputError.style.userSelect= "auto"

// Load()
function yeniElement() {
  control()
  createItem()
  // Eğer "myInput" alanı boşsa, önce inputa erişimi engelle, sonra uyarı mesajını göster
  control()

  // "close" sınıfına sahip tüm etiketleri al ve tıklama olayını ekleyerek kapat
  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      control()
      inputError.style.pointerEvents= "auto"
      inputError.style.userSelect= "auto"
    }
  }
  Load()
}

//Enter tuşu ile input'u YeniElement()e yönlendir

var input = document.getElementById("myInput");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    yeniElement();
  }
});


//Close butonuna tıklayınca li'ler'in displayleri kapatılacak.
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    control()
  }

}

//Tıklanılan li etiketlerinin classlist'ine checked ekle.
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



var toggle = document.querySelector('#mode');

toggle.addEventListener('click', function () {
  var on = toggle.classList.toggle('on');
  document.querySelector('.fa-toggle-on').style.display = on ? 'inline-block' : 'none';
  document.querySelector('.fa-toggle-off').style.display = on ? 'none' : 'inline-block';
});



//Alert kapat fonksiyonu
function alertClose() {
  document.getElementById("alert").style.display = "none";
  inputError.style.pointerEvents= "auto"
  inputError.style.userSelect= "auto"
  
}

//darkMode fonksiyonu
function toggleDarkMode() {
  var bodyClass = document.querySelector(".bodyClass");
  bodyClass.classList.toggle("darkMode");
}

//ToggleButton
var toggleButton = document.getElementById("mode");
toggleButton.addEventListener("click", toggleDarkMode);


function control(){
  var li = document.querySelectorAll("li");
  var bos = document.getElementById("bos");
  var allNone = true;
  
  for (var i = 0; i < li.length; i++) {
    if (li[i].style.display !== "none") {
      allNone = false;
      break;
    }
  }
  
  if (allNone) {
    bos.style.display = "block";
  } else {
    bos.style.display = "none";
  }

}

function Load(){
  const todoListElement = document.querySelector('#myUl');
  const todoList = [];
  console.log(todoList)

  // ul elementi altındaki li elementlerinin textContent'ini todoList dizisine ekleyin
todoListElement.querySelectorAll('li').forEach(function(li) {
  todoList.push(li.textContent);
});

window.addEventListener('load', function() {
  const todoListElement = document.querySelector('#myUl');
  todoList.forEach(function(item) {
    const li = document.createElement('li');
    li.textContent = item;
    todoListElement.appendChild(li);
  });
});
}





// 

// // Input alanını seçin
// const inputElement = document.querySelector('#myInput');

// // Yerel depolamada "todoList" anahtarına sahip bir veri varsa, o veriyi getirin. Aksi takdirde, boş bir dizi oluşturun
// let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// // Eğer input alanı boş değilse, input değerini todoList dizisine ekleyin ve depolayın.
// inputElement.addEventListener('keyup', function(event) {
//   if (event.key === 'Enter' && inputElement.value !== '') {
//     todoList.push(inputElement.value);
//     localStorage.setItem('todoList', JSON.stringify(todoList));
//     inputElement.value = '';
//   }
// });

// Sayfa yüklendiğinde, todoList dizisindeki tüm öğeleri listeye ekleyin.









// // todoList dizisindeki tüm öğeleri listeye ekleyin
// todoList.forEach(function(item) {
//   // listeye ekleme işlemi yapılabilir
// });

// const inputElement = document.querySelector('#myInput');
// let todoListt = JSON.parse(localStorage.getItem('todoList')) || [];













