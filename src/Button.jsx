import React from "react";

const Button = ({isLoading = false, children = null , ...rest}) => {
    // console.log('BUTTON PROPS >>>',props);

    // on peut extraire les proprieter comme ce la 
    // const {isLoading, children, ...rest} = props;
    console.log('REST >>>>', rest);

    return(
        <>
            {/* on peut utiliser le 'spread operator' pour passer des propriétés à un composant React */}
            {/* La propriété onClick doit être traitée séparément, car il s'agit d'un événement particulier */}
            <button { ...rest }>
                { isLoading ? 'Loading... ' : children }
                </button>
        </>
    )
}
export default Button;

// La destructuration est une fonctionnalité de JavaScript qui permet d'extraire des valeurs d'objets ou de tableaux en utilisant une syntaxe concise. Dans le contexte de votre composant Button, la destructuration est utilisée dans la signature de la fonction pour extraire spécifiquement les propriétés isLoading, children, et toutes les autres propriétés restantes dans un objet appelé rest.

// Analysons la ligne de code en question :

// jsx
// Copy code
// const Button = ({ isLoading, children, ...rest }) => {
// { isLoading, children, ...rest }:

// Les accolades indiquent l'utilisation de la destructuration.
// isLoading et children sont des propriétés spécifiques du composant Button. La destructuration extrait ces propriétés du premier argument de la fonction (supposé être un objet).
// ...rest est appelé un "rest" ou "spread" operator. Il permet de rassembler toutes les autres propriétés qui ne sont pas explicitement mentionnées (isLoading et children) dans un nouvel objet appelé rest.