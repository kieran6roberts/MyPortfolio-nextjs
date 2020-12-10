import Form from "src/containers/Form/Form";
import Layout from "src/components/Layout/Layout";
import PageHead from "src/components/PageHead/PageHead";

export default function Contact(): React.ReactElement {
    return(
        <>
        <PageHead title="kierandev | contact"
        description="Got any questions or queries. Want to enquire about working together. Whatever it is, let's get in touch!" />
        <Layout>
            <Form />
        </Layout>
        </>
    )
};