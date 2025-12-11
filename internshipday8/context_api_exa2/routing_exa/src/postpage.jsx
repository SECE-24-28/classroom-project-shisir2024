import { Outlet } from 'react-router-dom';
import React from "react";
import {Link} from "react-router-dom"

const PostPage=()=>{
    return (
        <div>
            <Outlet />
            <ol>
                <li><Link to={"/post1"}>Post 1</Link></li>
                <li><Link to={"/post2"}>Post 2</Link></li>
                <li><Link to={"/post3"}>Post 3</Link></li>
                <li><Link to={"/post3"}>Post</Link></li>
                <li><Link to={"/postpage/newpost"}>New Post</Link></li>
            </ol>
        </div>
    )
}

export default PostPage