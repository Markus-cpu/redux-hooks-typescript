import { GET_POSTS, PostActionTypes } from '../types/PostTypes'
import { Post } from '../interfaces/Post'

//Функция getPostsAction принимает массив сообщений и возвращает тип GET_POSTS и отправляет данные,
// переданные в переменную полезной нагрузки.
// Обратите внимание, что типу и полезной нагрузке можно присвоить имена по вашему выбору.

export const getPostsAction = (posts: Post[]): PostActionTypes => {
    return {
        type: GET_POSTS,
        payload: posts
    }
}