import React, { useContext } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"
import BlockFour from "../components/BlockFour"
import applestore from "../images/app-store-badge.svg"
import googlestore from "../images/google-play-badge.svg"
import { I18nextContext, useTranslation } from "gatsby-plugin-react-i18next"
import { isMobile } from "react-device-detect"

const PideCita = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)
  const linkgobarber = "CUSTOM LINK IS HERE. PLEASE CHANGE IT"
  return (
    <Layout>
      <Seo lang={language} title={t("PIDE CITA")} />
      <div className="grid4 z-50 md:sticky top-12">
        <div className="flex justify-center col-span-4 md:col-span-3 bg-secondary text-white p-5 lg:p-10">
          <div className="self-center">
            <div className="message">{t("PIDE CITA CON GOBARBER")}</div>
          </div>
        </div>
        <div className="z-50 hidden md:block col-span-4 md:col-span-1 bg-red-600">
          {isMobile && (
            <a
              href={linkgobarber}
              className="langbuttons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="sticky top-0 bg-red-600 hover:bg-red-500 h-full text-3xl xl:text-4xl text-gray-900 min-w-full font-oswald uppercase m-0 transition delay-75 duration-300 ease-in-out">
                GoBarber
              </button>
            </a>
          )}
        </div>
      </div>
      <div className="z-50 block md:hidden sticky top-12 shadow-lg bg-secondary">
        <a
          href={linkgobarber}
          className="langbuttons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="sticky top-0 bg-red-600 hover:bg-red-500 h-20 text-3xl xl:text-4xl text-gray-900 min-w-full font-oswald uppercase m-0 transition delay-75 duration-300 ease-in-out">
            GoBarber
          </button>
        </a>
      </div>

      <div className="grid4" id="pidecita">
        <div className="col-span-4 md:col-span-2 p-5 lg:p-10 xl:p-16 bg-gray-50 text-center">
          <StaticImage
            src="../images/gobarber.jpg"
            formats={["AUTO", "WEBP", "AVIF"]}
            loading="lazy"
            alt="Elias Barber Barcelona"
            className="shadow"
            draggable="false"
          />
        </div>
        <div className="col-span-4 md:col-span-2 p-5 lg:p-10 xl:p-16">
          <h2 className="pb-5 header2">
            <span className="text-red-700">{t("PIDE CITA")}</span>
          </h2>
          <p className="text-gray-700">{t("PIDE CITA TEXT")}</p>
          <h3 className="py-5 header3">{t("DOWNLOAD THE APP")}</h3>

          <div className="flex">
            <div className="py-5">
              <a
                href="https://apps.apple.com/ru/app/gobarber/id1458298585"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={applestore}
                  alt="Gobarber app Apple store"
                  className="w-40"
                />
              </a>
            </div>
            <div className="p-5 lg:p-5">
              <a
                href="https://play.google.com/store/apps/details?id=com.gofiotec.CitasClient"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={googlestore}
                  alt="Gobarber app Google store"
                  className="w-40"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <BlockFour />
    </Layout>
  )
}

export default PideCita

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
