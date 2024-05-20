// Importaciones
import img1 from './assets/imgs/1.webp';
import { Map } from './components/Map';
import { MyButton } from './components/MyButton';
import { WelcomeText } from './components/WelcomeText';

// Componente App
export const App = () => {
    const title = "Mi titulo desde una constante";
    const classTitle = "text-center";
    const pathImg = img1;
    const user = true;

    const Lista = ['Manzana', 'Pera', 'Platano'];

    const Lista2 = ['Pera', 'Wayaba', 'Chicharrin'];

    return (
        <div className="container">
            <h2 className={classTitle}>{title.toUpperCase()}</h2>
            <p className="text-center">App component</p>
            <img className="img" src={pathImg} alt={`imagen - ${title}`} />
            <MyButton propiedad="Boton personalizado" />
            <br />
            <WelcomeText user={user} />
            
            <Map Lista={Lista} />
            <Map Lista={Lista2} />
        </div>
    );
}