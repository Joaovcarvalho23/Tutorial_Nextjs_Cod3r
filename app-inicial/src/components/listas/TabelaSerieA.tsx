interface TabelaSerieAProps{
    times: string[]
}

export default function TabelaSerieA (props: TabelaSerieAProps){
    // const itens: any[] = []

    // for(let i = 0; i < props.times.length; i++){
    //     console.log(props.times[i])
    //     itens.push((
    //         <li key={props.times[i]} className="text-green-600 list-decimal">
    //             {props.times[i]}
    //         </li>
    //     ))
    //     /*
    //     sem o 'key', retorna o erro que diz: "Acabou de renderizar uma lista, mas cada elemento da lista
    //     deve ter uma chave única (prop)"
    //     O React usa essa chave única para ele conseguir atualizar de forma mais cirúrgica. Vamos supor que
    //     alteramos apenas um único elemento da lista. Ao invés de alterar a lista inteira, você altera 
    //     especificamente um elemento da lista.
    //     */
    // }

    const itens2 = props.times.map((time, indice) => {
        return(
            <li key={time} className={`
                text-3xl list-decimal 
                ${indice % 2 === 0? 'text-green-600' : 'text-green-300'}
            `}>
                {time}
            </li>
        )
    })

    return(
        <ol>
            {itens2}
        </ol>
    )
}