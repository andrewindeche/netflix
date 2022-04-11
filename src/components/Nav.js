import React, { useEffect,useCallback,useState } from "react";
import styled from 'styled-components';
import { auth, provider } from '../firebase/firebase';
import {useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState} from '../users/userSlice';

const optionMovies = [
    {
     label: "Action",
     value: "Action",
     },
     {
       label: "Comedy",
       value: "Comedy",
     },
     {
       label: "Horror",
       value: "Horror",
     },
     {
       label: "Romance",
       value: "Romance",
     },

     {
       label: "Documentaries",
       value: "Documentaries",
     },
   ];

const Nav = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const [selector, setselector] = useState("");

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
           auth.signInWithPopup(provider).then((result) => {
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
   return (
        <NavBar>
            <Logo>
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix" />
            </Logo>
              {
                !userName ?
                <Login onClick={handleAuth}>Sign In</Login>
                :
                <>
                    <NavMenu>
                            <a href ="/home" >
                                <span>HOME</span>
                            </a>
                        <a href ="/TvShows">
                            <span>TV SHOWS</span>
                        </a>
                        <a href ="/Movies">
                            <span>MOVIES</span>
                            <Drop>
                            {optionMovies.map((option) => (
                               <Link to={`/movies/${option.value}`}>
                                   <span>
                                       <option value={option.value} onClick={()=> handleClick(option.value)}>{option.label}</option>

                                   </span>
                               </Link>
                           ))}
                           </Drop>
                          </a>
                    </NavMenu>
                    <SignOut>
                        <UserImage src={userPhoto} alt={userName}/>
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
   position: fixed;
   top: 0;
   left:0;
   right: 0;
   background-color: #090b13;
   height: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 36px;
   letter-spacing: 16px;
   z-index: 3;
`;

const Logo = styled.a`
   width: 170px;
   margin-top: 30px;
   max-height: 90px;
   font-size: 0px;
   display: inline-block;
   padding-bottom: 15px;
   img {
       display: block;
       width: 100%;
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
const NavMenu = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   flex-flow: row nowrap;
   height: 100%;
   padding: 0px;
   position: relative;
   margin-right: auto;
   margin-left : 25px;
   cursor:pointer;
   a{
       display: flex;
       align-items: center;
       padding: 0 12px;
       img{
           height: 20px;
           min-width: 20px;
           width: 20px;
           z-index: auto;
       }
       span{
           color:rgb(249,249,249);
           font-size: 13px;
           letter-spacing: 1.42px;
           line-height: 1.08px;
           padding 2px 0px;
           position: relative;
           white-space: nowrap;
           // border line
           &:before{
               background-color: rgb(249, 249, 249);
               border-radius: 0px 0px 4px 4px;
               bottom: -8px;
               content: "";
               opacity: 1;
               left: 0px;
               height: 2px;
               position: absolute;
               right: 0px;
               transform-origin: left center;
               transform: scaleX(0);
               transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s;
               visibility: hidden;
               width: auto;
           }
       }
       &:hover {
           span:before{
               transform: scaleX(1);
               visibility: visible;
               opacity: 1 !important;
           }
           ${Drop}{
               opacity: 1;
               transition-duration: 1.5s;
               span:before{
                   transform: scaleX(0);
                   opacity: 0 !important;
               }
           }
           ${DropSeries}{
               opacity: 1;
               transition-duration: 1.5s;
               span:before{
                   transform: scaleX(0);
                   opacity: 0 !important;
               }
           }
       }
   }
   @media (max-width: 768px) {
       display: none;
   }
`;

const Login = styled.a`
   background-color : red;
   font-size:16px;
   padding: 4px 12px;
   margin-top: 20px;
   text-transform: lowercase;
   letter-spacing: 1.5px;
   border:1px solid #f9f9f9;
   border-radius: 4px;
   transition: all 250ms ease-out;
   cursor: pointer;
   &:hover{
       background-color : #f9f9f9;
       color: #000;
       border-color: transparent;
   }
`;

const UserImage = styled.img`
   border-radius: 100%;
   width: 100%;
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