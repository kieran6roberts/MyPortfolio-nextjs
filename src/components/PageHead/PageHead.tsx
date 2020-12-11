import Head from "next/head";

export type PageHeadProps = { title: string, description: string };

export default function PageHead({ title, description }: PageHeadProps): React.ReactElement {
    return(
        <Head>
            <title key="title">{title}</title>
            <meta charSet="UTF-8" key="charset" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <meta name="description" content={description} key="description" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={title} />
            <link rel="apple-touch-icon" sizes="180x180" href="/public/head/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/public/head/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/public/head/favicon-16x16.png" />
            <link rel="mask-icon" href="/public/head/safari-pinned-tab.svg" color="#000000" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-config" content="/public/head/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    )
};