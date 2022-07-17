$("#addBtn").on("click", function(){
  // console.log('button clicked')
  // $("#inputBox").val();
  let inputText = $("#inputBox").val();
   if (inputText !== "") {
    $("#list").append(`<li> ${inputText} <img src="bin.png" alt="delete"> </li>`);
     
   }
  // console.log(inputText);
  $("#inputBox").val("");
}
);

$("#list").on("click","li", function (){
  // console.log("clicked")
  $(this).toggleClass("completed");
});

$("#list").on("click","img", function (){
  // console.log("trashed")
  // $(this).removeClass("completed");
  $(this).parent().fadeOut( "slow" );
});




