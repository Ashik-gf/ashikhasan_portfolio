import React from 'react'
import MouseIcon from '../MouseIcon/MouseIcon'
import line from '../../assets/Line22.svg'
import SimpleSlider from '../Slider/Slider'
const Works = () => {
  return (
    <div>
        <div className="">
            <MouseIcon title={'Works'} discription={'I had the pleasure of working with these awesome projects'} />
        </div>
      
            {/* Carasole */}
            <div className=" md:w-[550px] h-[350px] mx-auto py-8">
                <SimpleSlider />
            </div>
    </div>
  )
}

export default Works