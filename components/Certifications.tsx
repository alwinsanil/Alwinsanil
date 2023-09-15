import {PiCertificateBold} from 'react-icons/pi'
import Title from './Title'
import CertItem from './CertItem'

const Certifications = () => {
  return (
    <div className='wrapper'>
        <Title text='Certifications' icon={<PiCertificateBold />} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <CertItem name='Google Data Analytics Professional' 
                desc='July 2023 - September 2023' 
                url='https://www.coursera.org/account/accomplishments/specialization/certificate/8FWS88SE54VU' />
            <CertItem name='Cybersecurity & Blockchain Technology' 
                desc='January 2023 - March 2022' 
                url='https://drive.google.com/file/d/1KVhK76yyR5ds-Gem_FLtp5Gv7dHjnSWn/view?usp=drive_link' />
            <CertItem name='Salesforce Shaolin' 
                desc='May 2022 - June 2022' 
                url='https://drive.google.com/file/d/12NHgN4V-1gHSr6q2kF4vGW_8lGVF67rI/view?usp=drive_link' />
            <CertItem name='Foundation of UX Design' 
                desc='May 2020 - June 2020' 
                url='https://drive.google.com/file/d/1eGHtTfekiD0J3_kDy0vSPHn9xOAiP1hB/view?usp=drive_link' />
        </div>
    </div>
  )
}

export default Certifications