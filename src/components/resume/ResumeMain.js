import React from 'react'
import Head from '../common/head/Head'
import {motion} from 'framer-motion'
import {fadeInVariant} from '../../data/variants'
import {resumeData} from '../../data/resumeData'
import Summary from './Summary'
import Education from './Education'
import ProfExp from './ProfExp'
import Projects from './Projects'

function ResumeMain() {
    return (
        <motion.div  
            variants={fadeInVariant}
            className="resume flex-col">

            <Head title="RESUME" text={resumeData.text} />

            <div className="content">

                <div className="resume-col">
                <Projects myprojects={resumeData.myprojects}  />
                   
                    
                </div>
                    
                <div className="resume-col">
                <Education education={resumeData.education}  />
                    <ProfExp profExp={resumeData.profExp} />
                </div>

            </div>

        </motion.div>
    )
}

export default ResumeMain
