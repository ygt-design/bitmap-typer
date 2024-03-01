// Function to update font size and letter spacing
function updateFontSizeAndSpacing() {
  const fontSize = $("#font-size").val() / 20 + "in";
  const letterSpacing = ($("#font-size").val() / 400) * 3 + "in";

  $(".letter").css("height", fontSize);
  $(".letter-space").css("width", letterSpacing);
}

// Event handler for font size input
$("#font-size").on("input", function () {
  updateFontSizeAndSpacing();
});

// Event handler for line height input
$("#line-height").on("input", function () {
  const lineHeight = $(this).val() / 50 + "in";
  $("#container").css("line-height", lineHeight);
});

// Set initial scale for the container
const initialScale = $(window).height() / ($("#container").height() - 40);
$("#container").css({ transform: "scale(" + initialScale + ")" });

// Trigger keypress on text input focus
$("#text").focus().trigger("keypress");

// Event handler for text input keyup
$("#text").keyup(function () {
  const textLines = $("#text").val();

  $("#container").empty();

  for (let i = 0; i < textLines.length; i++) {
    if (textLines[i] == " ") {
      $("<div></div>").addClass("letter letter-space").appendTo("#container");
    } else if (textLines[i] == "\n") {
      $("<br />").appendTo("#container");
    } else {
      const letter = textLines[i].toUpperCase();
      $("<img>")
        .attr("src", "a2/" + letter + ".png")
        .addClass("letter letter-" + letter)
        .appendTo("#container");
    }
  }

  if ($("#font-size").val() !== "50" && $("#leading").val() !== "50") {
    updateFontSizeAndSpacing();

    const lineHeight = $("#leading").val() / 50 + "in";
    $("#container").css("line-height", lineHeight);
  }
});

// Event handler for nudge button click
$("#nudge").click(function () {
  $("#menu").fadeOut(200);
  $(".letter").css("cursor", "move").draggable();
});
