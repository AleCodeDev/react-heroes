import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1 className="p-2 mt-2 fw-bold bg-danger text-white d-flex justify-content-center">Marvel Comics</h1>
      <br />
      <HeroList publisher='Marvel Comics' />
    </>
  )
}
