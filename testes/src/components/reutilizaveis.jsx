export function Reutilizaveis (props){
    return(
        <>
            <h1>{props.tittle}</h1>
           {props.children}       
           <h2>Leia em {props.readingTime} {props.readingTime === '1' ? "minuto" : "minutos" }</h2>
        </>
    )
}