import React from 'react';
import "./Textbox.css";

const textbox = () => {
    const [value, setValue] = React.useState('');
    React.useEffect(() => {
        localStorage.setItem('myValueInLocalStorage', value);
    }, [value]);
    const onChange = event => setValue(event.target.value);
    return (
        <div>
            <input value={value} type="text" onChange={onChange} />
            <p>{value}</p>
        </div>
    );
};
export default textbox;