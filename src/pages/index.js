import React, { useContext } from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import BlockTwo from "../components/BlockTwo"
import BlockThree from "../components/BlockThree"
import BlockFour from "../components/BlockFour"
import PideCita from "../components/PideCita"
import {
  Link,
  useTranslation,
  I18nextContext,
} from "gatsby-plugin-react-i18next"

const IndexPage = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)
  return (
    <Layout>
      <Seo lang={language} title="Elias Barber Barcelona" />
      <PideCita
        phrase={t("EL LUGAR PARA CAMBIAR DE IMAGEN")}
        id="my-cool-header"
      />
      <div className="z-50 block md:hidden sticky top-12 shadow-lg bg-secondary">
        <Link to="/pidecita#pidecita">
          <button className="sticky top-0 bg-red-600 hover:bg-red-500 h-20 text-3xl shadow-md text-gray-900 min-w-full font-oswald uppercase m-0 transition delay-75 duration-300 ease-in-out">
            {t("PIDE CITA")}
          </button>
        </Link>
      </div>
      <BlockTwo />
      <BlockThree />

      <BlockFour />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
