import ReceivedMessage from "../../interfaces/messages"

interface action {
    type: string,
    message: ReceivedMessage,
}

const inbox = ( state: {messages: ReceivedMessage[], alertMessage: string}, action: action) => {
    switch(action.type) {
        case 'ADD_MESSAGE':
            return {...state, messages: [action.message].concat(state.messages), alertMessage: action.message.priority === 0 ? action.message.id : state.alertMessage}
        case 'CLEAR_ALL':
            return {...state, messages: [] as ReceivedMessage[]};
        case 'CLEAR_MESSAGE':
            return {...state, messages: state.messages.filter((m) => m.id !== action.message?.id), alertMessage: action.message.id === state.alertMessage ? '' : state.alertMessage}
        case 'CLEAR_NOTIFICATION':
            return {...state, alertMessage: ''}
        default:
            return state
    }
}

export default inbox