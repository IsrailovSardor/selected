import { useState } from 'react';

import css from './Dropdown.module.scss';

import arrow from '../../assets/media/arrow-up.svg';
import { countriesList } from '../../api/data';
import { DropdownLabel } from '../../shared/ui/DropdownLabel';
import { Item } from '../../shared/lib/types/Item';
import { isChecked, removeItemFromArray } from '../../shared/lib/utils/functionDropdown';
import { DropdownAll } from '../../shared/ui/DropdownAll';
import { DropdownAccordion } from '../../shared/ui/DropdownAccordion';


const Dropdown = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false)
    const [countries, setCountries] = useState<Item[]>(countriesList)
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);

    const filteredCountries = countries.filter((country) => {
        return country.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    const handleCheckboxChange = (item: Item) => {
        const isCheckedItem = isChecked(selectedItems, item);
        if (isCheckedItem) {
            setSelectedItems((prev) => removeItemFromArray(prev, item));
        } else {
            setSelectedItems((prev) => [...prev, item]);
        }
    };

    const handleDelete = (item: Item) => {
        const filteredSelectedItems = removeItemFromArray(selectedItems, item);
        setSelectedItems(filteredSelectedItems);
    };

    return (
        <div className={css.dropdown}>
            <DropdownLabel label="Язык" />
            <DropdownAll
                selectedItems={selectedItems}
                setIsOpenSelect={setIsOpenSelect}
                isOpenSelect={isOpenSelect}
                arrow={arrow}
                handleDelete={handleDelete}
            />
            {isOpenSelect &&
                <DropdownAccordion
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    filteredCountries={filteredCountries}
                    selectedItems={selectedItems}
                    handleCheckboxChange={handleCheckboxChange}
                />
            }
        </div>
    );
};
export default Dropdown