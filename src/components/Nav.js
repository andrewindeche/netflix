import React, { useEffect,useCallback,useState } from "react";
import styled from 'styled-components';
import { auth, provider } from '../firebase/firebase';
import {useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState} from '../users/userSlice';

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const [selector, setselector] = useState("");
  const [show, setShow] = useState(false);

  const setUser = useCallback ((user) => {
      dispatch(
          setUserLoginDetails({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
      })
      );
  },[dispatch]);

   useEffect(() => {
       auth.onAuthStateChanged(async (user) => {
           if(user){
               setUser(user);
               navigate("/home");
           }
       })
   }, [navigate,userName,setUser]);
   const handleAuth = () => {
       if (!userName){
        signInWithPopup(auth, provider).then((result) => {
               setUser(result.user);
           }).catch((error) => {
               alert(error.message);
           });
       }
       else if (userName) {
           auth
             .signOut()
             .then(() => {
               dispatch(setSignOutState());
               navigate("/");
             })
             .catch((err) => alert(err.message));
       }
   };
   const handleClick = (option) =>{
       if(selector){
           setselector("");
       }
       else{
           setselector(option);
       }
   }
   const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);
   return (
        <NavBar className={`active ${show && 'hidden'}`}>
            <Logo>
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix" />
            </Logo>
              {
                !userName ?
                <Login onClick={handleAuth}>Sign In</Login>
                :
                <>
                    <SignOut>
                        <UserImage src={userPhoto} alt="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"/>
                        <UserName src={userName} />
                        <DropDown>
                            <span onClick={handleAuth}> Sign Out </span>
                        </DropDown>
                    </SignOut>
                </>
            }
        </NavBar>
    );
}
const NavBar = styled.nav`
   position: absolute;
   top: 0;
   left:0;
   right: 0;
   background-color: transparent;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 0 45px;
   margin:1em;
   letter-spacing: 16px;
   z-index: 0.5;
   @media (max-width: 960px) {
    display:flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: space-around;
    width:100%;
  }
`;

const Logo = styled.a`
   width: 170px;
   margin: 0px 120px;
   max-height: 90px;
   font-size: 0px;
   display: inline-block;
   img {
       width: 93%;
   }
   @media only screen and (max-width: 960px) {
    img {
        width: 25%;
        position: absolute;
        top:0;
        left:0;
        z-index:5
    }
  }
`;

const Drop = styled.div`
   position: absolute;
   top: 40px;
   font-size: 12px;
   right: 14%;
   display: flex;
   flex-direction: column;
   background-color: rgb(19,19,19);
   border:  1px solid rgba(151,151,151, 0.8);
   border-radius: 4px;
   opacity: 0;
   width: 130px;
   box-shadow: rgb(0 0 0 / 50%) 0px 0px 018px 0px;
   letter-spacing: 3px;
   cursor:pointer;
   padding: 20px 10px 0px 10px;
   span{
       margin-bottom: 10px;
   }
`;
const DropSeries = styled.div`
   position: absolute;
   top: 40px;
   font-size: 12px;
   right: -4%;
   display: flex;
   flex-direction: column;
   background-color: rgb(19,19,19);
   border:  1px solid rgba(151,151,151, 0.8);
   border-radius: 4px;
   opacity: 0;
   width: 130px;
   box-shadow: rgb(0 0 0 / 50%) 0px 0px 018px 0px;
   letter-spacing: 3px;
   cursor:pointer;
   padding: 20px 10px 0px 10px;
   span{
       margin-bottom: 10px;
   }
`;
const UserName = styled.div`
    font-size:12px
`;
const Login = styled.a`
   background-color : red;
   color:white;
   text-decoration:none;
   font-size:14px;
   font-weight:bold;
   padding: 6px 14px;
   margin:0 9em 2em;
   letter-spacing: 0.1px;
   border-radius: 4px;
   z-index:5;
   @media (max-width: 960px) {
        padding:5px 12px;
        font-size:14px;
        white-space: nowrap;
        position: absolute;
        top: 0;
        right:0px;
        margin: 1 8em;
    }
   transition: all 250ms ease-out;
   cursor: pointer;
   &:hover{
       background-color : #8B0000;
       border-color: transparent;
   }
`;
const UserImage = styled.img`
   border-radius: 100%;
   width: 40px;
`;
const DropDown = styled.div`
   position: absolute;
   top: 40px;
   font-size: 12px;
   right: 0;
   padding: 10px;
   background-color: rgb(19,19,19);
   border:  1px solid rgba(151,151,151, 0.8);
   border-radius: 4px;
   opacity: 0;
   width: 100px;
   box-shadow: rgb(0 0 0 / 50%) 0px 0px 018px 0px;
   letter-spacing: 2px;
   cursor:pointer;
`;

const SignOut = styled.div`
   position: relative;
   cursor: pointer;
   align-atems: center;
   justify-content: center;
   height: 40px;
   width: 40px;
   display: flex;
   &:hover{
       ${DropDown}{
           opacity: 1;
           transition-duration: 1.5s;
       }
   }
`;

export default Nav;