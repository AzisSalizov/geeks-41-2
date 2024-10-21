import React from 'react';
import classes from "./PokemonCard.module.scss";
import Button from "../button/Button";

const PokemonCard = ({pokemon, onMoreInfo}) => {
    return (
        <div className={classes.pokemon_card}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
            <Button color='purple' action={() => onMoreInfo(pokemon)} title={'Подробнее'}/>
        </div>
    );
};

export default PokemonCard;
