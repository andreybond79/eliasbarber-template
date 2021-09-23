import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Socials from "../components/Socials"

const BlockThree = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="grid4">
        <div className="col-span-4 sm:col-span-1 md:col-span-2 lg:col-span-2 z-40 bg-gray-50">
          <StaticImage
            src="../images/eliasbarberwall.jpg"
            formats={["AUTO", "WEBP", "AVIF"]}
            loading="lazy"
            alt="Elias Barber Barcelona"
            draggable="false"
            // objectFit="scale-down"
            width={1000}
          />
        </div>

        <div className="col-span-4 sm:col-span-3 md:col-span-2 lg:col-span-2 p-5 lg:p-10 xl:p-16 bg-gray-100 text-gray-900 bg-right-bottom floatingpic005 bg-no-repeat">
          <h2 className="header2">
            {t("POR LA NUEVA APERTURA TENEMOS")}{" "}
            <span className="text-red-700">{t("DESCUENTOS")}</span>
          </h2>
          <h3 className="pb-5 header3">
            {t("HASTA")} <span className="text-red-700">20%</span>{" "}
            {t("DE DESCUENTO")}
          </h3>
          <p className="font-sans pr-5 pb-5">
            {t("POR NUESTRA NUEVA APERTURA")} <b>Elias barber</b>{" "}
            {t("OFRECE UNOS DESCUENTOS")}
          </p>
          <p className="font-sans font-bold">
            {t("SIGANOS EN LAS CUENTAS SOCIALES")}
          </p>
          <Socials theme="socialslight" />
        </div>
      </div>
      <div className="flex justify-center col-span-4 md:col-span-3 bg-secondary text-white p-5 md:p-5 lg:p-10">
        <div className="self-center">
          <div
            className="message"
            dangerouslySetInnerHTML={{
              __html: t("ESTAS LISTO PARA CAMBIAR DE LOOK"),
            }}
          />
        </div>
      </div>
    </>
  )
}

export default BlockThree
