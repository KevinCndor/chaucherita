import Boton from "../atomos/Boton"
import styles from "./Carta.module.css"

const Carta = ({titulo, valor}) =>{
    return(
        <>
            <div className={styles.contenedor}>
                <div className={styles.info}>
                    <h3>{titulo}</h3>
                    <p>{valor}</p>
                </div>
                <div className={styles.acciones}>
                    <Boton label="Ingresar" url="https://www.google.com" />
                    <Boton label="Egresar" url="https://www.google.com"/>
                </div>
            </div>
        </>
    )
}

export default Carta