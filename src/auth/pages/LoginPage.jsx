import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  const navigate = useNavigate();

  const onLoginSubmit = (e) => {
    e.preventDefault

    const lasPath = localStorage.getItem('lastPath') || '/';

    login('Diego Perez');
    
    navigate( lasPath, {
      replace: true,
    });
  }

  // const onLogin = () => {

  //   login('Diego Perez');
    
  //   navigate('/', {
  //     replace: true,
  //   });
  // }

  const urlImageBacjG = `https://alecodedev.github.io/react-heroes/custom/deadpool.jpg`
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundImage: `url(${urlImageBacjG})`, height: '100vh' , backgroundRepeat: 'no-repeat', objectFit: 'cover' }}>
            <div className="row p-5 rounded" style={{ width: '35%', backgroundColor: '#61616156' }}>
                <h2 className="bg-danger p-2 m-2 d-flex justify-content-center text-white" style={{ width: '120px' }}>LOGIN</h2>
                <form className="row d-flex" onSubmit={onLoginSubmit}>
                    <input className="p-2 m-2 rounded border-0" type="email" placeholder="Email" required />
                    <input className="p-2 m-2 rounded border-0" type="password" placeholder="Password" required />

                    <div className="d-flex justify-content-center align-items-center">
                        <button
                            className="btn btn-outline-warning p-2 mt-2 mb-4 w-25 rounded"
                            // onClick={onLogin}
                        >
                            Next
                        </button>
                    </div>

                    <div className="d-flex justify-content-center">
                        <p className="fst-italic text-info" style={{ letterSpacing: '1px' }}>*Este formulario no tiene autenticación</p>
                    </div>

                </form>
            </div>
        </div>
  )
}
