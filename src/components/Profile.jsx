import { BsPersonCircle } from "react-icons/bs"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
// import { theme } from "../../../theme"
import { theme } from "../utils/theme/index";
import { UserContext } from "../App";
import { useContext } from "react";
import apiAxios from "../../libs/axios";


export default function Profile({user, setUser}) {
  console.log("Dans profil", user);
  const navigate = useNavigate ();



  // handle logout
  const handleLogout = async () => {
    try {
      // delete cookies and token
      await apiAxios.post("/logout"); 


      localStorage.removeItem("user");

      // delete user from context
      setUser(null);


      // redirect to login
      navigate("/login");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };



  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Salut <b>{user.name}</b>
        </p>
        <div className="description" onClick={handleLogout}>
          <small>Se déconnecter</small>
        </div>
      </div>
      <div className="picture">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;

  .info {
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};
      b {
        color: ${theme.colors.primary};
      }
    }
    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }
        small {
          font-size: ${theme.fonts.size.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    /* border: 1px solid red; */
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`
