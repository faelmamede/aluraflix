import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: ''

  }
  const [values, setValues] = useState(valoresInicias);

  const setValue = (chave, valor) => setValues({ ...values, [chave]: valor });

  const handleChange = e => setValue(e.target.getAttribute('name'), e.target.value);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form 
        onSubmit={e => {
          e.preventDefault();
          setCategorias([...categorias, values]);
          
          setValues(valoresInicias)
      }}>

      <div>
        
        <FormField label="Nome da Categoria:" type="text" name="nome" value={values.nome} onChange={handleChange} />

        <FormField label="Descrição:" type="textArea" name="descricao" value={values.descricao} onChange={handleChange} />

        <FormField label="Cor:" type="color" name="cor" value={values.cor} onChange={handleChange} />
         
      </div>
      <button>
          Cadastrar
      </button>
      </form>
      
      <ul>
        {categorias.map( (categoria, id) => {
          return (
            <li key={id}> 
              {categoria.nome}, {categoria.descricao}, {categoria.cor}
            </li>
          )
        } ) }
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;