function ControlledInput({ name, value, updateValue }) {
    return (
        <>
            <label for={name}>{name}</label>
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={(e) => {
                    updateValue(e.target.value);
                }}
            ></input>
        </>
    );
}

export default ControlledInput;
