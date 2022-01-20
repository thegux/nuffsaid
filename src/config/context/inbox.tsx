import React,  {createContext, useReducer} from 'react';
import ReceivedMessage from '../interfaces/messages';
import inboxReducer from './reducers/inbox'

type PropsInboxContext = {
    messageState: messageStateType,
    dispatchMessages: React.Dispatch<any>,
}

type messageStateType = {
    messages: ReceivedMessage[],
    alertMessage:string,
}

const DEFAULT_INBOX = {
    messageState: {messages: [] as ReceivedMessage[], alertMessage: ''},
    dispatchMessages: () => {},
}

const InboxContext = createContext<PropsInboxContext>(DEFAULT_INBOX);

const InboxContextProvider : React.FC = ({children}) => {

    const initialState = {messages: [] as ReceivedMessage[], alertMessage: ''}
	const [messageState, dispatchMessages] = useReducer(inboxReducer, initialState);

    return (
        <InboxContext.Provider value={{ messageState, dispatchMessages }}>
            {children}
        </InboxContext.Provider>
    )
}

export {InboxContextProvider}
export default InboxContext;