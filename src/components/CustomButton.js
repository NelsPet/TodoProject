
export const CustomButton = ({text, onClick}) => {
    return (
        <button onClick={()=>onClick()}>{text}</button>
    )
}
