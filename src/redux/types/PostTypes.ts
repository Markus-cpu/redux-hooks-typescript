import { Post } from '../interfaces/Post'

// Интерфейс GetPostsStateType определяет, как будет выглядеть состояние, массив сообщений.
// Интерфейс GetPostsActionType определяет тип действия.

export const GET_POSTS = 'GET_POSTS'

//типизируем наш начальный state
export interface GetPostsStateType {
    posts: Post[]
}

// типизируем наш action действие
interface GetPostsActionType {
    type: typeof GET_POSTS
    payload: Post[]
}

export type PostActionTypes = GetPostsActionType