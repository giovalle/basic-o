import React from 'react'

// ctrl+F2 para renomear em grupo
function Maiusculo ({texto}){
    const textoRecebido = texto
    const textoMaiusculo = textoRecebido.toUpperCase() //converte em maiusculo.
  return<> {textoMaiusculo}    </>
}

export default Maiusculo