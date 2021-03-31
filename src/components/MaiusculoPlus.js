import React from 'react'

// ctrl+F2 para renomear em grupo
function MaiusculoPlus (props){
    const textoRecebido = props.texto
    const textoMaiusculo = textoRecebido.toUpperCase() //converte em maiusculo.
  return<div style={{color: props.cor}}> {textoMaiusculo}    </div>
}

export default MaiusculoPlus