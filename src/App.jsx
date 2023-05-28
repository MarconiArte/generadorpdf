import React,{ useState} from 'react'
import VistaWeb from './componentes/VistaWeb';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Inputs from './componentes/Inputs';
import VerPDF from './componentes/verPDF';


function App() {
  const [verPdf, setVerPdf] = useState(false)
  const [texto, setTexto] = useState('Nombre de usuario...')
  const [numeros, setNumeros] = useState('Número de usuario...')

  const onAddTexto = (newTexto) =>{
      setTexto(newTexto)
  }

  const onAddNumeros = (newNumeros) => {
    setNumeros(newNumeros);
  };

  const Menu = () => {
      return (
          <nav>
          <button onClick={()=>{
            setVerPdf(!verPdf)
          }}>{verPdf ? "Ocultar PDF" : "Ver PDF"}</button>

          <PDFDownloadLink document={<VerPDF texto={texto} numeros={numeros} />} fileName='archivo.pdf'>
            <button>Descargar PDF</button>
          </PDFDownloadLink>
          
        </nav>
      )  
  }

  return (
    <>
    <div className='body'>
      <main className='conteiner'>
        <h1>Titulo generico</h1>
        <VistaWeb texto={texto} numeros={numeros}/>
        <Inputs onAddTexto={onAddTexto} onAddNumeros={onAddNumeros}/>
        <Menu />
      </main>
      

      {verPdf ? (<PDFViewer style={{witdh:"100%", height:'90vh'}}><VerPDF texto={texto} numeros={numeros} /></PDFViewer>) : null}

    </div>
      
      
    </>
  )
}

export default App
