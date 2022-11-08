const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY    = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "how are you?", likeCount: 10},
                {id: 2, message: "I'm fine", likeCount: 154},
                {id: 3, message: "Yana", likeCount: 231},
                {id: 4, message: "Hello", likeCount: 342},
                {id: 5, message: "i'm from Moscow", likeCount: 56},
                {id: 6, message: "To day my birthday", likeCount: 76}
            ],
            newPostText: ' '

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Muslim"},
                {id: 2, name: "Artem"},
                {id: 3, name: "Yana"},
                {id: 4, name: "Mariya"},
                {id: 5, name: "Anton"},
                {id: 6, name: "Sergei"},
                {id: 7, name: "Ilona"},
                {id: 8, name: "Mike"},
                {id: 9, name: "Jonny"},
                {id: 10, name: "Max"}
            ],
            messages: [
                {id: 1, message: "how are you?"},
                {id: 2, message: "I'm fine"},
                {id: 3, message: "Yana"},
                {id: 4, message: "Hello"},
                {id: 5, message: "i'm from Moscow"},
                {id: 6, message: "To day my birthday"}
            ],
            newMessageBody: ' '
        },
        sideBar: {
            friends: [
                {id: 1, name: "Muslim"},
                {id: 2, name: "Artem"},
                {id: 3, name: "Yana"}
            ]
        }
    },
    _callSubscriber() {
        console.log('YoYO')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer - это паттерн (наблюдатель)
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 7,
                message: store._state.profilePage.newPostText,
                likeCount: 2
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ' ';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = ' ';
            this._state.dialogsPage.messages.push({id:7, message: body})
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

window.store = store;
export default store;





