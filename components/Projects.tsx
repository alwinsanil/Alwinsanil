import Title from './Title'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import dwb from '../public/img/DWB.png'
import cda from '../public/img/cda.webp'
import bms from '../public/img/BMS.png'
import nw from '../public/img/nw.jpg'
import ProjCard from './ProjCard'

const Projects = () => {
  return (
    <div id='projects' className='wrapper'>
        <Title text='Projects' icon={<AiOutlineFundProjectionScreen />} />
        <div className='flex flex-col gap-14'>
          <ProjCard 
            ch='1' 
            proj='Digital WellBeing' 
            url='https://github.com/alwinsanil/Digital-WellBeing' 
            img={dwb.src}
            desc='A chrome extension to increase productivity by limiting distracting elements on the internet. 
            The extension aims to give back the time lost to unproductive and addictive elements that take our attention away.'
            tools="JavaScript, HTML, CSS, Manifest" />
          <ProjCard 
            ch='2'
            proj='Cricket Data Analytics' 
            url='https://github.com/alwinsanil/Cricket-Data-Analytics' 
            img={cda.src}
            desc='A Data Analytics project which takes statistics from 2022 T20 World Cup and analyzes them to create the best playing XI in the world.
            A purely data-driven decision-making project.'
            tools='PowerBI, Microsoft Excel, Python(Data Scraping)' />
            <ProjCard 
            ch='2'
            proj='Budget Management App' 
            url='https://github.com/alwinsanil/Budget-Management-App' 
            img={bms.src}
            desc='A full stack application which uses NodeJS, ReactJS and MongoDB to create an app that helps you keep track of your expenses.'
            tools='NodeJS, ReactJS, MongoDB' />
            <ProjCard 
            ch='2'
            proj='NewWave Music App' 
            url='https://github.com/alwinsanil/NewWave' 
            img={nw.src}
            desc='A Decentralized Music Sharing App using blockchain technology. The app reduces the cost of using muic sharing platformsa and
            effectively protects the copyright information of music.'
            tools='Blockchain, Smart Contracts, ReactJS, IPFS' />
        </div>
    </div>
  )
}

export default Projects