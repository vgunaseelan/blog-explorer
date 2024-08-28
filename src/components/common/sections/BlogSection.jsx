import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";
import BlogFormModal from "../utils/BlogFormModal";
import ConfirmModal from "../utils/ConfirmModal";

const BlogSection = ({ blogs }) => {
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [currentBlog, setCurrentBlog] = useState(null);
    const [deleteBlog, setDeleteBlog] = useState(null);

    const handleEditClick = (blog) => {
        setCurrentBlog(blog);
        setShowModal(true);
    };

    const handleDeleteClick = (blog) => {
        setDeleteBlog(blog);
        setShowDeleteModal(true);
    };

    const handleFormCloseModal = () => {
        setShowModal(false);
        setCurrentBlog(null);
    };

    const handleDeleteModal = () => {
        setShowDeleteModal(false);
        setDeleteBlog(null);
    };

    return (
        <>
            {blogs.slice(0, 9).map((blog, index) => (
                <div className="col" key={index}>
                    <div className="card shadow-sm h-100 position-relative">
                        <img
                            src={faker.image.urlLoremFlickr({ category: 'nature' })}
                            className="card-img-top p-3"
                            alt={blog.title}
                            style={{ maxHeight: "200px", objectFit: "cover", borderRadius: "10px" }}
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-truncate">{blog.title}</h5>
                            <p className="card-text">{blog.body}</p>
                            <Link to={`/blog/${blog.id}`}>Read more...</Link>
                        </div>
                        <div className="icon-container position-absolute top-0 end-0 p-2 d-flex">
                            <div className="icon-bg me-2" onClick={() => handleEditClick(blog)}>
                                <i className="bi bi-heart-fill"></i>
                                <BiEdit fontSize={16} className="cursor-pointor" />
                            </div>
                            <div className="icon-bg" onClick={() => handleDeleteClick(blog)}>
                                <i className="bi bi-share-fill"></i>
                                <BiTrash fontSize={16} className="text-danger cursor-pointor" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {currentBlog && (
                <BlogFormModal
                    show={showModal}
                    handleClose={handleFormCloseModal}
                    title={currentBlog.title}
                    description={currentBlog.body}
                />
            )}

            {deleteBlog && (
                <ConfirmModal
                    show={showDeleteModal}
                    handleClose={handleDeleteModal}
                    title={'Are you sure you want to delete ?'}
                />
            )}
        </>
    );
};

export default BlogSection;
