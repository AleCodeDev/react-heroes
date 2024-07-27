import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && (heroes.length === 0);


    const { searchText, onInputChange } = useForm({
        searchText: q
    });



    const onSearchSubmit = (event) => {
        event.preventDefault();
        // if ( searchText.trim().length <= 1 ) return;

        navigate(`?q=${searchText}`);
    }


    return (
        <div className="col mb-4">
            <h1 className="d-flex justify-content-center p-4">Find To Hero</h1>

            <form className="d-flex justify-content-between" onSubmit={onSearchSubmit}>
                <input
                    type="search"
                    placeholder="Searching"
                    className="form-control m-1 p-2"
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={onInputChange}
                />
                <button className="m-1 rounded border-0 p-2 btn btn-warning">
                    Search
                </button>
            </form>

            <div className="d-flex row justify-content-center al">
                <div className="bg-dark text-white rounded mt-4 p-3">
                    <h3>Results:</h3>
                    <div>
                        <div className="p-2 bg-primary" style={{ display: showSearch ? '' : 'none' }}>Search a Hero</div>
                        <div className="p-2 bg-danger" style={{ display: showError ? '' : 'none' }}>No hero with <b>{q}</b> </div>
                    </div>
                </div>
                <div className="row row-cols-4 g-3 mt-4">
                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
