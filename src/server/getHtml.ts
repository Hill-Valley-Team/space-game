export const getHtml = (reactHtml: string, reduxState: unknown) =>
  `
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
            <div id="root">${reactHtml}</div>
            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
            </script>
            <script src="/main.bundle.js"></script>
        </body>
        </html>
        `;
