import React, {useEffect, useState} from 'react';
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonModal from "../PokemonModal/PokemonModal";
import classes from "./PokemonList.module.scss";
import Button from "../button/Button";

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const [limit] = useState(12);

    useEffect(() => {
        const getPokemonList = async (url) => {
            const res = await fetch(url);
            const data = await res.json();

            const promises = data.results.map(async (pokemon) => {
                const res = await fetch(pokemon.url);
                return res.json();
            });

            const detailedPokemonList = await Promise.all(promises);
            setPokemonList(detailedPokemonList);
            setNext(data.next);
            setPrev(data.previous);
        };

        const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(currentPage - 1) * limit}`;
        getPokemonList(apiUrl);
    }, [currentPage, limit]);


    const handleNextPage = () => {
        if (next) {
            setCurrentPage((prev) => prev + 1);
        }
    };


    const handlePrevPage = () => {
        if (prev && currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };


    return (
        <div>
            <h1>Pokemon</h1>
            <div className={classes.pokemon_list}>
                {pokemonList.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        onMoreInfo={setSelectedPokemon}
                    />
                ))}
            </div>

            <div className={classes.pagination}>
                <Button color='black' title='Prev' action={handlePrevPage} disabled={!prev || currentPage === 1}/>


                <p>{currentPage}</p>
                <Button color='black' title='Next' action={handleNextPage} disabled={!next}/>
            </div>

            {selectedPokemon && (
                <PokemonModal
                    pokemon={selectedPokemon}
                    onClose={() => setSelectedPokemon(null)}
                />
            )}
        </div>
    );
};

export default PokemonList;
