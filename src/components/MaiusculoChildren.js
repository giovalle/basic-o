import React from 'react'

// ctrl+F2 para renomear em grupo
function MaiusculoChildren (props){ /*props = propriedades*/
    const textoRecebido = props.children
    const textoMaiusculo = textoRecebido.toUpperCase() //converte em maiusculo.
  return <> {textoMaiusculo}    </>
}

export default MaiusculoChildren