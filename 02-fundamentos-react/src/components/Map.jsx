// Importación de ItemFrut
import { ItemFrut } from "./ItemFrut";

// Componente Map
export const Map = ({ Lista }) => {
    return (
        <div>
            {Lista.map((item, id) => (
                <ItemFrut key={id} item={item} />
            ))}
        </div>
    );
}