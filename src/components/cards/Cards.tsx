import "./Cards.css"

interface ICards {
    url: string;
    title: string;
    price: number;
}

const Cards: React.FC<ICards> = (props) => {
    return ( 
        <div className="productcard">
            <img src={props.url} alt="product"/>
            <p>{props.title}</p>
            <p>${props.price}</p>
            <a href="#">BUY NOW</a>
        </div>
    );
}

export default Cards;