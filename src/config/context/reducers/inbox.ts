import ReceivedMessage from "../../interfaces/messages"

interface action {
    type: string,
    message: ReceivedMessage,
}

const inbox = ( state: ReceivedMessage[], action: action) => {
    switch(action.type) {
        case 'ADD_MESSAGE':
            return [action.message].concat(state)
        case 'CLEAR_ALL':
            return [] as ReceivedMessage[];
        case 'CLEAR_MESSAGE':
            return state.filter((m) => m.id !== action.message?.id)
        default:
            return state
    }
}

export default inbox