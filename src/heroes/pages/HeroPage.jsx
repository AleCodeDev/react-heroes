import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';


export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( id ), [ id ]); 

  const onNavigateBack = () => {
    navigate(-1);
  }


  if ( !hero ) {
    return <Navigate to="/marvel" />
  }
  
  return (
    <div className="row mt-5 p-4 bg-dark text-white rounded">

            <div className="col-4">
                <img
                    src={`https://AleCodeDev.github.io/react-heroes/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3 className="ml-2 text-primary">{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <p> <b>Alter ego:</b> {hero.alter_ego} </p>
                    <p> <b>Publisher:</b> {hero.publisher} </p>
                    <p> <b>First appearance:</b> {hero.first_appearance} </p>
                    <p> <b>Characters:</b> {hero.characters} </p>
                </ul>

                <button
                    className="btn btn-danger"
                    onClick={onNavigateBack}
                >
                    Regresar
                </button>
            </div>

        </div>
  )
}
