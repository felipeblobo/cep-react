import { useEffect, useRef, useState } from "react";

const AddressFinder = () => {
  const [cep, setCep] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (cep.length > 7)
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.log(`Não foi possível obter o endereço do CEP informado! Erro:${error}`));
  }, [cep]);

  return (
    <div>  
      <div className="search-address">
        <label htmlFor="cep">Digite o seu CEP</label>
        <input
          type="number"
          id="cep"
          placeholder="CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
      </div>

 
      <form action="">
        <div className="input-form street-address">
          <label htmlFor="rua">Rua</label>
          <input type="text" id="rua" value={data ? data.logradouro : ''} />
        </div>
        <div className="input-form  number-address">
          <label htmlFor="numero">Número</label>
          <input type="number" id="numero" />
        </div>
        <div className="input-form  complemento-address">
          <label htmlFor="complemento">Complemento</label>
          <input type="text" id="complemento" />
        </div>
        <div className="input-form  bairro-address">
          <label htmlFor="bairro">Bairro</label>
          <input type="text" id="bairro" value={data ? data.bairro : ''}/>
        </div>
        <div className="input-form  cidade-address">
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id="cidade" value={data ? data.localidade : ''}/>
        </div>
        <div className="input-form  estado-address">
          <label htmlFor="estado">Estado</label>
          <input type="text" id="estado" value={data ? data.uf : ''} />
        </div>
      </form>
    </div>
  );
};

export default AddressFinder;
