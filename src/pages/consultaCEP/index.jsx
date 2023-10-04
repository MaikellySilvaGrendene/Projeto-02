import { useState } from 'react';
import { useForm } from 'react-hook-form';
import "../consultaCEP/styles.css";

export const ConsultaCEP = () => {
  const { register, handleSubmit } = useForm();
  const [cepData, setCepData] = useState({
    address: '',
    neighborhood: '',
    city: '',
    uf: '',
  });

  const onSubmit = (e) => {
    console.log(e);
  };

  const checkCEP = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);

    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
          throw new Error('CEP não encontrado');
        }
        const data = await response.json();
        setCepData(data);
      } catch (error) {
        console.error(`Ocorreu um erro: ${error.message}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Cep:
        <input
          type="text"
          {...register('cep')}
          onBlur={checkCEP}
        />
      </label>
      <br />
      <div id='CEP'>
        <p>Endereço: {cepData.logradouro}</p>
        <p>Bairro: {cepData.bairro}</p>
        <p>Cidade: {cepData.localidade}</p>
        <p>UF: {cepData.uf}</p>
      </div>
    </form>
  );
};
