import React, {useState} from 'react';
import Navbar from "../Navbar";
import Sidebar from '../Sidebar'
import {
    HeroContainer,
    HeroContent,
    HeroItem,
    HeroH1,
    HeroP,
    HeroBtn


} from './HeroElements';


const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <HeroContainer>
                <Navbar toggle={toggle}/>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <HeroContent>
                    <HeroItem>
                        <HeroH1>Greates pizza Ever</HeroH1>
                        <HeroP>Greates pizza Ever</HeroP>
                        <HeroBtn>Greates pizza Ever</HeroBtn>
                    </HeroItem>
                </HeroContent>
            </HeroContainer>
        </div>
    );
};

export default Hero;