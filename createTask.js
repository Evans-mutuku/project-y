const firebaseConfig = {
  apiKey: "AIzaSyBEC8nZF1gLS8mEJiNfpxyiLfC79JqXkA0",
  authDomain: "task-man-c7972.firebaseapp.com",
  projectId: "task-man-c7972",
  storageBucket: "task-man-c7972.appspot.com",
  messagingSenderId: "1047263220371",
  appId: "1:1047263220371:web:1b0b88233ba16509e4b366",
  measurementId: "G-9VR0K26NHG",
};

firebase.initializeApp(firebaseConfig);

// function invoked by add btn
// function to store the task entered by the user in the database
// read and clear the fields->store the task in DB with a unique code->update the total tasks in DB->
// show the task under taskbar in form of a card

function storeTask(event) {
  event.preventDefault();
  const task = document.getElementById("task").value;
  const desc = document.getElementById("desc").value;
  const taskTime = document.getElementById("time").value;
}

// function invoked by show all btn
// if no tasks available then display "No pending tasks"
// Remove any tasks if displayed inside the task bar
// read the data from the DB and display in form of cards
// adjust the color and disabled attribute of the buttons based on whether the task is completed or not

function showAll() {}
