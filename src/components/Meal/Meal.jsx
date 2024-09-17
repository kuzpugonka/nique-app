import formatPrice from "../../utils/formatPrice.js";

const Meal = ({ data }) => {
  const {
    name,
    oldPrice = null,
    price,
    description,
    img,
    tags = null,
    label = null,
  } = data;

  const classNames = (tags) => {
    let names = "item";

    if (tags) {
			names += tags.includes('vegan') ? ' item--vegan' : '';
			names += tags.includes('special') ? ' item--special' : '';
		}

    return names;
  };

  return (
    <li className={classNames(tags)} data-label={label}>
      <img src={img.src} srcSet={img.srcset} alt={name} className="item-img" />
      <div className="item-desc">
        <div className="item-header">
          <h3 className="item-title">{name}</h3>
          <div className="item-price">
            <span>{oldPrice && formatPrice(oldPrice)}</span>
            {formatPrice(price)}
          </div>
        </div>
        <p className="item-text">{description}</p>
      </div>
    </li>
  );
};

export default Meal;
