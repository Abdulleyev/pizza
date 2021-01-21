import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    SocialIconLink,


} from "./FooterElements"
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" >Pizza</SocialLogo>
                        <SocialIcon>
                            <SocialIconLink href = "/" target="_blank" aria-lebel="Facebook" rel="noopener noreferrer">

                            </SocialIconLink>
                        </SocialIcon>
                        <SocialIcon>
                            <SocialIconLink  target="_blank" aria-lebel="Facebook" rel="noopener noreferrer">

                            </SocialIconLink>
                        </SocialIcon>
                        <SocialIcon>
                            <SocialIconLink target="_blank" aria-lebel="Facebook" rel="noopener noreferrer">

                            </SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;