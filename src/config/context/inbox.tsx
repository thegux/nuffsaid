import React,  {createContext} from 'react';
import ReceivedMessage from '../interfaces/messages';

type DispacthProps = {
    type: string,
    message: ReceivedMessage
}

type PropsInboxContext = {
    messages: ReceivedMessage[],
    dispatchMessages: React.Dispatch<DispacthProps>,
}

const DEFAULT_INBOX = {
    messages: [] as ReceivedMessage[],
    dispatchMessages: () => {},
}

const InboxContext = createContext<PropsInboxContext>(DEFAULT_INBOX);
export default InboxContext;