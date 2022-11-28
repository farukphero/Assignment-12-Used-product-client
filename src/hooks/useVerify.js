import { useEffect } from 'react';

const useVerify = (title) => {
    useEffect(()=>{
    document.title= `${title} - Aranoz.`
    },[title])
};

export default useVerify;