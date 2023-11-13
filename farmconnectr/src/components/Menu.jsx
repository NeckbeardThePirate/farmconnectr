


const Menu = () => {
    let userName = localStorage.getItem('userName');

    if (userName === null) {
        userName = 'Guest'
    } else {
        console.log(userName)
    }

    return (
        <>
        <header className="page-header">
            <h1 className="welcome-message">Welcome {userName}</h1>

        </header>
        </>
    )
}

export default Menu