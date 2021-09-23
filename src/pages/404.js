import React, { useContext } from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PideCita from "../components/PideCita"

import {
  Link,
  useTranslation,
  I18nextContext,
} from "gatsby-plugin-react-i18next"

const PageIsNotFound = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)
  return (
    <Layout>
      <Seo lang={language} title={t("PAGE NO FOUND")} />
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
      <div className="grid4 bg-indigo text-center">
        <div className="col-span-2 p-5 lg:p-10 xl:p-16 flex justify-center">
          <StaticImage
            src="../images/scull.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            width={200}
            loading="lazy"
            alt="Elias Barber Barcelona"
            draggable="false"
          />
        </div>
        <div className="col-span-2 flex">
          <p className="leading-normal font-spartan text-white text-xl md:text-2xl uppercase self-center">
            <span className="text-red-700 font-semibold">
              ERROR 404
              <br />
            </span>
            <br />
            {t("PAGE NO FOUND")}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default PageIsNotFound

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
