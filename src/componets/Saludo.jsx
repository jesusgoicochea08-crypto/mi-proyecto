import './Saludo.css'
function Saludo(){
    const listanba = ["Curry", "Kobe", "Lebron", "Jordan"];
return (
    <>
    <h1 className='SaludoComponente'>Soy Otro Componente</h1>
    <h2>Lista de NBA</h2>
        <ol>
            <li>{listanba[0]}</li>
            <li>{listanba[1]}</li>
            <li>{listanba[2]}</li>
            <li>{listanba[3]}</li>
        </ol>
    </>
);
}export default Saludo