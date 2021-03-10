import { useEffect, useRef, useState } from 'react';

export const useFetch = ( url ) => {

    const initialState = {
        data: null,
        loading: true,
        error: null
    };

    const isMounted = useRef(true);

    const [state, setState] = useState( initialState );

    useEffect( () => {
        return () => {
            isMounted.current(false);
        }
    }, []);

    useEffect(() => {

        setState( initialState );
        
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if ( isMounted.current ) {
                
                    setState(
                        {
                            loading: false,
                            error: null,
                            data
                    });                   
                }

                return () => state;
            })
            .catch( () => {
                setState(
                    {
                        data: null,
                        loading: false,
                        error: 'Can not load the info'
                });
            });
        
    }, [url]);


    return state;
  
}
