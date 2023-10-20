import React, { forwardRef, useImperativeHandle, useState } from 'react'

const SkillsForm = forwardRef((props, _ref) => {
    const [skills, setSkills] = useState([
        { title: '' }
    ]);

    const addHandler = () => {
        let newF = { title: '' }
        setSkills([...skills, newF]);
    }
    const removeHandler = (idx) => {
        let data = [...skills];
        data.splice(idx, 1);
        setSkills(data);
    }

    const handleFormChange = (idx, e) => {
        let data = [...skills]
        data[idx][e.target.name] = e.target.value
        setSkills(data)
    }
    function validateForm(d) {
        let ans = true;
        let data = [...d];

        for (let i = 0; i < data.length; i++) {
            if (!data[i]['title']) ans = false;
        }
        return ans;
    }

    useImperativeHandle(_ref, () => ({
        getSkillsDeets: () => {
            return skills;
        },
    }));

    return (
        <div>
            <form>
                <h3>Skills Details</h3>
                {skills.map((input, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <input type='text' placeholder={`Skill ${idx + 1}`}
                                value={input.title} name='title' onChange={(e) => handleFormChange(idx, e)} />


                            {skills.length > 1 ? <button className="remove" onClick={(e) => { e.preventDefault(); removeHandler(idx) }}>Remove</button> : <></>}
                        </React.Fragment>
                    )
                })}
                <button className="add" onClick={(e) => {
                    e.preventDefault()
                    addHandler()
                }}>Add Skills</button>

                <input
                className='submit-btn'
                    type='submit'
                    onClick={props.next}
                    disabled={!(validateForm(skills))} />
            </form>
        </div>
    )
})

export default SkillsForm