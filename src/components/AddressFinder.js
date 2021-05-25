import { useEffect,  useState } from "react";

const AddressFinder = () => {
  const [cep, setCep] = useState('');
  const [form, setForm] = useState({
    rua: '',
    bairro: '',
    cidade: '',
    estado: ''
  });

  useEffect(() => {
    if (cep.length > 7)
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((response) => setForm({
        rua: response.logradouro,
        bairro: response.bairro,
        cidade: response.localidade,
        estado: response.uf
      }))
      .catch((error) => console.log(`Não foi possível obter o endereço do CEP informado! Erro:${error}`));

  }, [cep]);

 
function searchingData(e) {
  setCep(e.target.value);
}

function fillingForm({ target }) {
  const {id, value} = target;
  setForm({...form, [id]: value})
}

  return (
    <div>  
      <div className="search-address">
        <label htmlFor="cep">Digite o seu CEP</label>
        <input
          type="number"
          id="cep"
          placeholder="CEP"
          value={cep}
          onChange={searchingData}
        />
      </div>

      <form action="">
        <div className="input-form street-address">
          <label htmlFor="rua">Rua</label>
          <input type="text" id="rua" value={form.rua} onChange={fillingForm}/>
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
          <input type="text" id="bairro" value={form.bairro} onChange={fillingForm}/>
        </div>
        <div className="input-form  cidade-address">
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id="cidade" value={form.cidade} onChange={fillingForm}/>
        </div>
        <div className="input-form  estado-address">
          <label htmlFor="estado">Estado</label>
          <input type="text" id="estado" value={form.estado} onChange={fillingForm} />
        </div>
      </form>
    </div>
  );
};

export default AddressFinder;
