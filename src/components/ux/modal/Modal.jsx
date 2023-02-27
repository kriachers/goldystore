function Modal (props) {
    return (
        <div className={`modal ${props.modalOpen ? 'open' : ''}`}>
            <div className="modal__close">
                <img className="modal-close__icon" onClick={() => props.setModalOpen(false)} src="./icons/close.svg" alt="" />
            </div>
            <div className="modal__content">
                <img src={`${props.item.img}`} 
                srcSet={`${props.item.imgRetina} 2x`} 
                alt="" 
                className="sale__icon-picture" />
            </div>
        </div>
    );
}

export default Modal ;