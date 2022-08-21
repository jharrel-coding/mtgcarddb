import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';


const Set = () => {

    const [allSets, setAllSets] = useState([]);

    // const [cards, setCards] = useState({});

    useEffect(() => {
        axios.get("https://api.magicthegathering.io/v1/sets")
            .then((response) => {
                console.log(response.data.sets);
                setAllSets(response.data.sets);
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
                        <th className="text-white">Set Name</th>
                        <th className="text-white">Set Type</th>
                        {/* <th className="text-white">Release Date</th> */}
                        {/* <th className="text-white">Card Info Code</th> */}
                        {/* <th className="text-white">Type</th> */}
                        {/* <th className="text-white">text</th> */}
                        {/* <th className="text-white">Mana Cost</th> */}
                        {/* <th className="text-white">Power/Toughness</th> */}
                    </tr>
                </thead>
                <tbody className="bg-transparent">
                {allSets.map((allSets) => {
                    return (
                        <tr className='mtgCardRow bg-transparent'>
                            {/* <td><img className='mtgCardImage' src={allSets.imageUrl} alt=""></img></td> */}
                            <td className="text-white">{allSets.name}</td>
                            <td className="text-white">{allSets.type}/{allSets.block}</td>
                            {/* <td className="text-white">{allSets.releaseDate}</td> */}
                            {/* <td className="text-white">{allSets.magicCardsInfoCode}</td> */}
                            {/* <td className="text-white">{allSets.manaCost}</td> */}
                            {/* <td className="text-white">{allSets.power}/{allSets.toughness}</td> */}
                        </tr>
                    );
                })}
                </tbody>
            </table>
            {/* <AllCardsFromThisSet theseCards={cards.set} /> */}
        </div>
    );
}

export default Set;