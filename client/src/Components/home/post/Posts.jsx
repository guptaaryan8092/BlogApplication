
import React from 'react';
import { styled, Box, Typography, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API } from '../../../service/api.js';

//Components
import Post from './Post.jsx';

const Posts = () => {
    const [posts, setPosts] = useState([]); 
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getAllPosts({category: category || ''});
            if (response.isSuccess) {
                setPosts(response.data);
            }
        }
        fetchData();
    }, [category]);
    return (
        <>
            {
                posts && posts.length > 0 ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Post post = {post}/>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>No data available to display</Box>
            }
        </>
    )
}
export default Posts;