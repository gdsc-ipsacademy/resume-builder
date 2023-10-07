import React, { forwardRef, useImperativeHandle, useState } from 'react'

const WorkExperienceForm = forwardRef((props, _ref) => {
    const [workEx, setWorkEx] = useState([
        { company: '', jobTitle: '', from: '', to: '', address: '', bulletPt1: '', bulletPt2: '', bulletPt3: '' }
    ]);
    const [entered, setEntered] = useState(false);

    const addHandler = () => {
        let newF = { company: '', jobTitle: '', from: '', to: '', address: '', bulletPt1: '', bulletPt2: '', bulletPt3: '' }

        setWorkEx([...workEx, newF]);
    }
    const removeHandler = (idx) => {
        let data = [...workEx];
        data.splice(idx, 1);
        setWorkEx(data);
    }

    const handleFormChange = (idx, e) => {
        let data = [...workEx]
        data[idx][e.target.name] = e.target.value
        setWorkEx(data)
    }
    useImperativeHandle(_ref, () => ({
        getExpDeets: () => {
            return workEx;
        },
    }));

    function validateForm(d) {
        let ans = true;
        let data = [...d];

        for (let i = 0; i < data.length; i++) {
            if (!data[i]['company'] || !data[i]['jobTitle'] || !data[i]['from'] || !data[i]['to'] || !data[i]['bulletPt1'] || !data[i]['bulletPt2'] || !data[i]['bulletPt3'])
                ans = false;
        }
        return ans;
    }

    function submitHandler(e) {
        e.preventDefault()
        setEntered(true)

        if (validateForm(workEx)) {
            props.next()
        }
    }
    return (
        <div>
            <form>
                <h3>Work Experience Details </h3>
                {workEx.map((input, idx) => {
                    return (
                        <React.Fragment key={idx}>

                            {!input.company && entered ?
                                (<span> Company/Organisation Name is required </span>) : null}

                            <input type='text' placeholder='Company/Organisation Name'
                                value={input.company} name='company' onChange={(e) => handleFormChange(idx, e)} />

                            {!input.jobTitle && entered ?
                                (<span> Job Title is required </span>) : null}

                            <input type='text' placeholder='Job Title'
                                value={input.jobTitle} name='jobTitle' onChange={(e) => handleFormChange(idx, e)} />

                            {!input.from && entered ?
                                (<span> from is required </span>) : null}

                            <input type='text' placeholder='from'
                                value={input.from} name='from' onChange={(e) => handleFormChange(idx, e)} />

                            {!input.to && entered ?
                                (<span> to is required </span>) : null}

                            <input type='text' placeholder='to'
                                value={input.to} name='to' onChange={(e) => handleFormChange(idx, e)} />

                            {!input.address && entered ?
                                (<span> Address is required </span>) : null}

                            <input type='text' placeholder='Company Location'
                                value={input.address} name='address' onChange={(e) => handleFormChange(idx, e)} />

                            {!input.bulletPt1 && entered ?
                                (<span> Description Point 1 is required </span>) : null}

                            <input type='text' placeholder='Description Point 1'
                                value={input.bulletPt1} name='bulletPt1' onChange={(e) => handleFormChange(idx, e)} />

                            {!input.bulletPt2 && entered ?
                                (<span> Description Point 2 is required </span>) : null}

                            <input type='text' placeholder='Description Point 2'
                                value={input.bulletPt2} name='bulletPt2' onChange={(e) => handleFormChange(idx, e)} />

                            {!input.bulletPt3 && entered ?
                                (<span> Description Point 3 is required </span>) : null}

                            <input type='text' placeholder='Description Point 3'
                                value={input.bulletPt3} name='bulletPt3' onChange={(e) => handleFormChange(idx, e)} />

                            {workEx.length > 1 ? <button className="remove" onClick={(e) => { e.preventDefault(); removeHandler(idx) }}>Remove</button> : <></>}
                        </React.Fragment>
                    )
                })}
                <button className="add" onClick={(e) => {
                    e.preventDefault()
                    addHandler()
                }}>Add Experience</button>

                <input
                className='submit-btn'
                    type='submit'
                    onClick={(e => submitHandler(e))}
                />

            </form>
        </div>
    )
})

export default WorkExperienceForm