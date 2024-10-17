import React from 'react';
import './PokemonModal.module.scss';
import classes from "./PokemonModal.module.scss";

const PokemonModal = ({pokemon, onClose}) => {
    if (!pokemon) return null;

    return (
        <div className={classes.modal_overlay} onClick={onClose}>
            <div className={classes.modal_content} onClick={(e) => e.stopPropagation()}>
                <button className={classes.close_btn} onClick={onClose}>✕</button>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                <h2>{pokemon.name}</h2>
                <div className={classes.modal_content_block}>
                    <p><strong>Abilities:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}
                    </p>
                    <p><strong>Stats:</strong> {pokemon.stats.map(stat => stat.stat.name).join(', ')}</p>
                    <p><strong>Types:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
                    <p><strong>Some moves:</strong> {pokemon.moves.slice(0, 5).map(move => move.move.name).join(', ')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PokemonModal;
