import css from './DropdownLabel.module.scss';


interface Props {
    label: string;
}

export const DropdownLabel = ({ label }: Props) => {
    return (
        <p className={css.dropdown__label}>{label}</p>
    );
};