import styled, { css } from "styled-components";

export const BaseButton=styled.button`
   min-width:165px;
   width:auto;
   height:50px;
   letter-spacing: 0.5px;
   line-height:50px;
   padding:0 35px 0 35px;
   font-size:15px;
   background-color:  rgb(232, 225, 225);;
   color:rgb(21, 12, 12);
   text-transform: uppercase;
   font-family:'Courier New', Courier, monospace;
   font-weight:bolder;
   border:none;
   cursor:pointer;
   display: flex;
   justify-content: center;

   &:hover{
    background-color: rgb(24, 18, 18);
    color:rgb(235, 230, 230);
    border:1px solid black;

   }




`;

export const GoogleSignIn=styled(BaseButton)`
    background-color: rgb(34, 32, 60);
    color: rgba(239, 239, 239, 0.24);

    &:hover{
        
        color:white;
        border:none;
}





`;

export const Inverted=styled(BaseButton)`
 background-color: white;
    color:black;
    border:1px solid black;

    &:hover{
        background-color: black;
        color:white;
        border:none;
    }




`;


// // .btn{
// border:1px solid #3498db;
// background:none;
// padding:10px 20px;
// font-size:20px;
// font-family:"montserrat";
// cursor:pointer;
// margin:10px;
// transition:0.8s;
// position:relative;
// overflow:hidden;


// &::before{
//     content:"";
//     position:absolute;
//     left:0;
//     width:100%;
//     height:0%;
//     background:#3498db;
//     z-index:-1;
//     transition:0.8s;
// }





// }
// .inverted{
//     color:#3498db;

//     &:hover{
//         color:#fff;
//     }
// }
// .goolesignIn{
//     color:#fff;

//     &:hover{
//         color:#3498db;
//     }
//     ::before{

//         top:0;
//         border-radius:0 0 50% 50%;

//     }
// }





   