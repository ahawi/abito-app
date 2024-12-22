import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ id, title, price, address, date, image }) => {
  return (
    <li className="card__item">
      <Link to={`/product/${id}`} className="card__link">
        <div className="card__image">
          <img
            src={image}
            alt={title}
            width="264"
            height="178"
            loading="lazy"
          />
        </div>
        <div className="card__body">
          <h3 className="card__body-title">{title}</h3>
          <p className="card__body-price">{price} ₽</p>
          <p className="card__body-address">{address}</p>
          <p className="card__body-date">{date}</p>
        </div>
      </Link>
    </li>
  );
};
