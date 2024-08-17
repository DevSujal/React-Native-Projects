import {createContext, useContext} from 'react';

const RequestResponseContext = createContext({
  data: [
    {}
  ],

  addQuestion: (question) => {},
  addAnswer: (id, answer) => {},
});

export const RequestResponseProvider = RequestResponseContext.Provider;

export default function useRequestResponse() {
  return useContext(RequestResponseContext);
}
