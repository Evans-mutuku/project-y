
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

const firebaseConfig = {
    apiKey: "AIzaSyBEC8nZF1gLS8mEJiNfpxyiLfC79JqXkA0",
    authDomain: "task-man-c7972.firebaseapp.com",
    projectId: "task-man-c7972",
    storageBucket: "task-man-c7972.appspot.com",
    messagingSenderId: "1047263220371",
    appId: "1:1047263220371:web:1b0b88233ba16509e4b366",
    measurementId: "G-9VR0K26NHG"
};

firebaseConfig.initializeApp(firebaseConfig)


// Reads the data from the form -> updates it in the database -> clears the fields, deletes update and cancel btns and adds the add btn
// -> display the updated info in the tasks bar
function updateData(c){
    var updatedTask = document.getElementById("task").value;
    var updatedDesc = document.getElementById("desc").value;
    firebase.database().ref('TaskList/'+c).update({
        task : updatedTask,
        desc : updatedDesc
    });

    // Clearing fields and removing buttons update and cancel and replacing Add btn
    document.getElementById("task").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("updateTask").remove();
    document.getElementById("cancelTask").remove();
    document.getElementById("form-btns").innerHTML = `
    <button type="submit" class="button add" id = "addTask" >󠀫󠀫<i class="fas fa-plus"></i> ADD TASK</button>
    `

    // Updating the task in the side bar
    document.getElementById(c).querySelector(".data").querySelector(".Task").innerHTML = updatedTask;
    document.getElementById(c).querySelector(".data").querySelector(".desc").innerHTML = updatedDesc;
}