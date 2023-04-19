const http = require('http');
const fs = require('fs');
const mime = require('mime');

const PORT = 1900;

http.createServer((req, res) => {
    if (req.url == "/") {
        const publicDIR = "./public";
        const fileArr = fs.readdirSync(publicDIR)
        console.log(fileArr)

        let html = "<ul>";
        fileArr.forEach((value, index) => {
            html += "<li>"
            html += `<a href="${publicDIR + "/" + value}">${value}</a>`
            html += "</li>"
        });
        html += "</ul>"

        res.setHeader("Content-Type", "text/html")
        res.end(html);

    } else {
        const filePath = "." + req.url;
        const mimeType = mime.getType(filePath);
        console.log("request: ", filePath, mimeType)
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath)
            res.setHeader('Content-type', mimeType || 'text/html');
            res.end(data)
        } else {
            res.end("Error:404")
        }
    }
}).listen(PORT, () => {
    console.log("server is running on: http://localhost:" + PORT)
});
