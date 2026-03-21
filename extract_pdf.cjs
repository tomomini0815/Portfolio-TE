const fs = require('fs');
let pdfParse = require('pdf-parse');
if (typeof pdfParse !== 'function' && pdfParse.default) {
    pdfParse = pdfParse.default;
}

const dataBuffer = fs.readFileSync('c:\\Users\\tomom\\OneDrive\\Desktop\\Portofolio-T.E\\恵良友美_portfolio_2025.09.12(最新).pdf');

pdfParse(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_content.txt', data.text);
    console.log("Success");
}).catch(function(error) {
    fs.writeFileSync('err.txt', error.toString());
    console.error(error);
});
