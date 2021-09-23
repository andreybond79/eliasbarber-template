import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import styled from "styled-components"
import Address from "../components/Address"
import logo from "../images/eliasbarber.svg"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import Aos from "aos"

const BlockOne = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
  }, [])
  const { t } = useTranslation()

  const { mainpic } = useStaticQuery(
    graphql`
      query {
        mainpic: file(relativePath: { eq: "eliasbarber004.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2024
              placeholder: NONE
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const salon = getImage(mainpic)
  return (
    <>
      <div className="grid4">
        <div className="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-3">
          <BackgroundImage Tag="div" image={salon}>
            <BackgroundGradient>
              <div className="grid grid-cols-5 gap-0 md:gap-5 xl:gap-10 bgbig bg-gray-800 bg-opacity-60 sm:bg-opacity-60 md:bg-opacity-0">
                <div className="col-span-5 sm:col-span-1 md:col-span-1 p-0 md:pl-5 lg:pl-10 xl:pl-16 pt-5 md:py-5 lg:py-10 xl:py-16 flex justify-center">
                  <div>
                    <Link to="/">
                      <img
                        src={logo}
                        width={100}
                        height={100}
                        alt="Elias barber Barcelona"
                        className="lg:top-10 place-self-center"
                        draggable="false"
                        data-aos="fade-down"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-span-5 sm:col-span-2 md:col-span-2 py-5 lg:py-10 xl:py-16">
                  <p className="font-oswald tracking-wider antialiased text-4xl sm:text-2xl md:text-4xl uppercase font-semibold text-white drop-shadow-lg md:text-gray-200 text-center sm:text-left">
                    Elias barber
                    <br />
                    <small className="font-thin font-spartan text-xl sm:text-base md:text-xl tracking-widest">
                      Barcelona
                    </small>
                  </p>
                </div>
                <div className="col-span-5 sm:col-span-2 md:col-span-2 p-0 sm:py-5 lg:py-10 xl:py-16 pr-5 lg:pr-10 xl:pr-16">
                  <ul className="text-center sm:text-right langbuttons font-semibold leading-loose uppercase">
                    <li className="m-0">
                      <Link to="/">{t("INICIO")}</Link>
                    </li>
                    <li className="m-0">
                      <Link to="/#precios">{t("PRECIOS")}</Link>
                    </li>

                    <li className="m-0">
                      <Link to="/#descuentos">{t("DESCUENTOS")}</Link>
                    </li>

                    <li className="m-0">
                      <Link to="/#horario">{t("HORARIO DE SERVICIO")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </BackgroundGradient>
          </BackgroundImage>
        </div>
        <div className="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-1 floatingpic004 bg-no-repeat bg-secondary">
          <PoleBack002>
            <Address />
          </PoleBack002>
        </div>
      </div>
    </>
  )
}

export default BlockOne

const PoleBack002 = styled.div`
  height: 100%;
  background: -moz-linear-gradient(
    45deg,
    rgba(117, 25, 25, 0.1) 50%,
    rgba(30, 42, 66, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    45deg,
    rgba(117, 25, 25, 0.3) 0%,
    rgba(30, 42, 66, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    45deg,
    rgba(117, 25, 25, 0.5) 0%,
    rgba(30, 42, 66, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a751919', endColorstr='#1e2a42',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#751919', endColorstr='#1e2a42',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`
const BackgroundImage = styled(BgImage)`
  background-size: cover;
  background-position: center left;
  background-color: #040e18;
`

const BackgroundGradient = styled.div`
  width: 100%;
  background: -moz-linear-gradient(
    top,
    rgba(29, 44, 60, 1) 0%,
    rgba(29, 44, 60, 0.9) 20%,
    rgba(29, 44, 60, 0.63) 30%,
    rgba(24, 37, 51, 0) 53%,
    rgba(17, 28, 40, 0.03) 82%,
    rgba(13, 23, 34, 1) 100%,
    rgba(13, 23, 34, 1) 98%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(29, 44, 60, 1) 0%,
    rgba(29, 44, 60, 0.9) 20%,
    rgba(29, 44, 60, 0.63) 30%,
    rgba(24, 37, 51, 0) 53%,
    rgba(17, 28, 40, 0.03) 82%,
    rgba(13, 23, 34, 1) 100%,
    rgba(13, 23, 34, 1) 98%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(29, 44, 60, 1) 0%,
    rgba(29, 44, 60, 0.9) 20%,
    rgba(29, 44, 60, 0.63) 30%,
    rgba(24, 37, 51, 0) 53%,
    rgba(17, 28, 40, 0.03) 82%,
    rgba(13, 23, 34, 1) 100%,
    rgba(13, 23, 34, 1) 98%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1d2c3c', endColorstr='#0d1722',GradientType=0 ); /* IE6-9 */
`
