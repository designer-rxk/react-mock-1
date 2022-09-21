import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {logo} from "../../images";
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <SocialLogo to="/">
                    <SocialIcon src={logo} />
                    Designify
                </SocialLogo>
                <FooterSubHeading>Interested working with us?</FooterSubHeading>
            </FooterSubscription>

            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>© Copyright 2021, Designify. All Rights Reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;