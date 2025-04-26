const fetch = require('node-fetch');
const { PDFDocument, rgb } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');

exports.handler = async (event, context) => {
  try {
    // Parse the form submission data from the webhook
    const formData = JSON.parse(event.body).payload.data;
    
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);
    
    // Embed a font (using a default one or load your own)
    const fontBytes = await fetch('https://github.com/googlefonts/roboto/blob/main/src/hinted/Roboto-Regular.ttf?raw=true').then(res => res.arrayBuffer());
    const font = await pdfDoc.embedFont(fontBytes);
    
    // Add a page
    const page = pdfDoc.addPage([600, 800]);
    
    // Draw the form data
    let y = 750;
    const drawText = (text, size = 12) => {
      page.drawText(text, { x: 50, y, size, font });
      y -= size + 10;
    };
    
    // Add title
    drawText(`Rental Application - ${formData['property-location']}`, 20);
    y -= 20;
    
    // Add all form fields
    for (const [key, value] of Object.entries(formData)) {
      if (value && typeof value === 'string') {
        drawText(`${key}: ${value}`);
      }
    }
    
    // Save the PDF
    const pdfBytes = await pdfDoc.save();
    
    // Convert to base64 for response
    const pdfBase64 = Buffer.from(pdfBytes).toString('base64');
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        pdf: pdfBase64,
        filename: `application_${Date.now()}.pdf`
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
