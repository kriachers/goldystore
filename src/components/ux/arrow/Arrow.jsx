function Arrow(props) {
    return (

        <div className="arrow">
            <svg className={`arrow-icon ${props ? props.class : ''}`} width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464465C12.9763 0.269203 12.6597 0.269203 12.4645 0.464465C12.2692 0.659727 12.2692 0.97631 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.73079 12.9763 7.73079 13.1716 7.53553L16.3536 4.35355ZM4.37114e-08 4.5L16 4.5L16 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="black"/>
            </svg>

            </div>
    );
}

export default Arrow;