import { useState } from 'react';
import { useForm } from 'react-hook-form';
import "../consultaCEP/styles.css";
import { MagnifyingGlass } from 'phosphor-react';

export const ConsultaCEP = () => {
  const { register, handleSubmit } = useForm();
  const [cepData, setCepData] = useState({
    address: '',
    neighborhood: '',
    city: '',
    uf: '',
  });

  const onSubmit = (e) => {
  (e);
  };

  const checkCEP = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');


    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
          throw new Error('CEP não encontrado');
        }
        const data = await response.json();
        setCepData(data);
        document.getElementById("CEP").classList.remove("hide");
      } catch (error) {
        console.error(`Ocorreu um erro: ${error.message}`);
      }
    }
  };

  return (
    <div className='ConsultaCep'>
      <div className='container-CEP'>

        <div className='form-Cep'>
          <h4>Consulte um CEP</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
          <label>

          <input id='InputConsultaCep'
          type="text"
          placeholder='Digite o CEP'
          {...register('cep')}
          onBlur={checkCEP}
          />

          <button
          id='BTNbuscarCep'
          onClick={checkCEP}>
          <MagnifyingGlass size={16} />
          </button>

          </label>
          <br />
          </form>
        </div>

        <div id='CEP' className='hide' >
          <div className='conteudo-CEP'>          
          <p>Endereço: {cepData.logradouro}</p>
          <p>Bairro: {cepData.bairro}</p>
          <p>Cidade: {cepData.localidade}</p>
          <p>UF: {cepData.uf}</p></div>

        </div>

      </div>
    </div>
     
  );
};
