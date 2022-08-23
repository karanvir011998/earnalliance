import {useForm} from "react-hook-form";
import {Div} from "./Style"

function Login (){
    const onSubmit = () =>{
        alert("hello")
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return(
        <Div>
            <div>
                <img src="./images/logologin.png" alt="icon" />
            </div>
            <div className="signin">
        <h2 className='white'>Sign in to your Alliance Account</h2>

         <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <label>Email Address</label><br />
          <input className='input' {...register('email',{required:true,pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} placeholder="  Email or phone number"/>
          {errors.email && <span className='err'>Please enter valid email </span> }
          <br />
          <label>Password</label><br />
          <input className='input' {...register('password',{required:true})} type="password" placeholder="  Password"/>
          {errors.password && <span className='err'>Please enter your passowrd. </span> }
          <br />
          

          <a className="reset" href="/">Reset Password</a>

          <div className="signinwith">
                <button className="sgoogle">Sign in with Google</button>
                <button className="sgoogle">Sign in with Discord</button>
                <br />
          </div>
          <span>Dont have an Account yet?</span><br />
          <a className="Signup" href="/">Signup to Earn Alliance now</a>

        </form>
    
      </div>
            {/* <div className="">
                <h3>Sign into you Earn Alliance Account</h3>
                    <form>
                        <label>Email Address</label>
                        <input type="email" />
                        <label>Password</label>
                        <input type="password" />
                        <button>Reset Password</button>
                        <div className="signinwith">
                            <button>Sign in with Google</button>
                            <button>Sign in with Discord</button>
                        </div>             
                    </form>
                </div>           */}
        </Div>
    )}

export default Login;