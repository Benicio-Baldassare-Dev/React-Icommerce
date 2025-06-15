import { DotLoader } from "react-spinners";
import './withLoading.css'

const WithLoading = (Component) => {
    function ComponentWithLoading (props){
    if(props.items.length === 0){
        return(
            <div className="Loading">
                <DotLoader color="#ffc0cb" />
            </div>
        )  
    } 
        return(
            <Component {...props} />
        )
    }
    return ComponentWithLoading;
}

export default WithLoading