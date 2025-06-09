//States 
//Hooks

//Props  são informações que você pode passar para um componente
interface ContainerProps{
    nome:string
}
function Container(props:ContainerProps){
    let contador = 10
    function Mudar(){
        contador = 20
    }
    return<>
        <div style={{ backgroundColor: "#322182", padding: "10px", color: "#cbbfff", width: "300px" }}>
        <h1>{props.nome} Big Black Cook</h1>
        Valor Contador:{contador}
        <button onClick={Mudar}>Mudar</button>
        <img src="images.jpg" alt="Grande Cozinheiro Negro"/>
        </div>
        </>
}

export default Container