import React, {useState} from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [stateAge, setStateAge] = useState(age); 
    
    
    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age:{stateAge}</p>
            <button onClick={() => setStateAge(stateAge + 1)}>
                Birthday button for {firstName} {lastName}</button>
            <p>Hair Color:{hairColor}</p>
            <div>
              
            </div>

            
        </div>
      
    )





}

export default PersonCard;
