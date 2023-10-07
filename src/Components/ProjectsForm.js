import React, { forwardRef, useImperativeHandle, useState } from 'react'

const ProjectsForm = forwardRef((props, _ref) => {
    const [projects, setProjects] = useState([
        { name: '', from: null, to: null, bulletPt1: '', bulletPt2: '', bulletPt3: '' }
    ]);
    const [entered, setEntered] = useState(false);

    const addHandler = () => {
        let newF = { name: '', from: null, to: null, bulletPt1: '', bulletPt2: '', bulletPt3: '' }
        setProjects([...projects, newF]);
    }
    const removeHandler = (idx) => {
        let data = [...projects];
        data.splice(idx, 1);
        setProjects(data);
    }

    const handleFormChange = (idx, e) => {
        let data = [...projects]
        data[idx][e.target.name] = e.target.value
        setProjects(data)
    }

    function validateForm(d) {
        let ans = true;
        let data = [...d];

        for (let i = 0; i < data.length; i++) {
            if (!data[i]['name'] || !data[i]['from'] || !data[i]['to'] || !data[i]['bulletPt1'] || !data[i]['bulletPt2'] || !data[i]['bulletPt3']) ans = false;
        }
        return ans;
    }

    useImperativeHandle(_ref, () => ({
        getProjectsDeets: () => {
            return projects;
        },
    }));

    function submitHandler(e) {
        e.preventDefault()
        setEntered(true)

        if (validateForm(projects)) {
            props.next()
        }
    }
    return (
        <div>
            <form>
                <h3>Projects Details</h3>
                {projects.map((input, idx) => {
                    return (
                        <React.Fragment key={idx}>

                            {!input.name && entered ?
                                (<span> Project Name is required </span>) : null}

                            <input type='text' placeholder='Project Name'
                                value={input.name} name='name' onChange={(e) => handleFormChange(idx, e)} />

                            {!input.from && entered ?
                                (<span> from is required </span>) : null}

                            <input type='text' placeholder='from'
                                value={input.from} name='from' onChange={(e) => handleFormChange(idx, e)} />

                            {!input.to && entered ?
                                (<span> to is required </span>) : null}

                            <input type='text' placeholder='to'
                                value={input.to} name='to' onChange={(e) => handleFormChange(idx, e)} />

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

                            {projects.length > 1 ? <button className="remove" onClick={(e) => { e.preventDefault(); removeHandler(idx) }}>Remove</button> : <></>}
                        </React.Fragment>
                    )
                })}
                <button className="add" onClick={(e) => {
                    e.preventDefault()
                    addHandler()
                }}>Add Project</button>

                <input 
                className='submit-btn'
                    type='submit'
                    onClick={(e => submitHandler(e))}
                />

            </form>
        </div>
    )
})

export default ProjectsForm