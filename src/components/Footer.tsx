import styled from "styled-components";
import { FaCode } from "react-icons/fa6";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "./Constent";



const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;




const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;


export const Footer = () => {
  return (
    <div className="pt-5 pb-5 bg-indigo-400 bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
       <Logo className="text-purple-400 font-pop text-center">Manish Sahu</Logo>

        <div className="text-white font-pop flex justify-center">
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display">
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display">
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        
        </div>
        <Copyright className="text-white font-pop ">&copy; 2024 Manish Sahu. All rights reserved.</Copyright>
        <a href="https://manishsahu-portfolioo.netlify.app/">
        <div className="flex space-x-1 justify-center pt-2">
        <FaCode className="mt-1 text-purple-400 w-9" />
        <span className="text-purple-400">by Manish Sahu</span>
        </div>
        </a>
        <p className="text-white text-center">website is under construction..</p>
    </div>
  )
}
