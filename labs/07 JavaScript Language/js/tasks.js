// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = [];

var count1 = 0;
var start = false;

// Get the task:
var task = document.getElementById('task');

// Reference to where the output goes:
var output = document.getElementById('output');

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
  'use strict';

  // For the output:
  var message = '';

  if (task.value) {

    // Add the item to the array:
    tasks.push(task.value);

    // Update the page:
    message = '<h2>To-Do</h2><ol>';
    for (var i = 0, count = tasks.length; i < count; i++) {
      message += '<li>' + tasks[i] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;

  } // End of task.value IF.

  // Return false to prevent submission:
  return false;

} // End of addTask() function.

// Initial setup:
function init() {
  'use strict';
  document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;

function removeDuplicates(e) {
  e.preventDefault();
  tasks = tasks.reduce(function(outputArray, currentValue) {
    if (outputArray.indexOf(currentValue) < 0) outputArray.push(currentValue);
    return outputArray;
  }, []);

  // For the output:
  var message = '';

  // Update the page:
  message = '<h2>To-Do</h2><ol>';
  for (var i = 0, count = tasks.length; i < count; i++) {
    message += '<li>' + tasks[i] + '</li>';
  }
  message += '</ol>';
  output.innerHTML = message;

}