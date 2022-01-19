import React, { useState } from "react";
import { useEffect } from "react";
import generateMessage, { Message } from "./Api";
import { CardTile } from "./components";
import Theme from "./config/theme";
import Page from "./styles";
import InboxContext from "./config/context/inbox";
import ReceivedMessage from "./config/interfaces/messages";
import { v4 as uuidv4 } from 'uuid';

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<ReceivedMessage[]>([]);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setMessages((oldMessages) => [...oldMessages, {...message, id: uuidv4()}]);
    });
    return cleanUp;
  }, [setMessages]);

  return (
    <InboxContext.Provider value={{messages, setMessages}}>
      <Page>
        <Theme />
        <header>
          <h1>nuffsaid.com Coding Challenge</h1>
        </header>

        <div className="menu">
          <button>STOP</button>
          <button>CLEAR</button>
        </div>

        <div className="cardsContainer">
          <CardTile title={"Error Type 1"} priority={0} />
          <CardTile title={"Warning Type 2"} priority={1}/>
          <CardTile title={"Info Type 3"} priority={2}/>
        </div>
      </Page>
    </InboxContext.Provider>
  );
};

export default App;
