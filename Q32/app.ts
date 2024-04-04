// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


//Current user names:
const current_users : string [] = ["Shaheen", "Iqra", "Hira", "Hamza Basit Ali","Komal"]; 
//New user names:
const new_users : string [] = ["Shaheen","Zainab","Umer","Abu Bakkar","Komal"];

//Checking new user names are already used :
for (let new_user of new_users){
const lowerCaseNewUser = current_users.some((current_users) => current_users.toLocaleLowerCase()=== new_user.toLocaleLowerCase())
if (lowerCaseNewUser){
console.log(`User "${new_user}" is already taken. Please chose a diffrent one.`)
}else {
    console.log(`User "${new_user}" is available `);
};
};