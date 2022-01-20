import inboxReducer from '../config/context/reducers/inbox'

describe('Main App Tests',  () => {

    it("adds message properly to the state", () => {
          const initialState = {messages:  [], alertMessage: ''};
          const updateAction = {type: 'ADD_MESSAGE', message:  {message: 'Test Message', priority: 0, id: '1'}}
          const updatedState = inboxReducer(initialState, updateAction);
          expect(updatedState.messages).toHaveLength(1);      
    });

    it("clears all messages", () => {
        const initialState = {messages:  [{message: 'Test Message', priority: 0, id: '1'}, 
                                          {message: 'Test Message 2', priority: 1, id: '2'}], alertMessage: ''};
        const updateAction = {type: 'CLEAR_ALL'}
        const updatedState = inboxReducer(initialState, updateAction);
        expect(updatedState.messages).toHaveLength(0);      
    });

    it("clears a single messages", () => {
        const initialState = {messages:  [{message: 'Test Message', priority: 0, id: '1'}, 
                                          {message: 'Test Message 2', priority: 1, id: '2'}], alertMessage: ''};
        const updateAction = {type: 'CLEAR_MESSAGE', message: {message: 'Test Message', priority: 0, id: '1'}}
        const updatedState = inboxReducer(initialState, updateAction);
        expect(updatedState.messages[0].id).toBe("2");      
    });

    it("clears notifications", () => {
        const initialState = {messages:  [{message: 'Test Message', priority: 0, id: '1'}, 
                                          {message: 'Test Message 2', priority: 1, id: '2'}], alertMessage: '2'};
        const updateAction = {type: 'CLEAR_NOTIFICATION'}
        const updatedState = inboxReducer(initialState, updateAction);
        expect(updatedState.alertMessage).toBe("");      
    });

})
