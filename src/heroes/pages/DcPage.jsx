import { HeroList } from '../components';


export const DcPage = () => {
  return (
    <div className="d-flex row justify-content-center">
      <h1 className="p-2 mt-2 fw-bold bg-primary text-white d-flex justify-content-center">DC Comics</h1>
      <br />
      <HeroList publisher='DC Comics' />
    </div>
  )
}
