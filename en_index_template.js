const start_html = '<!doctype html><html lang="en"><head><title>Hada News</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" data-tag="font"/><link rel="stylesheet" href="./style.css"/></head><body><div style="max-width:800px;"><table style="border: 1px solid black; border-collapse: collapse;"><tr><th style="border: 1px solid black; border-collapse: collapse;">Tile</th><th style="border: 1px solid black; border-collapse: collapse;">Meta</th></tr>';
let main_html = '';
const end_html = '</table></body></html>';

for (item of items) {
    main_html += `<tr><td style="border: 1px solid black; border-collapse: collapse;"><a style="color:#000000;text-decoration:none;" href="${item.json['slug']}" target="_blank">${item.json['title']}</a></td><td style="border: 1px solid black; border-collapse: collapse;">${item.json['meta']}</td></tr>`
}

return [{
    json: {
        table_html: start_html + main_html + end_html
    }
}]