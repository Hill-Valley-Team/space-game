export const getHtml = (reactHtml: string) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="shortcut icon" type="image/png" href="/images/favicon.jpg">
        <title>Scape Racing Game</title>
        <link href="/main.css" rel="stylesheet">
    </head>
    <body>
        <div id="mount">${reactHtml}</div>
        <script src="/main.bundle.js"></script>
    </body>
    </html>
    `;
