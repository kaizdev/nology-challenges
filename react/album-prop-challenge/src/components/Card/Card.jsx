import style from "./Card.module.scss";

const Card = ({ albumTitle, bandName, albumRating, image }) => {
    const cardImage = {
        backgroundImage: `url(${image})`,
    };
    return (
        <div className={style.card} style={cardImage}>
            <p>{albumTitle}</p>
            <p>{bandName}</p>
            <p>Rating: {albumRating}</p>
        </div>
    );
};

export default Card;
