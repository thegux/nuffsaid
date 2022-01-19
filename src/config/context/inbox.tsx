import React,  {createContext, useReducer} from 'react';
import ReceivedMessage from '../interfaces/messages';
import inboxReducer from './reducers/inbox'

type PropsInboxContext = {
    messages: ReceivedMessage[],
    dispatchMessages: React.Dispatch<any>,
}

const DEFAULT_INBOX = {
    messages: [] as ReceivedMessage[],
    dispatchMessages: () => {},
}

const InboxContext = createContext<PropsInboxContext>(DEFAULT_INBOX);

const InboxContextProvider : React.FC = ({children}) => {

	const [messages, dispatchMessages] = useReducer(inboxReducer, DEFAULT_INBOX.messages);

    return (
        <InboxContext.Provider value={{ messages, dispatchMessages }}>
            {children}
        </InboxContext.Provider>
    )
}

export {InboxContextProvider}
export default InboxContext;