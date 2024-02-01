// import React from 'react';
// import styled from 'styled-components';
// import { theme } from '../../theme';






// function ToggleAdmin({ isAdmin, setIsAdmin }) {
//     const handleToggle = () => {
//         setIsAdmin(!isAdmin);
//     };

//     const ButtonStyled = styled.button`
//     padding: 16px;
//     background-color: ${(isAdmin ? theme.colors.background_dark: theme.colors.background_white)};
//     color: ${theme.colors.primary_cake};
//     border-radius: ${theme.borderRadius.extraRound};
//     transition: all 500ms;
//     `;


//     return (
//         <div>

//             <ButtonStyled type="button" onClick={(handleToggle)}>{isAdmin ? "Passer Utilisateur" : "Passer Admin"}</ButtonStyled>
//             {/* <input type="checkbox" checked={isAdmin} onChange={handleChange} /> */}
            

//         </div>
//     );
// }

// export default ToggleAdmin;




import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToggleAdmin({ isAdmin, setIsAdmin }) {
    const handleToggle = () => {
        if(!isAdmin) {
            toast.info('🧁 Vous êtes passé administrateur!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });    
        }
        setIsAdmin(!isAdmin);
            
    };

    const SwitchContainer = styled.div`
        display: flex;
        flex-direction: column;
        cursor: pointer;
        
    `;

    const Slider = styled.div`
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
        border-radius: 20px;
        border: 1px solid ${theme.colors.primary_cake};
        background-color: ${(isAdmin ? theme.colors.background_dark: theme.colors.background_white)};
        transition: background-color 0.5s ease;
    `;

    const SliderButton = styled.div`
        position: absolute;
        top: 2px;
        left: ${isAdmin ? '20px' : '2px'};
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${theme.colors.primary_cake};
        transition: all 500ms ease;
    `;

    return (
        <SwitchContainer>
            <Slider onClick={handleToggle}>
                <SliderButton />
            </Slider>
            <label>{isAdmin ? 'Admin' : 'Passer Admin'}</label>
        </SwitchContainer>
    );
}

export default ToggleAdmin;
