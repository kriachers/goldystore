function Tooltip(props) {
    return (
        <div className={`tooltip__wrapper ${props.class}`}>
            <div className={`tooltip`}>
                <p className="tooltip__descr">
                {props.text}
                </p>
            </div>
        </div>
    );
}

export default Tooltip;