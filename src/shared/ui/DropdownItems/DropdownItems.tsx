import css from './DropdownItems.module.scss';

import delete__icon from '../../../assets/media/delete.svg';
import { Item } from '../../lib/types/Item';


interface Props {
    selectedItems: Item[];
    handleDelete: (item: Item) => void;
}

export const DropdownItems = ({ selectedItems, handleDelete }: Props) => {
    return (
        <div className={css.dropdown__items}>
            {selectedItems.map((item) => (
                <div key={item.id} className={css.dropdown__item}>
                    <p className={css.item__title}>{item.title}</p>
                    <img
                        src={delete__icon}
                        alt='delete-icon'
                        className={css.item__delete}
                        onClick={() => handleDelete(item)}
                    />
                </div>
            ))}
        </div>
    );
};


