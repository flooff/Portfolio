import Layout from "../components/Layout";
import { withRouter } from "next/router";


const Post = ({router}) =>(
    <Layout title={router.query.title}>
        <p style={{width:'80vh'}}>"Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut
        </p>
    </Layout>
)
export default withRouter(Post);