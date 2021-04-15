import Head from "next/head";

interface IPageHead {
    [key: string]: string
}

export default function PageHead({ 
    title, 
    description, 
    currentURL }: IPageHead) {
    return(
        <Head>
            <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-025L5TE3L5"
            />
            <script
                dangerouslySetInnerHTML={{
                __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag("js", new Date());
                        gtag("config", "G-025L5TE3L5");
                    `,
                }}
            />

            <title key="title">{title}</title>
            <meta charSet="UTF-8" key="charset" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <meta name="description" content={description} key="description" />
            <meta name="author" content="Kieran Roberts" key="author" />

            <meta name="twitter:card" content="summary" key="twcard" />
            <meta name="twitter:creator" content="@Kieran6dev" key="twhandle" />

            <meta property="og:locale" content="en_GB" key="oglocale" />
            <meta property="og:title" content={title} key="ogtitle"/>
            <meta property="og:description" content={description} key="ogdescription" />
            <meta property="og:image:secure_url" content="https://kieranroberts.dev/home-og.jpg" key="ogimage" />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:width" content="1146" />
            <meta property="og:image:height" content="550" />
            <meta property="og:type" content="website" key="ogtype" />
            <meta property="og:url" content={currentURL} key="ogurl" />
            <meta property="og:site_name" content="https://kieranroberts.dev" key="ogsite" />
            
            <link rel="manifest" href="./site.webmanifest" />
            <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
            <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#000000" />
            <link rel="shortcut icon" href="./favicon.ico" />

            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-config" content="./browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    )
};