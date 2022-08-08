

const checkClick = document.querySelector('.btn');

checkClick.addEventListener('click', clickHandler);

function clickHandler(event) {
    let text;
    if (confirm("Are you sure you want to delete this topic") == true) {
        text = "You pressed OK!";
    } else {
        event.preventDefault();
        text = "You canceled!";
    };
}