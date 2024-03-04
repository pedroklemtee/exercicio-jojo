import './EstilosPagina.css'

const EstilosPagina = (props) => {
    return (
        <section className="formulario">
            <form>
                <h2>Iniciar Formulário</h2>
                <label>
                    {props.label}
                </label>
            </form>
        </section>
    );
}

export default EstilosPagina
