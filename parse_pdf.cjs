const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('c:\\Users\\tomom\\OneDrive\\Desktop\\Portofolio-T.E\\恵良友美_portfolio_2025.09.12(最新).pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_content.txt', data.text);
    console.log("PDF parsed successfully.");
}).catch(function(error) {
    console.error(error);
});
