import Document, {Html,Head, Main, NextScript} from "next/document";

export default class  MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <meta name="description" content="my Portfollio Website"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" integrity="sha512-DanfxWBasQtq+RtkNAEDTdX4Q6BPCJQ/kexi/RftcP0BcA4NIJPSi7i31Vl+Yl5OCfgZkdJmCqz+byTOIIRboQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                    <meta charSet="utf-8" />
                    <meta name="robots" content="noindex, nofllow" />
                    <meta name="viewport" content="width=device-width" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>{`
                    body{
                        font-family: 'Rowdies', cursive;
                    }
                `}    
                </style>

            </Html>
        )
    }
}