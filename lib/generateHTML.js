

function generateHTML(cards, name) {

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
        <title>Document</title>
        <style>

        .title {
            margin-bottom: 20px;
        }

        .heading {
            margin-bottom: 75px;
        }

        h1 {
            margin-top: 40px;
            margin-bottom: 40px;
            color: white;
        }

        a {
            color: darkblue;
        }

        a:hover {
            color: darkgray;
        }

        h4 {
            margin: 12px;
        }

        footer {
            margin-top: 75px;
        }
    </style>
    </head>
    
    <body>
        <div>
            <div class="row cyan z-depth-1 heading">
                <div class="col s12 center cyan darken-2 title">
                    <h1>${name}</h1>
                </div>
            </div>
    
            <div class="container">
                <div class="row">
    
                ${cards}
    
                </div>
            </div>
        </div>
    
        <footer class="page-footer cyan">
            <div class="footer-copyright cyan darken-2">
                <div class="container">
                </div>
            </div>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    
    </body>
    
    </html>`
}

module.exports = generateHTML