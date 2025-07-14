import React from 'react';
import PostDetail from '../components/Post-detail';
import { useParams } from 'react-router-dom';

function PostDetailPage() {
    //useParams hook để lấy id từ url
    const { id } = useParams();
    return (
        <PostDetail />
    )
}

export default PostDetailPage
