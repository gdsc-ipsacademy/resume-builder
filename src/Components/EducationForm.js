import React, { forwardRef, useImperativeHandle, useState } from 'react'

const EducationForm = forwardRef((props, _ref) => {

    const [edu, setEdu] = useState([
        { school: '', branch: '', percentage: '', address: '' }
    ]);

    const addHandler = () => {
        let newF = { school: '', branch: '', percentage: '', address: '' }
        setEdu([...edu, newF]);
    }
    const removeHandler = (idx) => {
        let data = [...edu];
        data.splice(idx, 1);
        setEdu(data);
    }

    const handleFormChange = (idx, e) => {
        let data = [...edu]
        data[idx][e.target.name] = e.target.value
        setEdu(data)
    }

    function validateForm(d) {
        let ans = true;
        let data = [...d];

        for (let i = 0; i < data.length; i++) {
            if (!data[i]['school'] || !data[i]['branch'] || !data[i]['percentage'] || !data[i]['address']) ans = false;
        }
        return ans;
    }

    useImperativeHandle(_ref, () => ({
        getEduDeets: () => {
            return edu;
        },
    }));

    return (
        <div>

            <form>
                <h3> Education Form</h3>
                {edu.map((input, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <input type='text' placeholder='School/University Name'
                                value={input.school} name='school' onChange={(e) => handleFormChange(idx, e)} />
                            <input type='text' placeholder='Branch'
                                value={input.branch} name='branch' onChange={(e) => handleFormChange(idx, e)} />
                            <input type='number' placeholder='CGPA/GPA/Percentage'
                                value={input.percentage} name='percentage' onChange={(e) => handleFormChange(idx, e)} />
                            <input type='text' placeholder='Address'
                                value={input.address} name='address' onChange={(e) => handleFormChange(idx, e)} />
                            {edu.length > 1 ? <button onClick={(e) => { e.preventDefault(); removeHandler(idx) }}>Remove</button> : <></>}
                        </React.Fragment>
                    )
                })}

                <button onClick={(e) => {
                    e.preventDefault()
                    addHandler()
                }}>Add Education</button>

                <input
                    type='submit'
                    onClick={props.next}
                    disabled={!(validateForm(edu))} />

            </form>
        </div>
    )
})

export default EducationForm