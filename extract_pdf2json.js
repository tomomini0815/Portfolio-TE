import fs from 'fs';
import PDFParser from 'pdf2json';

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync('pdf_content.txt', pdfParser.getRawTextContent());
    console.log("Success");
});

pdfParser.loadPDF('c:\\Users\\tomom\\OneDrive\\Desktop\\Portofolio-T.E\\恵良友美_portfolio_2025.09.12(最新).pdf');
