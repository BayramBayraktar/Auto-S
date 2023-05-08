import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-v2-32x32.png" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}


export default Document