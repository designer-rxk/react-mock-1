import React, { useEffect, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import {HeroSection, Heading, HeroText, ButtonContainer, HeroButton, ImageCharacter, HeroImage, HeroContent, ButtonWrapper, CharacterContainer} from './HeroStyles';
import { useInView } from 'react-intersection-observer';
import Modal from '../Modal/Modal';
import {hero, heroGuy, heroPatternBG, heroPatternBGLG, image1, image2, image3, logo} from "../../images";

const Hero = () => {
    const [showModal, setShowModal] = useState(false);
    const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

    const toggleModal = () => {
        if (!showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        setShowModal(!showModal);
    };

    const variants = {
        hover: {
            y: 15,
            transition: {
                yoyo: Infinity,
                duration: 0.6,
            },
        },
    };
    const { ref, inView } = useInView({
        rootMargin: '-100px',
    });

    useEffect(() => {
        console.log(inView);
    }, [inView]);

    return (
        <>
            <HeroSection id="hero">
                <HeroImage className="pattern" src={heroPatternBGLG} />
                <HeroImage className="guy" src={heroGuy} />
                <CharacterContainer>
                    <ImageCharacter
                        dragConstraints={dragConstraints}
                        className="one"
                        src={image1}
                        dragElastic={0.2}
                    />
                    <ImageCharacter
                        dragConstraints={dragConstraints}
                        dragElastic={0.2}
                        className="two"
                        src={image2}
                    />
                    <ImageCharacter
                        variants={variants}
                        whileHover="hover"
                        drag
                        dragElastic={0.2}
                        dragConstraints={dragConstraints}
                        className="three"
                        src={image3}
                    />
                </CharacterContainer>
                <HeroContent>
                    <Heading>We Are Designify</Heading>
                    <HeroText>
                        A team of passionate designers and developers ready to provide unique and
                        outstanding products for you!
                    </HeroText>
                    <ButtonContainer ref={ref}>
                        <ButtonWrapper>
                            <HeroButton onClick={toggleModal} className={inView ? '' : 'corner'}>
                                {inView ? (
                                    <> Chat with us</>
                                ) : (
                                    <FiMail color="white" size="2.3rem" />
                                )}
                            </HeroButton>
                        </ButtonWrapper>
                    </ButtonContainer>
                </HeroContent>
            </HeroSection>
            <Modal showModal={showModal} toggleModal={toggleModal} />
        </>
    );
};

export default Hero;