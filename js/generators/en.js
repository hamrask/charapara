var words = [
	"I always",
	"had an",
	"existential",
	"crisis",
	"because",
	"I was",
	"trying",
	"to figure out",
	"what does it all mean?",
	"Like what’s the",
	"purpose of things?",
	"I came",
	"to the",
	"conclusion",
	"that",
	"if we can",
	"advance",
	"the knowledge",
	"of the",
	"world",
	"if we",
	"can do",
	"things",
	"that expand", 
	"the scope",
	"scale of",
	"consciousness",
	"then we’re",
	"better",
	"able" ,
	"ask",
	"the right",
	"questions",
	"become",
	"enlightened",
	"that’s the",
	"only way forward",
	"I studied",
	"physics",
	"business",
	"because" ,
	"figured",
	"in order",
	"to do",
	"a lot",
	"of these",
	"things",
	"you need",
	"to know",
	"how the",
	"universe",
	"works",
	"and you",
	"need to",
	"know",
	"how" ,
	"economy",
	"works",
	"also",
	"need",
	"able",
	"bring",
	"lot of",
	"people",
	"together",
	"to work",
	"with",
	"you",
	"to create",
	"something",
	"Because",
	"it’s",
	"very",
	"difficult",
	"to do",
	"something",
	"as individuals",
	"if it’s",
	"a significant",
	"technology",
	"On January",
	"15, 2009",
	"US Airways",
	"Flight 1549",
	"took",
	"off",
	"with",
	"155 people",
	"from",
	"New York’s",
	"LaGaurdia",
	"Airport",
	"Minutes",
	"later",
	"just",
	"north",
	"the George",
	"Washington",
	"Bridge",
	"it struck",
	"a flock",
	"geese",
	"lost",
	"engine",
	"power",
	"The pilots",
	"managed",
	"to safely",
	"land",
	"on the",
	"Hudson River",
	"off of",
	"midtown",
	"Manhattan",
	"in what",
	"was",
	"famously",
	"dubbed",
	"Miracle on the Hudson"
];

var paragraph_word_count = 50;
var paragraph_line_count = 4;
var line_word_count = [8, 10, 14];
var num_paragraphs = 1;
var num_lines = 0;
var temp_paragraph = "",
  temp_line = "",
  temp_markup;

function generateCharapara(paragraph_count) {
  temp_markup = "";
  temp_line = "";
  temp_paragraph = "";
  num_paragraphs = paragraph_count;
  while (paragraph_count > 0) {
    temp_paragraph = "";
    console.log(paragraph_count);
    for (var j = 0; j <= paragraph_line_count; j++) {
      temp_line = "";
      var rand_line_word_count =
        line_word_count[Math.floor(Math.random() * line_word_count.length)];
      for (var i = 0; i <= rand_line_word_count; i++) {
        temp_line =
          temp_line + words[Math.floor(Math.random() * words.length)] + " ";
      }
      temp_line = temp_line.slice(0, -1) + ". ";
      console.log("One line added: " + temp_paragraph);
      temp_paragraph = temp_paragraph + temp_line;
    }
    temp_markup = temp_markup + "<p>" + temp_paragraph + "</p>";
    paragraph_count = paragraph_count - 1;
  }
  $("#charapara-text-container").html(temp_markup);
  $("#charapara-text-container").addClass("fadeIn");
}

function handleParagraphChange(btn, paragraph_count) {
  $("#charapara-text-container").removeClass("fadeIn");
  $(".para-control-btn").removeClass("control-btn-active");
  try {
    $(btn).addClass("control-btn-active");
  } catch (e) {}
  setTimeout(function () {
    generateCharapara(paragraph_count);
  }, 100);
}

function handleCopyBtnClick() {
  copyToClipboard("charapara-text-container");
}

function copyToClipboard(containerid) {
  var textarea = document.createElement("textarea");
  textarea.id = "temp_element";
  textarea.style.height = 0;
  document.body.appendChild(textarea);
  textarea.value = document.getElementById(containerid).innerText;
  var selector = document.querySelector("#temp_element");
  selector.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  $("#copy-control-btn-success-icon").removeClass("hide");
  $("#copy-control-text").html("Copied");
  setTimeout(function () {
    $("#copy-control-btn-success-icon").addClass("hide");
    $("#copy-control-text").html("Copy");
  }, 5000);
}

function randomizeCharapara() {
  handleParagraphChange(
    $("#para-control-btn-" + num_paragraphs),
    num_paragraphs
  );
}

$(document).ready(function () {
  handleParagraphChange($("#para-control-btn-1"), 1);
});
