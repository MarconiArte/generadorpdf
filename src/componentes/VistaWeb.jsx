

function VistaWeb({texto, numeros}) {
    return (
          <div className="card">
                <p>{numeros}</p>
                <img src="https://i.imgur.com/rwRbQfK.jpg" alt="" />
                <p>{texto}</p>
                <p>Profesión</p>
                <p>Localidad</p>
          </div>
       
    )
  }
  
  export default VistaWeb