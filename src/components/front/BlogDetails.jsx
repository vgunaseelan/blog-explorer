import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogsById } from '../../api/api'
import { faker } from "@faker-js/faker";
import { GET_COMMENTS_BY_POST_ID } from "../../graphql/query";
import { useQuery } from "@apollo/client";


const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState([]);
    const { loading, error, data } = useQuery(GET_COMMENTS_BY_POST_ID, {
        variables: { postId: id }
    });
    const comments = data?.comments;

    useEffect(() => {
        const getBlog = async () => {
            try {
                const response = await fetchBlogsById(id);
                setBlog(response);
            } catch (error) {
            }
        };

        getBlog();
    }, [id]);

    return (
        <div className="row g-3 p-5 mb-5">
            <div className="card p-5 mb-5">
                <div className="body">
                    <img className="mb-5" style={{width:"-webkit-fill-available", height:"500px"}} src={faker.image.urlLoremFlickr({ category: 'nature' })} alt={blog.title} />
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    <div class="container mt-5 border-left border-right">
                        <div class="d-flex pt-3 pb-2"> 
                            <input type="text" name="text" placeholder="Any Comment" class="form-control" /> 
                        </div>
                        { comments?.map((comment, index) => (
                            <div class="d-flex py-2" key={index}>
                                <div class="second py-2 px-2" > <span class="text1">{comment?.body}</span>
                                    <div class="d-flex justify-content-between py-1 pt-2">
                                        <div><img src={faker.image.urlLoremFlickr({ category: 'user' })} width="25" height="25" style={{borderRadius: "50%"}}  /><span class="text2"><strong>{comment?.name}</strong></span></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails;