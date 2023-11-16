import logo from './logo.svg';
// import './App.css';
import Article from './Article';
import Button from './Button';

function App() {
  const handleClick = () => {
    alert ('You clicked to the botton.')
  }
  return (
    <div className="App">

      {/* Composant Button avec le texte "Contact Me". On peut désactiver ce bouton en lui passant la propriété disabled = {props.disabled}. */}
      {/* Les composants ont généralement des valeurs par défaut. Par exemple, pour la propriété "disabled", la valeur par défaut est false. Si je veux le désactiver, je définis simplement disabled à true. ou je fait just disabled */}
      {/* <Button disabled={true}>Contact Me</Button> */}
      <Button id= {1} type = 'reset' isLoading  onClick = { handleClick }>Contact Me</Button>


      {/* Props id, title / passer des children au composant tous ce qui est entre la balise <Article>....</Article> sont des childrn on peut les passer a nos composents evec {props.childern}*/}
      <Article id ={1} title = "La Situation Humanitaire à Gaza" >
      <p>
        La bande de Gaza, territoire densément peuplé coincé entre Israël et la mer Méditerranée, est depuis longtemps au centre de conflits complexes et de difficultés humanitaires. Alors que la région a fait les gros titres en raison des tensions politiques et des affrontements armés, il est essentiel d'explorer la vie quotidienne des habitants de Gaza et les défis auxquels ils font face.  
      </p>
      </Article>

      <Article id={2} title = "World" />
      <p>
        Gaza est le foyer d'une population diversifiée, confrontée à des défis économiques, sanitaires et éducatifs. Les restrictions de mouvement, les pénuries d'électricité et d'eau, ainsi que les tensions constantes ont créé un contexte difficile pour les Gazaouis. Les conflits armés récurrents ont laissé des cicatrices profondes, affectant la psyché collective et la vie quotidienne de la population.
      </p>

    </div>
  );
}

export default App;
