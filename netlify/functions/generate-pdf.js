// netlify/functions/generate-pdf.js
const { PDFDocument, rgb } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');
const fetch = require('node-fetch');

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const formData = data.payload.data;
    
    // Create PDF
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);
    
    // Load font (Roboto - you can replace with your preferred font)
    const fontUrl = 'https://github.com/googlefonts/roboto/blob/main/src/hinted/Roboto-Regular.ttf?raw=true';
    const fontBytes = await fetch(fontUrl).then(res => res.arrayBuffer());
    const font = await pdfDoc.embedFont(fontBytes);
    
    // Add page
    const page = pdfDoc.addPage([600, 800]);
    
    // Helper function to draw text
    let y = 750;
    const drawText = (text, size = 12, x = 50, bold = false) => {
      page.drawText(text, { 
        x, 
        y, 
        size, 
        font,
        color: rgb(0, 0, 0)
      });
      y -= size + (bold ? 15 : 10);
    };
    
    // Header
    drawText('RENTAL APPLICATION', 20, 50, true);
    y -= 20;
    
    // Property Info
    drawText('PROPERTY INFORMATION', 16, 50, true);
    drawText(`Location: ${formData['property-location'] || 'N/A'}`);
    drawText(`Property Type: ${formData['property-type'] || 'N/A'}`);
    y -= 15;
    
    // Personal Information
    drawText('PERSONAL INFORMATION', 16, 50, true);
    drawText(`Name: ${formData['first-name'] || ''} ${formData['last-name'] || ''}`);
    drawText(`Email: ${formData.email || 'N/A'}`);
    drawText(`Phone: ${formData.phone || 'N/A'}`);
    // Add more fields as needed...
    
    // Save PDF
    const pdfBytes = await pdfDoc.save();
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        pdf: Buffer.from(pdfBytes).toString('base64'),
        filename: `Rental_Application_${formData['first-name']}_${formData['last-name']}.pdf`
      }),
      headers: { 'Content-Type': 'application/json' }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to generate PDF',
        details: error.message 
      })
    };
  }
};
