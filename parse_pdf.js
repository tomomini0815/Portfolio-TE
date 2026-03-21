import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

let dataBuffer = fs.readFileSync('c:\\Users\\tomom\\OneDrive\\Desktop\\Portofolio-T.E\\恵良友美_portfolio_2025.09.12(最新).pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error) {
    console.error(error);
});
