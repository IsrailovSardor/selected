import css from './DropdownAll.module.scss';

import { Item } from '../../lib/types/Item';
import { DropdownItems } from '../DropdownItems';


interface Props {
    selectedItems: Item[];
    setIsOpenSelect: (value: boolean) => void;
    isOpenSelect: boolean;
    arrow: string;
    handleDelete: (item: Item) => void;
}

export const DropdownAll = ({ selectedItems, setIsOpenSelect, isOpenSelect, arrow, handleDelete }: Props) => {
    return (
        <div className={css.dropdown__all}>
            <DropdownItems selectedItems={selectedItems} handleDelete={handleDelete} />
            <img src={arrow}
                style={{
                    transform: isOpenSelect ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
                alt="arrow-icon" onClick={() => setIsOpenSelect(!isOpenSelect)} className={css.arrow_up} />
        </div>
    );
};