export const Test = (props)=>{
    const timer = "10 PM";
    return (
        <div>
        <h1>{props.name} {props.value} {timer}</h1>
        </div>
    )
};

export default Test;