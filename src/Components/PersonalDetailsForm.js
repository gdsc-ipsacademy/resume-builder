import React, { forwardRef, useImperativeHandle, useState } from 'react'

const PersonalDetailsForm = forwardRef((props, _ref) => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [ph, setPh] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [github, setGithub] = useState('');
    const [linkedIn, setLinkedIn] = useState('');

    const [entered, setEntered] = useState(false);

    useImperativeHandle(_ref, () => ({
        getPersonalDeets: () => {
            return { fname, lname, email, ph, portfolio, github, linkedIn };
        },
    }));

    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/;
        return emailRegex.test(email);
    }
    

    function submitHandler(e) {
        e.preventDefault()
        setEntered(true)

        if (fname && lname && isValidEmail(email) && ph.length === 10) {
            props.next()
        }
    }

    return (
        <div>
            <form>
                <h3>Enter Personal Details </h3>
                {!fname && entered ? (<span> First Name is required </span>) : null}
                <input type="text" value={fname} placeholder='First Name*' onChange={e => setFname(e.target.value)} required />

                {!lname && entered ? (<span> Last Name is required </span>) : null}
                <input type="text" value={lname} placeholder='Last Name*' onChange={e => setLname(e.target.value)} required />

                {!isValidEmail(email) && entered ? (<span> Email is required </span>) : null}
                <input type="email" value={email} placeholder='Email*' onChange={e => setEmail(e.target.value)} required />

                {!(ph.length === 10) && entered ? (<span> Valid Phone Number is required </span>) : null}
                <input type="number" value={ph} placeholder='Phone Number*' onChange={e => setPh(e.target.value)} required />

                <input type="text" value={portfolio} placeholder='Portfolio Link' onChange={e => setPortfolio(e.target.value)} />

                <input type="text" value={github} placeholder='Github Link' onChange={e => setGithub(e.target.value)} />

                <input type="text" value={linkedIn} placeholder='LinkedIn Link' onChange={e => setLinkedIn(e.target.value)} />

                <input
                className='submit-btn'
                    type='submit'
                    onClick={(e) => submitHandler(e)}
                />
            </form>
        </div>
    )
}
)
export default PersonalDetailsForm