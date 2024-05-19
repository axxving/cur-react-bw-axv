
export const MyButton = () => {
    return (
        <button>Soy un boton</button>
    )
}

export const OnlineText = () => {
    return (
        <h1>OnlineText</h1>
    )
}

export const OfflineText = () => {
    return (
        <h1>OfflineText</h1>
    )
}


export const App = () => {

    const title = "Mi titulo desde una constante";
    const classTitle = "text-center";
    const pathImg = "https://images.pexels.com/photos/10295057/pexels-photo-10295057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const user = true;

    return (
        <div className="container">
            <h2 className={classTitle}>{title.toUpperCase()}</h2>
            <p className="text-center">App component</p>
            <img className="img" src={pathImg} alt={`imagen - ${title}`} />
            <MyButton />
            <br />
            {
                user ? <OnlineText /> : <OfflineText />
            }
        </div>
    )
}
