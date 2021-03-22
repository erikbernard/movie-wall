import { createContext, ReactNode, useState } from 'react';

interface AddMovieContextData {
    visible: string;
    viewMovieValues: ValueForm;
    valuesForm: ValueForm;
    listMovieItens: ValueMovie[];
    controlPause: number;
    statusVisibility: (value: string) => void;
    setListMovieItens: (value: ValueMovie[]) => void;
    setValuesForm: (value: ValueForm) => void;
    setViewMovieValues: (value: ValueForm) => void;
    setControlPause: (value: number) => void;
}
// title: string;url: string
interface AddMovieProviderProps {
    children: ReactNode;
}
interface ValueMovie {
    components: JSX.Element[];
    id: number;
}

const valueMovie: ValueMovie[] = [{
    components: [],
    id: 0,
}]
interface ValueForm {
    title: string;
    url: string;
}
const initialValue: ValueForm = {
    title: '',
    url: '',
}

export const AddMovieContext = createContext({} as AddMovieContextData);

export function AddMovieProvider({children}: AddMovieProviderProps){
    const [viewMovieValues, setViewMovieValues ] = useState<ValueForm>(initialValue);
    const [controlPause, setControlPause ] = useState(1);
    const [valuesForm, setValuesForm ] = useState(initialValue);
    const [visible, setVisible ] = useState('none');
    const [listMovieItens, setListMovieItens] = useState(valueMovie);

    function statusVisibility(value: string){
        setVisible(value);
    }

    return(
        <AddMovieContext.Provider 
            value={{
                visible,
                listMovieItens,
                valuesForm,
                viewMovieValues,
                controlPause,
                statusVisibility,
                setListMovieItens,
                setValuesForm,
                setViewMovieValues,
                setControlPause
            }}>
            {children}
        </AddMovieContext.Provider>
    );
}