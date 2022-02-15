import Link from "next/link"
import { Component } from "react/cjs/react.production.min"
import Error from "./_error"
import Layout from "../components/Layout"




export default class About extends Component {
    
    static async getInitialProps(){
       const res = await fetch('https://api.github.com/users/flooff')
       const data = await res.json();
       const statusCode = res.status > 200 ? res.status :false;
        return {user: data, statusCode}
    }
    render(){
        const {user, statusCode} = this.props;
        if(statusCode){
            return <Error statusCode={statusCode} />
        }
        

        return(
            <Layout title="About">
                <p>{user.name}</p>
                <img src={user.avatar_url}  alt="js" height="200px" />
            </Layout>

        )
    }
}