const Card = props => {
    const{ name, imageUrl } = props;

    return (
        <div className="cardContainer" >
            <div className="cardContent">
            <h4>{name}</h4>
            <img className="cardContent__image" src={imageUrl} alt={name} />
            </div>
        </div>
    );
};

export default Card;