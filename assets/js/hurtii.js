
$('#myForm').submit(function(e) {
  e.preventDefault();
  // Show full page Loading Overlay
  $("#overlay").LoadingOverlay("show", {
    image: "",
    fontawesome: "fa fa-spinner fa-spin"
  });

  // Hide it after 3 seconds
  setTimeout(function() {
    $("#overlay").LoadingOverlay("hide");
  }, 3000);
  var dData = function() {
    return Math.round(Math.random() * 80) + 10
  };
  var youData = function() {
    return Math.round(Math.random() * 90) + 20
  };

  var barChartData = {
    labels: ["You", "DramaMamas", "Divas", "Kardashians"],
    datasets: [{
      fillColor: "grey",
      data: [youData(), dData(), dData(), dData()]
    }]
  }

  var index = 3;
  var ctx = document.getElementById("canvas").getContext("2d");
  var barChartDemo = new Chart(ctx).Bar(barChartData, {
      responsive: true,
      barValueSpacing: 2
    })
    // change color of first bar
  barChartDemo.datasets[0].bars[0].fillColor = "rgba(255,0,0,1)";
  barChartDemo.update();;



  $("#myForm").hide();
  $("#unicorn").hide();
  run();
})

$("#buttonId").click(function() {
  $('html, body').animate({
    scrollTop: $("#row").offset().top
  }, 2000);
});

$(document).on('click', '#test-button', function() {
  location.reload();
});


$(function() {
  $("[rel='tooltip']").tooltip();
});

//Asks to describe your butthurt problem - need to loop it back around if it's 2 words or less
var germsearch = document.forms["myForm"]["name"].value;
var radio = document.forms["myForm"]["optionsRadios"].value;
var select = document.forms["myForm"]["exampleSelect1"].value;
var select2 = document.forms["myForm"]["exampleSelect2"].value;
var select3 = document.forms["myForm"]["exampleSelect3"].value;
var squish = [germsearch, radio, select];
var soSpecial = (germsearch + ', you are so Special');
var imageSubtitle = (germsearch + ", here is a special image just for you. May the healing begin");


//var imageItself = (putImage);


var list = '<li class="list-group-item">';

var listFunc = function(ass) {
  return (
    ('<a href="#/" class="list-group-item">' + ass + '</a>')
  )
}

function validateForm() {
  var radios = document.getElementsByName("optionsRadios, optionsPolitics");
  var formValid = false;

  var i = 0;
  while (!formValid && i < radios.length) {
    if (radios[i].checked) formValid = true;
    i++;
  }

  if (!formValid) alert("Must check some option!");
  return formValid;
}

function run() {


  var myArrayPix = [
    './assets/img/cry/1.png',
    './assets/img/cry/2.png',
    './assets/img/cry/3.png',
    './assets/img/cry/4.png',
    './assets/img/cry/5.png'
  ]
  var myArray = [
    'Eat carbs. Seriously, carbs have magic healing abilities that the original monks themselves used to be able to get ripped abs.',
    'DO <b>CROSSFIT</b>! OH MY GOD YOU WILL BE RIPPED IF U DO SOME CROSSFIT! CROSSFIT!!! IT WILL MAKE YOU HURT LESS BY HURTING MORE!!! <b>CROSSFIT</b>!!!',
    'Transfer your pain by listening to Ariana Grande.  People have been known to instantly feel better by listening to Ariana attempting to string words together and sing.',
    'Bathe.  Taking a weekly bath will not only make you feel better but those who are around you will want to be around you again.  If you’ve not noticed, this is why no one is around you right this very moment.',
    'Hug a tree.  Only the mystics who live in a micro cardboard shelter in the commune in the field have obtained such oneness with the universe.',
    'Consult your jobless friends who are writing their novel in Starbucks.  Yes, that person who does not need a job and writes all day drinking coffee?  Yes, he has all the answers to the universe.  You don\’t even need to ask him because he\’s going to tell you about it.'
  ];

  var rand = myArray[Math.round(Math.random() * (myArray.length - 1))];
  var randPix = myArrayPix[Math.round(Math.random() * (myArrayPix.length - 1))];
  var germsearch = document.forms["myForm"]["name"].value;
  var bully = document.forms["myForm"]["bName"].value;
  //var radio = document.forms["myForm"]["optionsRadios"].value;
  var radio = $("input[name=optionsRadios]:checked").val();
  var select1 = document.forms["myForm"]["exampleSelect1"].value;
  var select2 = document.forms["myForm"]["exampleSelect2"].value;
  var select3 = document.forms["myForm"]["exampleSelect3"].value;
  var squish = [germsearch, radio, select];
  var availableOptions = $("#exampleSelect1 option");
  var selectValue = $("#exampleSelect1 option:selected").text();
  var percentage = null;
  var headBanner = $("#jumbotron").css("background");
  var jumboChange = $("#iSupport");
  var getPolitics = $("input[name=optionsPolitics]:checked").val();
  // debugger
  var politico;
  if (getPolitics.toLowerCase() == "conservative") {
    headbanner = $(".jumbotron").addClass("jumbotron-consv");
    $('body').css('background-image', 'url(./assets/img/bg/barack2.jpg)');
    document.getElementById('iSupport').innerHTML = germsearch + " supports HILLARY!";
    document.getElementById('iSupportP').innerHTML = "Thank you " + germsearch + " for supporting the most awesome lady in the world! We have planted a tree in at a hippy commune in your name for millions to hug";
    //var flipswitch = "<b>I heart Bernie Sanders</b> bumper stickers and constant talk about <b>Nobamacare</b>!"
  } else {
    headbanner = $(".jumbotron").addClass("jumbotron-lib");
    $('body').css('background-image', 'url(./assets/img/bg/murica.jpg)');
    document.getElementById('iSupport').innerHTML = germsearch + " supports TED CRUZ!";
    document.getElementById('iSupportP').innerHTML = "Thank you " + germsearch + " for supporting the \"<i>right wingin\' and bitter clingin'\ proud clingers of our guns, our God and our religions and our Constitution! You are red enough!\"</i> -S. Palin ";

  }

  if (getPolitics.toLowerCase() == "conservative") {
    var flipSwitch = "<b>I heart Bernie Sanders</b> bumper stickers and constant talk about <b>Nobamacare</b>!";
  } else {
    var flipSwitch = "talk about your <b>AK47 Cannon Laser Guns</b> and collection of <b>Ted Nugent 8-Track Cassettes</b>!";
  }

  $('html, body').animate({
    scrollTop: $("#upHere").offset().top
  }, 80);
  document.getElementById('ouchie').innerHTML = germsearch + ", you have definitely been hurt";
  document.getElementById('intro').innerHTML = ("<div class=\"media\"><div class=\"media-left\"> <img class\=\"media-object\" src\= " + randPix + " alt=\"...\"></div> " + "<div class=\"media-body\">" + "<p>Dear sweet, precious " + germsearch + " it appears that " + bully + " has placed a whooping on your butt. Please find the nearest blankey and snuggle with it.  Meanwhile, ima hang with " + bully + " because honestly you're driving me nuts with your " + flipSwitch + "</p></div></div><br>");
  document.getElementById('container').innerHTML = ("<div class=\"list-group\"><a href=\"#/\" class=\"list-group-item active\">  <i class=\"fa fa-ambulance\"></i><b> Your Feels Report</b></a>") + (listFunc("<i class=\"fa fa-heartbeat\"></i><b> Classification: </b>" + germsearch + " is " + radio)) + (listFunc("<i class=\"fa fa-medkit\"></i><b> Issue:</b> " + germsearch + select1)) + (listFunc("<i class=\"fa fa-hospital-o\"></i><b> Pain Interpretation:</b> " + select3)) + (listFunc("<i class=\"fa fa-film\"></i><b> Based on Movie Preference:</b> " + germsearch + select2)) + (listFunc("<i class=\"fa fa-hand-peace-o\"></i><b> Offender: </b>" + bully + "<i>, who is probably really awesome.</i>")) + (listFunc("<i class=\"fa fa-medkit\"></i><b> Prognosis:</b> We have concluded that " + germsearch + " is a giant baby and needs to get on with life. The fact that " + germsearch + select + " says it all right there.")) +
     (listFunc("<i class=\"fa fa-heart\"></i><b> Conclusion:</b><p>" + rand + "</p>")) + "<br>" + ("<button class=\"btn btn-primary\" id=\"test-button\"><span class=\"glyphicon glyphicon-refresh\"></span> Try Again!</button>") + " " + ("<button data-toggle=\"modal\" data-target=\"#myModal\" id=\"#myModal\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-cog\"></span> Stuff For Nerds</button><br><br>");

  document.getElementById('imageHeader').innerHTML = ("Your \'Feels\' Score");
  document.getElementById('imageSubtitle').innerHTML = (germsearch + ", do your feelings need to be justified by a chart? Well boy-oh-boy do we have the chart for you.  Just look how your feels rank on the chart below.  Good job! You\'re special like everyone else! ");
  document.getElementById('buttonId').innerHTML = ("Click For Your Report");
}
