import React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const PideCita = ({ phrase }) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="grid4 z-50 md:sticky top-12">
        <div className="flex justify-center col-span-4 md:col-span-3 bg-secondary text-white p-5 lg:p-10">
          <div className="self-center">
            <div
              className="message"
              dangerouslySetInnerHTML={{
                __html: phrase,
              }}
            ></div>
          </div>
        </div>
        <div className="hidden md:block col-span-4 md:col-span-1 bg-secondary">
          <Link to="/pidecita#pidecita" className="langbuttons">
            <button className="sticky top-0 bg-red-600 hover:bg-red-500 h-full text-3xl xl:text-4xl text-gray-900 min-w-full font-oswald uppercase m-0 transition delay-75 duration-300 ease-in-out">
              {t("PIDE CITA")}
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default PideCita
