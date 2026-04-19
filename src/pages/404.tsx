import { Layout } from '../components/Layout'

const Error404 = () => {
  const content = (
    <>
      <p>
        Nyt kävi niin, että yritit avata sivua, jota ei ole olemassa. Kaikille
        sivuston sivuille pääset yllä olevan valikon kautta.
      </p>
      <p>
        Jos puolestaan etsit jotain, mitä Pramiat vadit voisi vuokrata, niin
        laita meille viestiä.
      </p>
    </>
  )
  return <Layout pageTitle="Sivua ei löydy" content={content} />
}

export default Error404
