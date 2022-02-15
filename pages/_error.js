import Layout from "../components/Layout";

export default ({statusCode}) =>(
    <Layout title='Error!!!'>
        {statusCode ? `Could not load your data: StatusCode ${statusCode}
        `:`Couldn't get that page, sorry`}
        
    </Layout>
);


