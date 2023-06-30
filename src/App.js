import './App.css';
import QRCode from "qrcode.react";
import { useState } from 'react';
import {jsPDF} from 'jspdf'

function App() {

  const [isQr, setIsQr] = useState('');

  const generatePDF = () => {

    // Defines the pdf
    let pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [40, 40]
    })

    // Transforms the canvas into a base64 image
    let base64Image = document.getElementById('qrcode').toDataURL()

    // Adds the image to the pdf
    pdf.addImage(base64Image, 'png', 0, 0, 40, 40)

    // Downloads the pdf
    pdf.save('QR.pdf')

}
  

  return (
    <div className="App">
      <div className='main__container'>
        <h1>QR Generator</h1>
        <input onChange={(e) => setIsQr(e.target.value)} placeholder='type your url here...' />
        <QRCode className='qr' value={isQr} id='qrcode' />
        <button onClick={() => generatePDF()}>Download</button>
      </div>
    </div>
  );
}

export default App;
