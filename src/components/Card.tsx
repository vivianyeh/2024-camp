import { CardProps } from '../interfaces/PortfolioProps';
export const Card = ({ cards }: CardProps) => {
    return (
        <>
            {
                cards.map((card) => (
                    <div className="card">
                        <img src={card.url} alt={card.title} />
                        <div className="card-info">
                            <h2 className="fs-3">{card.title}</h2>
                            <p className="fs-6">{card.info}</p>
                            <ul>
                                {card.items.map((item) => (
                                    <li className="fs-6">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
            }

        </>
    )
}
export default Card;
