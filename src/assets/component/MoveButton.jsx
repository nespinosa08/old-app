
export const MoveButton = ({history, onJump}) => {



    let description;

    const moves= history.map((squares, move)=>{
        if  (move===0){
            description = `Ir al inicio de juego`
        } else{
            description= `Ir al movimiento Nº ${move}`
        }
    
  return (
    <li key={move}>
        <button onClick={()=>onJump(move)}>
            {description}
        </button>
    </li>  )
    
    })

    return(
    <ul>
        {moves}
    </ul>
    )

}