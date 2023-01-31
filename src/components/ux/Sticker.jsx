function Sticker (props) {
    return (
        <span className={`sticker ${props.class}`}>{props.content}</span>
    );
}

export default Sticker ;