import React, { useState, useRef } from 'react'
import PersonalDetailsForm from './PersonalDetailsForm'
import EducationForm from './EducationForm'
import WorkExperienceForm from './WorkExperienceForm'
import ProjectsForm from './ProjectsForm'
import CampusCommInvolForm from './CampusCommInvolForm'
import SkillsForm from './SkillsForm'
import HonorsAndAwardsForm from './HonorsAndAwardsForm'
import ReactToPrint from "react-to-print";

const FormContainer = () => {
    const [step, setStep] = useState(0);

    const [personalDeets, setPersonalDeets] = useState();
    const [eduDeets, setEduDeets] = useState();
    const [expDeets, setExpDeets] = useState();
    const [projectDeets, setProjectDeets] = useState();
    const [campusDeets, setCampusDeets] = useState();
    const [skillsDeets, setSkillsDeets] = useState();
    const [honorAndAwardsDeets, setHonorAndAwardsDeets] = useState();


    const personalDetailsRef = useRef();
    const eduDetailsRef = useRef();
    const expDetailsRef = useRef();
    const projectsDetailsRef = useRef();
    const campusAndCommDetailsRef = useRef();
    const skillsDetailsRef = useRef();
    const honorAndAwardsDetailsRef = useRef();

    let componentRef = useRef();

    const nextStep = () => {
        setStep(step + 1)
    }

    const getPersonalDetails = () => {
        const personalDetails = personalDetailsRef.current.getPersonalDeets()
        // console.log(personalDetails)
        setPersonalDeets(personalDetails)
        nextStep()
    }
    const getEducationDetails = () => {
        const eduDetails = eduDetailsRef.current.getEduDeets()
        // console.log(eduDetails)
        setEduDeets(eduDetails)
        nextStep()
    }
    const getExperienceDetails = () => {
        const expDetails = expDetailsRef.current.getExpDeets()
        console.log(expDetails)
        setExpDeets(expDetails)
        nextStep()
    }
    const getProjectsDetails = () => {
        const projectsDetails = projectsDetailsRef.current.getProjectsDeets()
        // console.log(projectsDetails)
        setProjectDeets(projectsDetails)
        nextStep()
    }
    const getCampusAndCommDetails = () => {
        const campusDetails = campusAndCommDetailsRef.current.getCampusDeets()
        // console.log(campusDetails)
        setCampusDeets(campusDetails)
        nextStep()
    }
    const getSkillsDetails = () => {
        const skillsDetails = skillsDetailsRef.current.getSkillsDeets()
        // console.log(skillsDetails)
        setSkillsDeets(skillsDetails)
        nextStep()
    }
    const getHonorsAndAwardsDetails = () => {
        const honorAndAwardsDetails = honorAndAwardsDetailsRef.current.getHonorsDeets()
        setHonorAndAwardsDeets(honorAndAwardsDetails)
        // console.log(honorAndAwardsDetails)
        nextStep()
    }

    // const test = () => {
    //     console.log(personalDeets)
    //     console.log(eduDeets)
    //     console.log(expDeets)
    //     console.log(projectDeets)
    //     console.log(campusDeets)
    //     console.log(skillsDeets)
    //     console.log(honorAndAwardsDeets)
    // }

    const FormRender = () => {
        switch (step) {
            case 0:
                return (<>
                    <PersonalDetailsForm ref={personalDetailsRef} next={getPersonalDetails} />
                    {/* <button onClick={getPersonalDetails}>Next</button> */}
                </>)
            case 1:
                return (<>
                    <EducationForm ref={eduDetailsRef} next={getEducationDetails} />
                    {/* <button onClick={getEducationDetails}>Next</button> */}
                </>)
            case 2:
                return (<>
                    <WorkExperienceForm ref={expDetailsRef} next={getExperienceDetails} />
                    {/* <button onClick={getExperienceDetails}>Next</button> */}
                </>)
            case 3:
                return (<>
                    <ProjectsForm ref={projectsDetailsRef} next={getProjectsDetails} />
                    {/* <button onClick={getProjectsDetails}>Next</button> */}
                </>)
            case 4:
                return (<>
                    <CampusCommInvolForm ref={campusAndCommDetailsRef} next={getCampusAndCommDetails} />
                    {/* <button onClick={getCampusAndCommDetails}>Next</button> */}

                </>)
            case 5:
                return (<>
                    <SkillsForm ref={skillsDetailsRef} next={getSkillsDetails} />
                    {/* <button onClick={getSkillsDetails}>Next</button> */}

                </>)
            case 6:
                return (<>
                    <HonorsAndAwardsForm ref={honorAndAwardsDetailsRef} next={getHonorsAndAwardsDetails} />
                    {/* <button onClick={getHonorsAndAwardsDetails}>Submit</button> */}
                </>)
            case 7:
                return (<>
                    <ResumeRender />
                    <ReactToPrint
                        trigger={() => <button className='download'> Download this out!</button>}
                        content={() => componentRef}
                    />
                </>)
            default:
                return (<>

                </>)

        }
    }

    const ResumeRender = () => {
        return (<>
            <div className='pdf-resume' ref={(el) => (componentRef = el)}>
                <div className='header'>
                    <h2>
                        {`${personalDeets.fname} ${personalDeets.lname}`}
                    </h2>
                    <div className='personal-header'>
                        <p>{personalDeets.email}</p>
                        <p>{personalDeets.ph}</p>
                        <p>{personalDeets.portfolio}</p>
                        <p>{personalDeets.github}</p>
                        <p>{personalDeets.linkedIn}</p>
                    </div>
                </div>
                <div className='education'>
                    <h2 className='heading'>
                        Education
                    </h2>
                    <div className='education-info'>

                        {eduDeets.map((info, idx) => (
                            <div className='info' key={idx}>
                                <div className='info1'>
                                    <p><b>{info.school}</b></p>
                                    <p>{info.branch}</p>
                                </div>
                                <div className='info2'>
                                    <p>{info.address}</p>
                                    <p>{info.percentage}</p>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
                {!expDeets.skip ? (
                    <div className='workEx'>
                        <h2 className='heading'>
                            Work Experience
                        </h2>
                        <div className='workEx-info'>
                            {expDeets.map((info, idx) => (
                                <div className='info' key={idx}>
                                    <div className='info1'>
                                        <p><b>{info.company}</b></p>
                                        <p>{info.jobTitle}</p>
                                        <ul>
                                            <li>{info.bulletPt1}</li>
                                            <li>{info.bulletPt2}</li>
                                            <li>{info.bulletPt3}</li>
                                        </ul>
                                    </div>
                                    <div className='info2'>
                                        <p>{info.address}</p>
                                        <p>{`${info.from} - ${info.to}`}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>) : null}

                <div className='workEx'>
                    <h2 className='heading'>
                        Projects
                    </h2>
                    <div className='workEx-info'>
                        {projectDeets.map((info, idx) => (
                            <div className='info' key={idx}>
                                <div className='info1'>
                                    <p><b>{info.name}</b></p>
                                    <ul>
                                        <li>{info.bulletPt1}</li>
                                        <li>{info.bulletPt2}</li>
                                        <li>{info.bulletPt3}</li>
                                    </ul>
                                </div>
                                <div className='info2'>
                                    <p>{`${info.from} - ${info.to}`}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='workEx'>
                    <h2 className='heading'>
                        Campus And Community Involvement
                    </h2>
                    <div className='workEx-info'>
                        {campusDeets.map((info, idx) => (
                            <div className='info' key={idx}>
                                <div className='info1'>
                                    <p><i>{info.title}</i>, {info.clubName}</p>
                                    <ul>
                                        <li>{info.bulletPt1}</li>
                                        <li>{info.bulletPt2}</li>
                                    </ul>
                                </div>
                                <div className='info2'>
                                    <p>{`${info.from} - ${info.to}`}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className='workEx'>
                    <h2 className='heading'>
                        Skills
                    </h2>
                    <div className='workEx-info'>
                        <div className='skillsCont'>
                            {skillsDeets.map((info, idx) => (<>
                                <p key={idx}>{info.title}</p>
                            </>
                            ))}

                        </div>
                    </div>
                </div>
                <div className='workEx'>
                    <h2 className='heading'>
                        Honors And Awards
                    </h2>
                    <div className='workEx-info'>

                        {honorAndAwardsDeets.map((info, idx) => (
                            <div className='info' key={idx}>
                                <p>{info.title}</p>
                                <p>{info.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>);

    }

    return (
        <div className='container'>
            <FormRender />
        </div>
    )
}

export default FormContainer