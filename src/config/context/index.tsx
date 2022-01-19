import React from 'react'
import { InboxContextProvider } from './inbox'


const GlobalContext : React.FC = ({children}) => {
    return <InboxContextProvider>{children}</InboxContextProvider>
}

export default GlobalContext;

