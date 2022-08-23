import styled from "styled-components";

export const Div = styled.div`
    .signinwith{
        margin: 15px 0 15px 0;

    }

      align-items: center;
    /* justify-content: center; */
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    .input{
    /* background-color: grey; */
    min-width: 340px;

    background: #333;
    ::placeholder{
      color: white;
    }
    color: white;
    min-height: 40px;
    border-radius: 6px;
    border: none;
  }  
  .err{
    color:#e87c03;
  }
    img{
        margin-top: 30px;
        height:78px;
        width: 200px
    }
    h3{
        color: white;
    }
    
    .signin{
        /* align-items: center; */
        border: 1px solid green;
        background-color: #3F3F3F;
        display: grid;
        flex-direction: column;
        grid-template-columns: auto;
        opacity: 0.8;
        border-radius: 5px;
        background-color: black;
        color:white;
        padding: 30px;
        /* max-width: 330px; */
        margin: auto;
        /* border: 1px solid white; */
        min-height: 300px;
        margin-bottom: 5px;
        /* display: flex;
        flex-direction: column;
        min-height: 660px; */
    }
    button{
        color: white;
    }
    img{
        border: 1px solid red;
        margin: auto;
    }
    .err{
        color:red;
    }
    input{
        margin: 3% 0 3% 0;
    }
    input{
        margin-left: 1%;
        color:white;
    }
    .sgoogle{
        background-color: bisque;
        /* min-width: 150px; */
        min-width: 48%;
        min-height: 50px;
        margin: 2% 2% 2% 0%;
        color: black;
        border-radius: 8px;
    }
    .label{
        color:wheat;
    }
    span{
        margin-left:20% ;
    }
    .Signup{
        margin-left:18% ;
        
    }
    .reset{
        margin-left: 35%;
    }
    
    `;