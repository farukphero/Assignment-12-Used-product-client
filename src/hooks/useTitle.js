import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
    document.title= `${title} - Aranoz.`
    },[title])
};

export default useTitle;