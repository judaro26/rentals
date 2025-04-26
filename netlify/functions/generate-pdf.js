const { PDFDocument, rgb } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');

exports.handler = async (event) => {
  console.log('Function invoked with event:', JSON.parse(event.body)); // Debug log

  try {
    // Validate request
    if (event.httpMethod !== 'POST') {
      throw new Error('Only POST requests allowed');
    }

    const { payload } = JSON.parse(event.body);
    if (!payload || !payload.data) {
      throw new Error('Invalid payload structure');
    }

    const formData = payload.data;
    console.log('Form data received:', formData); // Debug log

    // Create PDF
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);

    // Use built-in Helvetica font if external font fails
    let font;
    try {
      const fontBytes = await fetch('https://github.com/googlefonts/roboto/raw/main/src/hinted/Roboto-Regular.ttf')
        .then(res => res.arrayBuffer());
      font = await pdfDoc.embedFont(fontBytes);
    } catch (fontError) {
      console.warn('Using fallback font:', fontError);
      font = await pdfDoc.embedStandardFont('Helvetica');
    }

    const page = pdfDoc.addPage([600, 800]);
    let y = 750;

    // Helper function with error handling
    const drawText = (text, size = 12, x = 50) => {
      try {
        if (text && typeof text === 'string') {
          page.drawText(text, { x, y, size, font });
        }
        y -= size + 10;
      } catch (drawError) {
        console.error('Error drawing text:', drawError);
      }
    };

    // Add content
    drawText('RENTAL APPLICATION', 20);
    y -= 20;
    
    // Add all form fields
    for (const [key, value] of Object.entries(formData)) {
      if (value !== undefined && value !== null) {
        drawText(`${key}: ${value}`);
      }
    }

    // Finalize PDF
    const pdfBytes = await pdfDoc.save();
    const pdfBase64 = Buffer.from(pdfBytes).toString('base64');

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        pdf: pdfBase64,
        filename: `Application_${Date.now()}.pdf`,
        success: true
      })
    };

  } catch (error) {
    console.error('PDF generation error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'PDF generation failed',
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};
