import ReceivedMessage from "../../interfaces/messages"

interface action {
    type: string,
    message: ReceivedMessage
}

const inbox = ( initialState: ReceivedMessage[], action: action) => {
    switch(action.type) {
        case 'ADD_MESSAGE':
            return [action.message].concat(initialState)
        default:
            return initialState
    }
}

export default inbox