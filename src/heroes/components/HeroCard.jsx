import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return (alter_ego === characters)
        ? <></>
        : <p>{characters}</p>;
}


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/public/heroes/${id}.jpg`;

    // const charactesByHero =  (<p>{ characters }</p>);


    return (
        <div className="d-flex justify-content-center animate__animated animate__fadeIn">
            <div className="row g-1" >

                <div className="p-3 bg-dark text-white">

                    <div className="d-flex justify-content-center">
                        <Link
                            to={`/hero/${id}`}
                            
                        >
                            <img src={heroImageUrl} className="card-img" alt={superhero} />
                        </Link>
                    </div>

                    <div className='p-2'>

                        <div className="card-body">

                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            <CharactersByHero characters={characters} alter_ego={alter_ego} />

                            <p className="card-text">
                                <small className="text-primary fw-semibold fs-6">{first_appearance}</small>
                            </p>


                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
