import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BiMapPin } from "react-icons/bi"
import { BiTime } from "react-icons/bi"
import { useTranslation } from "gatsby-plugin-react-i18next"

const BlockFour = () => {
  const { t } = useTranslation()

  return (
    <>
      <div id="horario" className="grid4 bg-indigo">
        <div className="col-span-4 md:col-span-2 lg:col-span-2 p-5 lg:p-10 xl:p-16 bg-right-bottom floatingpic006 bg-no-repeat">
          <h2 className="text-red-500 header2">{t("HORARIO DE SERVICIO")}</h2>
          <h3 className="pb-5 text-white header3">{t("VISITANOS")}</h3>
          <section className="font-sans pr-5 pb-5">
            <BiTime className="text-white text-3xl" />
            <ul className="text-white">
              {/* <li>
                {t("LUNES")} 16:00 {t("CONJUNCTION A")} 20:00
              </li>
              <li>
                {t("MARTES")} {t("CONJUNCTION AL")} {t("SABADO")} 9:00{" "}
                {t("CONJUNCTION A")} 14:00
              </li> */}
              {/* <li>
                {t("LUNES")} {t("CONJUNCTION A")} {t("SABADO")} 9:00{" "}
                {t("CONJUNCTION A")} 14:00 {t("CONJUNCTION Y")} 16:00{" "}
                {t("CONJUNCTION A")} 20:30
              </li> */}
              <li>
                {t("LUNES")} {t("CONJUNCTION A")} {t("SABADO")} 9:00{" "}
                {t("CONJUNCTION A")} 20:30
              </li>
              <li>
                {t("DOMINGO")}: {t("CERRADO")}.
              </li>
            </ul>
          </section>
          <BiMapPin className="text-white text-3xl" />
          <ul className="text-white">
            <li>
              <a
                href="https://www.google.com/maps/place/Elias+barber/@41.4118552,2.1760398,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4a3f73a1f78e1:0x9c23a07d784b149e!8m2!3d41.4118552!4d2.1782285"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-yellow-500 rounded p-3 text-sm xl:text-xl shadow-md text-gray-900 hover:bg-red-600 font-spartan uppercase transition delay-75 duration-300 ease-in-out">
                  {t("ABRIR GOOGLE MAPS")}
                </button>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-2 p-5 lg:p-10 xl:p-16">
          <StaticImage
            src="../images/elias_barber_salon_barcelona.jpg"
            width={800}
            formats={["AUTO", "WEBP", "AVIF"]}
            loading="lazy"
            alt="Elias Barber Barcelona"
            draggable="false"
          />
        </div>
      </div>
      <div className="flex justify-center col-span-4 md:col-span-3 bg-secondary text-white p-5 md:p-5 lg:p-10">
        <div className="self-center">
          <div
            className="message"
            dangerouslySetInnerHTML={{
              __html: t("TIENES DUDAS"),
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default BlockFour
