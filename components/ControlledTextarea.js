import styles from './components.module.css';

function ControlledTextarea({ name, value, updateValue }) {
    return (
        <>
            <label for={name}>{name}</label>
            <textarea
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={(e) => {
                    updateValue(e.target.value);
                }}
                className={styles.textarea}
            ></textarea>
        </>
    );
}

export default ControlledTextarea;
