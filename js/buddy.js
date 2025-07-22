const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data))

}
const displayBuddy = (data) => {
    const buddies = data.results;
    const element = document.getElementById('buddy');
    for (const item of buddies) {
        console.log(item.email);
        const p = document.createElement('p');
        p.innerHTML = `Name: ${item.name.first} ${item.name.last} email:${item.email}`;
        element.appendChild(p);
    }
}

