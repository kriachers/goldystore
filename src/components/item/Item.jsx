import Sticker from "../ux/Sticker";
import Price from '../ux/price/Price'
import Dots from "../ux/dots/Dots";
import Like from "../ux/like/Like";


function Item (props) {

    return (
            <div className="sale-plate__tile">
                    
                    <svg onClick={() => props.openEye(props.item)} className="sale-icon__eye svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="#C9C9C9" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0044 3.5C13.0044 2.94772 12.5567 2.5 12.0044 2.5C11.4521 2.5 11.0044 2.94772 11.0044 3.5V5.54989C10.0448 5.64609 9.12848 5.87731 8.27405 6.20772L7.4446 5.05037C7.12289 4.60146 6.49817 4.49836 6.04927 4.82007C5.60036 5.14179 5.49726 5.76651 5.81898 6.21541L6.45792 7.10695C5.92702 7.43178 5.434 7.79271 4.98539 8.17708C3.24791 9.6658 2 11.6684 2 13.5C2 15.3316 3.24791 17.3342 4.98539 18.8229C6.76222 20.3453 9.23586 21.5 12 21.5C14.7639 21.5 17.2376 20.3462 19.0145 18.8241C20.7522 17.3355 22 15.333 22 13.5C22 11.667 20.7522 9.66444 19.0145 8.17591C18.6848 7.89346 18.331 7.62368 17.9559 7.37161L18.6253 6.43759C18.947 5.98869 18.844 5.36398 18.3951 5.04225C17.9462 4.72053 17.3214 4.82362 16.9997 5.27252L16.1918 6.39975C15.2102 5.96793 14.1376 5.66528 13.0044 5.55075V3.5ZM12 9.5C9.79086 9.5 8 11.2909 8 13.5C8 15.7091 9.79086 17.5 12 17.5C14.2091 17.5 16 15.7091 16 13.5C16 11.2909 14.2091 9.5 12 9.5Z"/>
                    </svg>

                    
                        <div className="sale-tile__stickers"> 
                            <div className="sale-stickers__text">
                                {props.item.isSale ?  <Sticker class={'sale__stickers-offer'} content={'Sale'}></Sticker> : ''}
                            </div>
                            <div className="sale-stickers__icons">
                                <Like item={props.item}></Like>
                            </div>
                        </div>
 
                        <div className="sale-plate__icon">
                            <div className="sale-plate__img-wrapper">
                                <img src={`${props.item.img}`} srcSet={`${props.item.imgRetina} 2x`} alt="" className="sale__icon-picture" />
                            </div>
                            <Dots class={'sale-icon__dots'}></Dots>
                        </div>
    
                        <Price item={props.item} actualPrice={props.item.actualPrice} currentPrice={props.item.currentPrice}></Price>
                        <p className="sale-title">{props.item.title}</p>
            </div>
    
    );
}

export default Item ;