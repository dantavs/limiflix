import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria(){

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    }

    const [categorias, setCategorias] = useState([])

    const [values, setValues] = useState(valoresIniciais)

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(e){
        const { attributes, value} = e.target
        setValue(attributes.name.value, value)
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(e){
                e.preventDefault()

                setCategorias([
                    ...categorias,
                    values
                ])

                setValues(valoresIniciais)
            }}>

                <FormField 
                    label='Nome da Categoria'
                    name='nome'
                    type='text'
                    value={values.nome}
                    onChange={handleChange}
                />
                
                <FormField 
                    label='Descriçao da Categoria'
                    name='descricao'
                    type='textArea'
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField 
                    label='Cor da Categoria'
                    name='cor'
                    type='color'
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form> 

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to='/cadastro/video'>
                Cadastrar Video
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria