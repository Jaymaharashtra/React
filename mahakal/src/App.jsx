import React, { useState } from "react";


const App = () =>{

    const [username, setusername] = useState('');
    
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log('submitted....')
        console.log(username)
    }
    return(
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input value={username} onChange={(e)=>{
                    setusername(e.target.value);
            }}  type="text" placeholder="enter value"></input>
            <button>Submit</button>
            <button onClick={()=>{
                setusername('');
            }}>Reset</button>
        </form>
    </div>
    );
}

export default App;