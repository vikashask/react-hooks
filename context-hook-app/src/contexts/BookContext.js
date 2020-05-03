import React,{createContext,useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) =>{
const [books, setBooks] = useState(
[
    {title:'Angular',id:1},
    {title:'Node',id:2},
    {title:'React',id:3},
    {title:'Js',id:4},
]
);
    return(
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;