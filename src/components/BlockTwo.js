import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { RiScissors2Fill } from "react-icons/ri"
import { useTranslation } from "gatsby-plugin-react-i18next"

const BlockTwo = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="grid4">
        <div className="col-span-4 md:col-span-2 lg:col-span-2 p-5 lg:p-10 xl:p-16 bg-gray-50 bg-left-bottom floatingpic007 bg-no-repeat">
          <h2 className="header2">
            <span className="text-red-700">{t("LA MEJOR OPCION")}</span>{" "}
            {t("PARA TU CABELLO Y TU BARBA")}
          </h2>
          <p className="font-sans pb-5 xl:pb-10">
            <b>Elias barber</b> {t("TEXT001")}
          </p>
          <div className="bg-beige p-5 lg:p-10 xl:p-16 shadow" id="precios">
            <H3Lined>
              <h3 className="font-oswald">{t("PRECIOS Y SERVICIOS")}</h3>
            </H3Lined>
            <div className="px-5 pt-5 lg:px-5 xl:px-10">
              <table className="font-sans text-sm uppercase">
                <tbody>
                  <tr>
                    <td>{t("CORTE CABELLO")}</td>
                    <td className="text-right">10.9&nbsp;&euro;</td>
                  </tr>
                  <tr>
                    <td>
                      {t("CORTE CABELLO")} + {t("BARBA")}
                    </td>
                    <td className="text-right">15.9&nbsp;&euro;</td>
                  </tr>
                  <tr>
                    <td>{t("BARBA")}</td>
                    <td className="text-right">7.9&nbsp;&euro;</td>
                  </tr>
                  <tr>
                    <td>
                      {t("AFEITADO CABEZA")} + {t("BARBA")}
                    </td>
                    <td className="text-right">10.9&nbsp;&euro;</td>
                  </tr>
                  <tr>
                    <td>{t("LAVADO CABELLO")}</td>
                    <td className="text-right">3&nbsp;&euro;</td>
                  </tr>
                  <tr>
                    <td>{t("CEJAS CON CUCHILLA")}</td>
                    <td className="text-right">3&nbsp;&euro;</td>
                  </tr>
                  <tr>
                    <td>{t("CEJAS CON CERA")}</td>
                    <td className="text-right">5&nbsp;&euro;</td>
                  </tr>
                  <tr>
                    <td>{t("MECHAS")}</td>
                    <td className="text-right">20&nbsp;&euro;</td>
                  </tr>
                  <tr>
                    <td>{t("DECOLORACION Y MATIZ")}</td>
                    <td className="text-right">30&nbsp;&euro;</td>
                  </tr>
                  <tr>
                    <td>{t("TINTE CUBRIR CANAS")}</td>
                    <td className="text-right">14&nbsp;&euro;</td>
                  </tr>
                  <tr>
                    <td>{t("LIMPIEZA FACIAL PROFUNDA")}</td>
                    <td className="text-right">15&nbsp;&euro;</td>
                  </tr>
                  <tr>
                    <td>{t("APLICACION DE FIBRA CAPILAR")}</td>
                    <td className="text-right">2&nbsp;&euro;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <H3Lined>
              <RiScissors2Fill />
            </H3Lined>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-2 bg-gray-200 bg-gradient-to-t from-red-50 floatingpic bg-no-repeat">
          <StaticImage
            src="../images/eliasbarbercosmetics.jpg"
            formats={["AUTO", "WEBP", "AVIF"]}
            loading="lazy"
            // objectFit="cover"
            alt="Elias Barber Barcelona"
            draggable="false"
            width={1000}
          />

          <div className="p-5 lg:p-10">
            <div className="grid grid-cols-3 gap-5 xl:gap-10">
              <div className="col-span-3 xl:col-span-1">
                <StaticImage
                  src="../images/redone.jpg"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  loading="lazy"
                  width={400}
                  alt="Elias Barber Barcelona"
                  className="shadow"
                  draggable="false"
                />
              </div>
              <div className="col-span-3 xl:col-span-2">
                <h2 className="text-red-700 text-center sm:text-left header2">
                  {t("NUEVO SERVICIO")}
                </h2>
                <h3 className="pb-5 header3">{t("NUEVO SERVICIO HEADER")}</h3>
                <p className="font-sans pr-5">{t("NUEVO SERVICIO TEXTO")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-5 lg:p-10 bg-indigo w-full h-40 z-10 bg-right-bottom floatingpic002 bg-no-repeat">
        <div className="self-center">
          <div className="uppercase self-center message text-white">
            <div
              id="descuentos"
              className="message"
              dangerouslySetInnerHTML={{
                __html: t("SERVICIOS PROFESIONALES CON"),
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlockTwo

const H3Lined = styled.section`
  display: flex;
  color: black;
  flex-direction: row;
  text-transform: uppercase;
  padding-top: 0.45rem;
  &:after,
  &:before {
    content: "";
    flex: 1 1;
    border-bottom: 2px solid black;
    margin: auto;
    margin-right: 0.45rem;
    margin-left: 0.45rem;
  }
`
