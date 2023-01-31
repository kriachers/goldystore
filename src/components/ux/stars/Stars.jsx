function Stars(props) {

    const ratingArr = ['inactive', 'inactive', 'inactive', 'inactive', 'inactive'];

    function createStarArray (rating) {
        
        const checkerStars = Math.round(rating)
        
        if (checkerStars - rating !== 0) {
          ratingArr[checkerStars - 1] = 'halfactive'
        }
        
        for (let i = 0; i < (rating - 1); i++) {
          ratingArr[i] = 'active'
        }
    }

    createStarArray(props.rating);
    
    return (
        <div className={`stars ${props.class ? props.class : ''}`}>
            <div className="stars__plate">
                {
                    ratingArr.map((item) => {
                        return (
                            <img src={`./ux/stars/${item}.svg`} alt="" className="stars-item" />
                        )
                        
                    })
                }
            </div>
            <p className="stars__rating">{props.rating}</p>
        </div>
    );
}

export default Stars;