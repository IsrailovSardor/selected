import { useState } from 'react'

import css from './Dropdown.module.scss'

import arrow from '../../assets/media/arrow-up.svg'
import delete__icon from '../../assets/media/delete.svg'
import search__icon from '../../assets/media/search.svg'
import { countriesList } from '../../data'

interface Item {
    id: number,
    title: string,
    logo: string
}

const Dropdown = () => {
    const [valueCountry, setValueCountry] = useState<string>('')
    const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false)
    const [countries, setCountries] = useState<Item[]>(countriesList)
    const [checkedItems, setCheckedItems] = useState<Item[]>([]);
    const filteredCountries = countries.filter(country => {
        return country.title.toLowerCase().includes(valueCountry.toLowerCase())
    })

    const handleCheckboxChange = (item: Item) => {
        const isChecked = checkedItems.some((checkedItem) => checkedItem.id === item.id);
        if (isChecked) {
            setCheckedItems((prev) => prev.filter((checkedItem) => checkedItem.id !== item.id));
        } else {
            setCheckedItems((prev) => [...prev, item]);
        }
    };

    const handleDelete = (item: Item) => {
        const filteredCheckedItems = checkedItems.filter((checkedItem) => checkedItem.id !== item.id);
        setCheckedItems(filteredCheckedItems);
    };

    return (
        <div className={css.dropdown}>
            <p className={css.dropdown__label}>Язык</p>
            <div className={css.dropdown__all}>
                <div className={css.dropdown__items}>
                    {checkedItems.map((item) => (
                        <div key={item.id} className={css.dropdown__item}>
                            <p className={css.item__title}>{item.title}</p>
                            <img src={delete__icon} alt='delete-icon' className={css.item__delete} onClick={() => handleDelete(item)} />
                        </div>
                    ))}
                </div>
                <img src={arrow} 
                style={{
                    transform: isOpenSelect ? 'rotate(180deg)' :  'rotate(0deg)'
                }}
                alt="arrow-icon" onClick={() => setIsOpenSelect(!isOpenSelect)} className={css.arrow_up} />
            </div>
            {isOpenSelect &&
                <div className={css.accordion}>
                    <form className={css.input__block}>
                        <img src={search__icon} alt='search-icon' className={css.saerch__icon} />
                        <input type="text" placeholder='Поиск' className={css.input}
                            value={valueCountry} onChange={(e) => setValueCountry(e.target.value)}
                        />
                    </form>
                    <div className={css.accordion__item}>
                        {filteredCountries.length > 0 ?
                            filteredCountries.map((item, index) =>
                                <div className={css.label__item}>
                                    <input type="checkbox" className={css.custom_checkbox}
                                        checked={checkedItems.some((checkedItem) => checkedItem.id === item.id)}
                                        onChange={() => handleCheckboxChange(item)}
                                        id={item.id + item.title} name={item.title} value="yes" />
                                    <label htmlFor={item.id + item.title} key={index} >
                                        <img src={item.logo} alt={`${item.logo}-icon`} />
                                        {item.title}</label>
                                </div>
                            )
                            :
                            <p className={css.lenght__item}>
                                Такой Старны нет
                            </p>
                        }

                    </div>
                </div>
            }

        </div >
    );
};

export default Dropdown;