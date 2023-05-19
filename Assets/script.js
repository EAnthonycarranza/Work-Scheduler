$(function() {
  // Event listener for click events on the save button
  $(".saveBtn").on("click", function() {
    // Get the user input from the textarea associated with the clicked button
    var userInput = $(this).siblings(".description").val().trim();
    // Get the id of the time-block containing the button that was clicked
    var timeBlockId = $(this).parent().attr("id");
    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });

  // Apply the past, present, or future class to each time block depending on the current hour
  var currentHour = dayjs().hour();
  $(".time-block").each(function() {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    if (timeBlockHour < currentHour) {
      // If the time block hour is in the past, add class "past" and remove "present" and "future" classes
      $(this).addClass("past").removeClass("present future");
    } else if (timeBlockHour === currentHour) {
      // If the time block hour is the present hour, add class "present" and remove "past" and "future" classes
      $(this).addClass("present").removeClass("past future");
    } else {
      // If the time block hour is in the future, add class "future" and remove "past" and "present" classes
      $(this).addClass("future").removeClass("past present");
    }
  });

  // Get and display the user input from local storage for each time block
  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var savedUserInput = localStorage.getItem(timeBlockId);
    if (savedUserInput) {
      // If there's any saved input for this time block, display it in the textarea
      $(this).find(".description").val(savedUserInput);
    }
  });

  // Display the current date in the header of the page
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
