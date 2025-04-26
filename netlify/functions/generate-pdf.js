const { PDFDocument, rgb } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');

exports.handler = async (event) => {
  try {
    // Parse the incoming data
    const requestBody = JSON.parse(event.body);
    console.log('Received body:', requestBody);

    // Validate the structure
    if (!requestBody.formData) {
      throw new Error('Payload must contain formData property');
    }

    const formData = requestBody.formData;
    const metadata = requestBody.metadata || {};

    // Create PDF
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);
    
    // Use Helvetica if Roboto fails to load
    let font;
    try {
      const fontResponse = await fetch('https://github.com/googlefonts/roboto/raw/main/src/hinted/Roboto-Regular.ttf');
      font = await pdfDoc.embedFont(await fontResponse.arrayBuffer());
    } catch (e) {
      font = await pdfDoc.embedStandardFont('Helvetica');
    }

    // Add page and content
    const page = pdfDoc.addPage([600, 800]);
    let y = 750;
    
    const drawText = (text, size = 12, x = 50) => {
      page.drawText(text, { x, y, size, font });
      y -= size + 10;
    };

    // Add content to PDF
    drawText('RENTAL APPLICATION', 20);
    y -= 20;
    
    // Add all form fields
    for (const [key, value] of Object.entries(formData)) {
      if (value) drawText(`${key}: ${value}`);
    }
    
    // Add metadata
    y -= 30;
    drawText(`Generated: ${metadata.submittedAt || 'Unknown date'}`, 10);
    drawText(`Language: ${metadata.language || 'Unknown'}`, 10);

    // Return PDF
    const pdfBytes = await pdfDoc.save();
    return {
      statusCode: 200,
      body: JSON.stringify({
        pdf: Buffer.from(pdfBytes).toString('base64'),
        filename: `Application_${formData['first-name'] || 'Unknown'}_${formData['last-name'] || 'User'}.pdf`
      }),
      headers: { 'Content-Type': 'application/json' }
    };

  } catch (error) {
    console.error('PDF generation failed:', error);
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Failed to generate PDF',
        details: error.message
      })
    };
  }
};
