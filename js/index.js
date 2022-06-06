console.log("\"Script running!\" is good");

let myName = "Sonali Tandon";
console.log(myName);

let getVowelCount = (aString) => {
    let lowerCaseString, modifiedString;
    lowerCaseString = aString.toLowerCase();
    modifiedString = lowerCaseString.replaceAll("a", "");
    modifiedString = modifiedString.replaceAll("e", "");
    modifiedString = modifiedString.replaceAll("i", "");
    modifiedString = modifiedString.replaceAll("o", "");
    modifiedString = modifiedString.replaceAll("u", "");
    modifiedString = modifiedString.replaceAll("y", "");
    return lowerCaseString.length - modifiedString.length;
}

let numVowelsInName = getVowelCount(myName);
console.log(numVowelsInName);

h1Element = $("h1");
h1Element.text("Interactive Pet Viewer");

footerElement = $("footer");
footerElement.html("<small>All images from <a href=\"https://unsplash.com/\">unsplash.com</a></small>");

document.getElementById("cats").style.display = "none";
document.getElementById("btnShowDogs").classList.add("active");

$("button").on("click", function () {
    $("#cats").toggle("fast");
    $("#dogs").toggle("fast");
    $("#btnShowDogs").toggleClass("active");
    $("#btnShowCats").toggleClass("active");
});

$("#images img").css("cursor", "pointer");

$("#images img").attr("data-bs-toggle", "modal");
$("#images img").attr("data-bs-target", "#modalelement");

$("#images img").on("click", function () {
    $(".modal").modal("show");
});

$(".modal").on("show.bs.modal", function (event) {
    let imageClicked = $(event.relatedTarget);
    let imageSource = imageClicked.attr("src");
    $("#modalImage").attr("src", imageSource);
});