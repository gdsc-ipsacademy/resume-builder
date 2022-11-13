import React, { forwardRef, useImperativeHandle, useState } from 'react'

const PersonalDetailsForm = forwardRef((props, _ref) => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [ph, setPh] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [github, setGithub] = useState('');
    const [linkedIn, setLinkedIn] = useState('');

    useImperativeHandle(_ref, () => ({
        getPersonalDeets: () => {
            return { fname, lname, email, ph, portfolio, github, linkedIn };
        },
    }));

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    return (
        <div>
            <form>
                <h3>Enter Personal Details </h3>

                <input type="text" value={fname} placeholder='First Name*' onChange={e => setFname(e.target.value)} required />

                <input type="text" value={lname} placeholder='Last Name*' onChange={e => setLname(e.target.value)} required />

                <input type="email" value={email} placeholder='Email*' onChange={e => setEmail(e.target.value)} required />

                <input type="number" value={ph} placeholder='Phone Number*' onChange={e => setPh(e.target.value)} required />

                <input type="text" value={portfolio} placeholder='Portfolio Link' onChange={e => setPortfolio(e.target.value)} />

                <input type="text" value={github} placeholder='Github Link' onChange={e => setGithub(e.target.value)} />

                <input type="text" value={linkedIn} placeholder='LinkedIn Link' onChange={e => setLinkedIn(e.target.value)} />

                <input
                    type='submit'
                    onClick={props.next}
                    disabled={!((fname) && (lname) && isValidEmail(email) && (ph.length === 10))} />
            </form>
        </div>
    )
}
)
export default PersonalDetailsForm