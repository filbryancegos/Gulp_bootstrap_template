

// //objects
// var fruits = {
//   "green": "apple",
//   "orange": "orange",
//   "yellow": "pomelo"
// }
//
// // array
// var fruits = ["apple", "orange", "pomelo"];

//json =  objects and array

var fruits=[
  {
   "green": "apple",
   "orange": "orange",
   "yellow": "pomelo"
 },

 {
  "green": "apple2",
  "orange": "orange2",
  "yellow": "pomelo2"
},
]


console.log(fruits);
var displayfruits = document.querySelector('#fruits');
var fruits2 = "";

for (var i2 = 0; i2 < fruits.length; i2++) {
  fruits2 += "<p>"+fruits[i2].green+"</p>";
  console.log(fruits2);
}

// displayfruits.html(fruits2);

//get request json using javascript
$(document).ready(function(){
var pagecounter = 1;
  $('#btn').click(function(){
    var ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pagecounter +'.json');
    ourRequest.onload = function() {
      console.log(ourRequest.responseText);
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);

    }
    ourRequest.send();
    pagecounter++;
    if (pagecounter > 3) {
      $("#btn").fadeOut(2000);
    }
  });
});

function renderHTML(data) {
  var HtmlString = '';
  var animal = $('#animal-info');
  for (var i = 0; i < data.length; i++) {
    HtmlString += "<p>" + data[i].name +" " +"is a"+" " + data[i].species+" "+"that likes"+" ";
      for (var v = 0; v < data[i].foods.likes.length; v++) {
        if (v == 0) {
            HtmlString += data[i].foods.likes[v];
        }
      }
    HtmlString += " " + "and dislikes" + " ";
    for (var v = 0; v < data[i].foods.dislikes.length; v++) {
      if (v == 0) {
          HtmlString += data[i].foods.dislikes[v];
      }
    }
    HtmlString += ""+"</p>"
  }
  animal.append(HtmlString);
}

////get request json using javascript
$(document).ready(function(){
  $('#name').click(function(){
    var ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload = function() {
      console.log(ourRequest.responseText);
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTMLname(ourData);

    }
    ourRequest.send();
  });
});

function renderHTMLname(data) {
  var HtmlString = '';
  var name = $('#name');
  for (var i = 0; i < data.length; i++) {
    HtmlString += "<p>" + data[i].foods +" " +"is "+" " + data[i].name;

    HtmlString += ""+"</p>"
  }
  name.append(HtmlString);
}

//window scroll top-bg
$(document).ready(function(){
  var windowHeight = $(window).height();
  var windowScrollPosttop = $(window).scrollTop();
  var windowScrollPostBottom = windowHeight + windowScrollPosttop;

  $.fn.revealOnScroll = function() {

    return this.each(function(){
      var objectOffset = $(this).offset();
      var objectOffsetTop = objectOffset.top;
      // $('.status').html(objectOffsetTop);

      if (!$(this).hasClass("hidden")) {
          $(this).css("opacity", 0);

      }


      if (!$(this).hasClass("animation-complete")) {
        if (windowScrollPostBottom > objectOffsetTop) {
          $(this).animate({"opacity" : 1},
           3000).addClass("animation-complete");
        }
      }
    });

  } // end of scroll here



  $(window).scroll(function(){
    windowHeight = $(window).height();
    windowScrollPosttop = $(window).scrollTop();
    windowScrollPostBottom = windowHeight + windowScrollPosttop;

    $(".color-b").revealOnScroll();

  });

});

//query post jusing ajax and json application
// $(document).ready(function(){
//   var post = $('.wp-post');
//   $.ajax({
//     type: 'GET',
//     url: 'http://2017.dev/wp-json/wp/v2/posts',
//     success: function(data) {
//       console.log('success', data);
//       $.each(data, function(i, data){
//         console.log(data.title.rendered);
//         post.append('<li>' + data.title.rendered +'</li>');
//
//       });
//     }
//   });
// });
