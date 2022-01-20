import { render, screen, } from '@testing-library/react';
import InboxContext from '../config/context/inbox'
import { CardTile } from '../components';

describe('Card Tile tests', () => {
    
    it('Has counter displaying default value', () => {
        render(<CardTile title='Default title' priority={0}/>)
        expect(screen.getByText(/^Count: /)).toHaveTextContent('Count: 0')
      });
      
    it('Has counter displaying positive card amount', () => {
          const messageState = {messages:  [{message: 'Test Message', priority: 0, id: '1'}], alertMessage: ''}
          const dispatchMessages = () => {};
      
          render(
          <InboxContext.Provider value={{messageState, dispatchMessages}}>
              <CardTile title='Default title' priority={0}/>
          </InboxContext.Provider>)
          expect(screen.getByText(/^Count: /)).toHaveTextContent('Count: 1')
    });
      
    it('has counter filtering cards by priority', () => {
          const messageState = {messages:  [{message: 'Test Message', priority: 1, id: '1'}], alertMessage: ''}
          const dispatchMessages = () => {};
      
          render(
          <InboxContext.Provider value={{messageState, dispatchMessages}}>
              <CardTile title='Default title' priority={0}/>
          </InboxContext.Provider>)
          expect(screen.getByText(/^Count: /)).toHaveTextContent('Count: 0')
    });
}) 
