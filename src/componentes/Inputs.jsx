import { useState } from "react";

function Inputs({ onAddTexto, onAddNumeros }) {
  const [inputValue, setInputValue] = useState("");
  const [numeroValue, setNumeroValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onNumeroChange = (e) => {
    setNumeroValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1 || numeroValue.trim().length <= 1) return;
    onAddTexto(inputValue.trim());
    onAddNumeros(numeroValue.trim());
    setInputValue("");
    setNumeroValue("");
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(event);
    }
  };

  return (
    <form className="inputs" onSubmit={onSubmit}>
      <input
        placeholder="Nombre de usuario..."
        type="text"
        value={inputValue}
        onChange={onInputChange}
        onKeyPress={onKeyPress}
      />
      <input
        placeholder="Número de usuario..."
        type="text"
        value={numeroValue}
        onChange={onNumeroChange}
        onKeyPress={onKeyPress}
      />

      <input placeholder="Profesión..." type="text" />
      <input placeholder="Localidad..." type="text" />
    </form>
  );
}

export default Inputs;
