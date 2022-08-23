import  styled from "styled-components";
function NavbarLogin(){

    const Div = styled.div`
    width: 100%;
    border-bottom: 1px solid grey;
    display:flex;
    flex-wrap: wrap;
    row-gap:2px;
    background-color: black;
    padding: 2px;
    color: white;
    a{
        margin: 1vw;
        text-decoration: none;
        color: white;
    }
    `

    return(

        <Div>
    
            <img src="./images/logologin.png" alt="icon" />
            <a href="/">Games</a>
            <a href="/">News</a>
            <a href="/">Allies</a>
            <a href="/">Badges</a>
            <a href="/">Wallpaper</a>


        </Div>
    )
}

export default NavbarLogin;