import fs from 'fs';
import path from 'path';
import http from 'http';

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.url === '/upload' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            const data = JSON.parse(body);
            const base64Data = data.image.replace(/^data:image\/png;base64,/, "");
            const outPath = path.join(process.cwd(), 'public', 'experiences', data.filename);
            fs.mkdirSync(path.dirname(outPath), { recursive: true });
            fs.writeFileSync(outPath, base64Data, 'base64');
            console.log('Saved', outPath);
            res.writeHead(200);
            res.end(JSON.stringify({success: true}));
        });
    } else if (req.url === '/extractor.html') {
        const content = fs.readFileSync(path.join(process.cwd(), 'extractor.html'));
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
    } else if (req.url === '/pdf') {
        const pdfContent = fs.readFileSync('c:\\Users\\tomom\\OneDrive\\Desktop\\Portofolio-T.E\\恵良友美_portfolio_2025.09.12(最新).pdf');
        res.writeHead(200, { 'Content-Type': 'application/pdf' });
        res.end(pdfContent);
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(8085, () => {
    console.log('Server running on 8085');
});
