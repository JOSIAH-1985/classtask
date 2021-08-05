let user = {
    name: 'JAMES',
    age: 22,
};
let userParagraph = document.getElementById('user');

function signIn(){
    window.localStorage.setItem('user', JSON.stringify(user));
    window.localStorage.setItem('user2', JSON.stringify(user2));
}
function getUser(){
    
    const user = JSON.parse( window.localStorage.getItem('user'));
    userParagraph.innerHTML = `${user.name} ${user.age}`;

}
function signOut(){
    localStorage.removeItem('user');
    localStorage.clear();
    userParagraph.innerHTML = '';

}
