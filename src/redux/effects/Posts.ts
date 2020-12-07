import { Dispatch } from 'react'
import { PostActionTypes } from '../types/PostTypes'
import { getPostsAction } from '../actions/PostActions'


export const getPosts = () => {
    return async function (dispatch: Dispatch<PostActionTypes>) {
        const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
        const response = await fetch(POST_URL, {
            method: 'GET'
        })
        const data = await response.json()
        dispatch(getPostsAction(data))
        return data
    }
}