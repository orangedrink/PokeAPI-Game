import React, { useRef, useEffect, useState } from "react";

export default function Deck({ playersArray = [], activePokemon, setPlayersArray}) {
    const [deck, setDeck] = useState([]);
    const [error, setError] = useState(null);

    const query = `
    query images($names: [String!]) {
        pokemon: pokemon(where: { name: { _in: $names } }) {
            name
            pokemonsprites {
                sprites 
            }
        }
    }
  `;

    useEffect(() => {
        if (!playersArray?.length) { setDeck([]); return; }

        const ctrl = new AbortController();
        (async () => {
            try {
                const res = await fetch("https://graphql.pokeapi.co/v1beta2", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify({ query, variables: { names: playersArray } }),
                    signal: ctrl.signal
                });
                const json = await res.json();
                if (json.errors) throw new Error(json.errors.map(e => e.message).join("; "));
                const deckData = (json.data?.pokemon ?? []).map(p => {
                    
                    const raw = p?.pokemonsprites;
                    console.log('raw sprites', raw);
                    let front = null;
                    front = raw[0].sprites.front_default;
                    return { name: p.name, sprite: front };
                });

                setDeck(deckData);
            } catch (e) {
                if (e.name !== "AbortError") setError(e.message || "Fetch failed");
            }
        })();

        return () => ctrl.abort();
    }, [playersArray]);
    
    const cardStartDrag = useRef(0);
    const cardEndDrag = useRef(0);

    const handleDragEnd = (name) => {
        const startIndex = playersArray.indexOf(cardStartDrag.current);;
        const endIndex = playersArray.indexOf(cardEndDrag.current);
        if (startIndex === -1 || endIndex === -1) return;
        const newArray = [...playersArray];
        newArray.splice(startIndex, 1);
        newArray.splice(endIndex, 0, cardStartDrag.current);
        setPlayersArray(newArray);
        localStorage.setItem('playersArray', JSON.stringify(newArray));
    }
    return (
        <div className="lineup-container">
            <h5>Your Deck</h5>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <div className="deck-grid">
                {playersArray.map(card => {
                    card = deck.find(p => p.name === card) || { name: card };
                    return (
                        <div draggable onDragOver={e => e.preventDefault()} onDragStart={() => cardStartDrag.current = card.name} onDragEnter={() => cardEndDrag.current = card.name} onDragEnd={() => handleDragEnd(card.name)} className={card.name === activePokemon ? "active card" : "card"} key={card.name}>
                            {card.sprite ? <img className src={card.sprite} alt={card.name} width={96} height={96} /> : <div className="ph">No image</div>}
                            <div className="nm">{card.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
