const Button = ({ title, onclick }) => {
    return (
        <>
            <button onclick={onclick} className="border-1 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700">{title}</button>
        </>
    )
}
export default Button;