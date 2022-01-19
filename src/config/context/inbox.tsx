import React,  {createContext} from 'react';
import ReceivedMessage from '../interfaces/messages';


type PropsInboxContext = {
    messages: ReceivedMessage[],
    setMessages: React.Dispatch<React.SetStateAction<ReceivedMessage[]>>
}

const DEFAULT_INBOX = {
    messages: [] as ReceivedMessage[],
    setMessages: () => {}
}

const InboxContext = createContext<PropsInboxContext>(DEFAULT_INBOX);

export default InboxContext;