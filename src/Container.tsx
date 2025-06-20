//States 
import { useState } from "react"

//Hooks -> iniciam com "use"
//só pode usar ele no começo do componente

//Props  são informações que você pode passar para um componente
interface ContainerProps {
    nome: string
}
function Container(props: ContainerProps) {
    const [texto, setTexto] = useState("Coloque um texto")
    function trataInput(event:React.ChangeEvent<HTMLInputElement>) {
        setTexto(event.currentTarget.value)
    }
    return <>
        <div style={{ 
            backgroundImage:"url(rei.jpg)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: "10px",
            color: "#cbbfff", 
            width: "480px", 
            height: "250px",
            borderRadius: "30px", 
            border:"#322182 3px solid", 
            marginTop:"50px"}}>
            <h1>{props.nome} Big Black Cook</h1>

            <div style={{width: "300px"}}><p><b>Texto:{texto}</b></p></div>
            <input type="text" placeholder="Mostrar texto" onChange={trataInput} />
            <button>Mudar Texto</button>
                    </div>
    </>
}

export default Container