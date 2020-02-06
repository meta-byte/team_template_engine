

function generateHTML(cards) {

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
            h1 {
                margin-top: 40px;
                margin-bottom: 40px;
                color: white;
            }
    
            h4 {
                margin: 12px;
            }
    
            .fa {
                color: black;
                font-size: 20px;
            }
    
            ul {
                padding-top: 70px;
                font-size: 20px;
            }
    
            li {
                padding-bottom: 30px;
            }
    
            img {
                margin: 20px;
                border-style: solid;
                border-color: white;
            }
    
            blockquote {
                margin: 20px 0;
                padding-left: 1.5rem;
                border-left: 5px solid green;
                padding-right: 1.5rem;
                border-right: 5px solid green;
            }
    
            footer {
                margin-top: 80px;
            }
        </style>
    </head>
    
    <body class="">
        <div class="">
            <div class="row green z-depth-1">
                <div class="col s12 center green darken-2">
                    <h1>Team Name</h1>
                </div>
            </div>
    
            <div class="container">
                <div class="row">
    
                ${cards}
    
                </div>
            </div>
        </div>
    
        <footer class="page-footer green">
            <div class="footer-copyright green darken-2">
                <div class="container">
                </div>
            </div>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    
    </body>
    
    </html>`
}

module.exports = generateHTML