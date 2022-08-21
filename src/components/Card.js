import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';


const Card = () => {

    const [allCards, setAllCards] = useState([]);

    // const [cards, setCards] = useState({});

    useEffect(() => {
        axios.get("https://api.magicthegathering.io/v1/cards")
            .then((response) => {
                console.log(response.data.cards);
                setAllCards(response.data.cards);
            })
            .catch((err) => {
                console.log(err.response);
            });
        }, []);
        

    return (
        <div className="col-10 mx-auto bg-transparent ">
            {/* <h1>Cards</h1> */}
            <table className="table table-striped col-10 mx-auto bg-transparent">
                <thead className="bg-transparent">
                    <tr className="bg-transparent">
                        <th className="text-white">Card Image</th>
                        <th className="text-white">Card Name</th>
                        <th className="text-white">Color</th>
                        <th className="text-white">Type</th>
                        <th className="text-white">text</th>
                        <th className="text-white">Mana Cost</th>
                        <th className="text-white">Power/Toughness</th>
                    </tr>
                </thead>
                <tbody className="bg-transparent">
                {allCards.map((allCards) => {
                    return (
                        <tr className='mtgCardRow bg-transparent'>
                            <td><img className='mtgCardImage' src={allCards.imageUrl} alt=""></img></td>
                            <td className="text-white">{allCards.name}</td>
                            <td className="text-white">{allCards.colors}</td>
                            <td className="text-white">{allCards.type}</td>
                            <td className="text-white">{allCards.text}</td>
                            <td className="text-white">{allCards.manaCost}</td>
                            <td className="text-white">{allCards.power}/{allCards.toughness}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            {/* <AllCardsFromThisSet theseCards={cards.set} /> */}
        </div>
    );
}

export default Card;