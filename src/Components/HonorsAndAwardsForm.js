import React, { forwardRef, useImperativeHandle, useState } from 'react'

const HonorsAndAwardsForm = forwardRef((props, _ref) => {
    const [awards, setAwards] = useState([
        { title: '', date: '' }
    ]);

    const addHandler = () => {
        let newF = { title: '', date: '' }
        setAwards([...awards, newF]);
    }
    const removeHandler = (idx) => {
        let data = [...awards];
        data.splice(idx, 1);
        setAwards(data);
    }

    const handleFormChange = (idx, e) => {
        let data = [...awards]
        data[idx][e.target.name] = e.target.value
        setAwards(data)
    }
    function validateForm(d) {
        let ans = true;
        let data = [...d];

        for (let i = 0; i < data.length; i++) {
            if (!data[i]['title'] || !data[i]['date']) ans = false;
        }
        return ans;
    }
    useImperativeHandle(_ref, () => ({
        getHonorsDeets: () => {
            return awards;
        },
    }));
    return (
        <div>
            <form>
                <h3>Honors And Awards Details</h3>
                {awards.map((input, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <input type='text' placeholder='Name of Honor/Award/Grant'
                                value={input.title} name='title' onChange={(e) => handleFormChange(idx, e)} />

                            <input type='text' placeholder='Date'
                                value={input.date} name='date' onChange={(e) => handleFormChange(idx, e)} />


                            {awards.length > 1 ? <button onClick={(e) => { e.preventDefault(); removeHandler(idx) }}>Remove</button> : <></>}
                        </React.Fragment>
                    )
                })}
                <button onClick={(e) => {
                    e.preventDefault()
                    addHandler()
                }}>Add Honors And Awards Details</button>

                <input
                    type='submit'
                    onClick={props.next}
                    disabled={!(validateForm(awards))} />
            </form>


        </div>
    )
})

export default HonorsAndAwardsForm