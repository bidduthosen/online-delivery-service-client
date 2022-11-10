const { useEffect } = require("react")

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - online delivery service`;
    },[title])
}

export default useTitle;