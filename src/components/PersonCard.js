import React, {useState} from 'react';

const PersonCard = (props) => {
   
    const [stateAge, setStateAge] = useState(props.age); 
    
    
    return (
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age:{stateAge}</p>
            <button onClick={() => setStateAge(stateAge + 1)}>
                Birthday button for {props.firstName} {props.lastName}</button>
            <p>Hair Color:{props.hairColor}</p>

            
        </div>
    )





}

export default PersonCard;
