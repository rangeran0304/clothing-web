import { BaseButton,GoogleSignInButton,InvertedButton } from "./button.styles"
const BUTTON_TYPE_CLASSES={
    base:'base',
    google:'google-sign-in',
    inverted:'inverted',
}
const getbutton = (buttonType = BUTTON_TYPE_CLASSES.base)=>({
   [BUTTON_TYPE_CLASSES.base]: BaseButton,
   [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
   [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

}[buttonType])
const Button = ({children,buttonType,...otherProps})=>{
   const buttontype=BUTTON_TYPE_CLASSES[buttonType]
   console.log(buttontype)
   const CustomButton = getbutton(buttontype)
   return(
    <CustomButton {...otherProps}>
       {children}
    </CustomButton>
   )
}
export default Button