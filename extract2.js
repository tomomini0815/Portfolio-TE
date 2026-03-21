async function parse() {
    try {
        const fs = await import('fs');
        const pdfModule = await import('pdf-parse');
        const pdf = pdfModule.default || pdfModule;
        const buf = fs.readFileSync('c:\\Users\\tomom\\OneDrive\\Desktop\\Portofolio-T.E\\恵良友美_portfolio_2025.09.12(最新).pdf');
        const data = await pdf(buf);
        fs.writeFileSync('pdf_content.txt', data.text);
        console.log("SUCCESS");
    } catch(e) {
        console.error(e);
    }
}
parse();
