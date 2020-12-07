import {GET_POSTS, GetPostsStateType, PostActionTypes} from "../types/PostTypes";

//Здесь мы инициализируем состояние типа GetPostsStateType, которое мы определили ранее.
// Затем мы создаем функцию-редуктор под названием getPostsReducer.
// Редуктор принимает два параметра; состояние и действие.
// В нашем случае состояние и действие относятся к типам initialStateGetPosts и PostActionTypes соответственно,
// тогда как функция редуктора возвращает GetPostsStateType.
// В блоке переключения, если используется случай GET_POSTS, мы возвращаем все, что есть в состоянии,
// и обновляем его новой полезной нагрузкой, а случай по умолчанию - состояние.

const initialStateGetPosts: GetPostsStateType = {
    posts: []
}

export const getPostsReducer = (
  state = initialStateGetPosts,
  action: PostActionTypes
): GetPostsStateType => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}