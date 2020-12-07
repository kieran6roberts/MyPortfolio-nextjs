import Head from "next/head";

export type PageHeadProps = { title: string };

export default function PageHead({ title }: PageHeadProps): React.ReactElement {
    return(
        <Head>
            <title>
                {title}
            </title>
        </Head>
    )
};