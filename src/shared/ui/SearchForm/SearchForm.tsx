import css from './SearchForm.module.scss';

import search__icon from '../../../assets/media/search.svg';


interface Props {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export const SearchForm = ({ searchValue, setSearchValue }: Props) => {
    return (
        <form className={css.input__block}>
            <img src={search__icon} alt="search-icon" className={css.saerch__icon} />
            <input
                type="text"
                placeholder="Поиск"
                className={css.input}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </form>
    );
};
