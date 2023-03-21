import css from './DropdownAccordion.module.scss'

import { Item } from '../../lib/types/Item';
import { SearchForm } from '../SearchForm';


interface Props {
    searchValue: string;
    setSearchValue: (value: string) => void;
    filteredCountries: Item[];
    selectedItems: Item[];
    handleCheckboxChange: (item: Item) => void;
}

export const DropdownAccordion = ({ searchValue, setSearchValue, filteredCountries, selectedItems, handleCheckboxChange, }: Props) => {

    return (
        <div className={css.accordion}>

            <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />

            <div className={css.accordion__item}>
                {filteredCountries.length > 0 ?
                    filteredCountries.map((item, index) =>
                        <div className={css.label__item}>
                            <input type="checkbox" className={css.custom_checkbox}
                                checked={selectedItems.some((checkedItem) => checkedItem.id === item.id)}
                                onChange={() => handleCheckboxChange(item)}
                                id={item.id + item.title} name={item.title} value="yes" />
                            <label htmlFor={item.id + item.title} key={index} >
                                <img src={item.logo} alt={`${item.logo}-icon`} />
                                {item.title}</label>
                        </div>
                    )
                    :
                    <p className={css.lenght__item}>
                        Такой cтарны нет
                    </p>
                }
            </div>
        </div>
    )
}