import React from "react"
import logo from "../images/eliasbarber.svg"
import Address from "../components/Address"
import PropTypes from "prop-types"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const Footer = ({ siteTitle }) => {
  const { t } = useTranslation()
  return (
    <>
      <div className="barberstripe h-2" />
      <div className="grid grid-cols-6 bg-indigo">
        <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-2 p-5 lg:p-10 xl:p-16">
          <img
            src={logo}
            alt="Elias barber Barcelona"
            draggable="false"
            width={100}
            height={100}
          />
        </div>
        <div className="col-span-4 sm:col-span-4 md:col-span-5 lg:col-span-2">
          <Address />
        </div>
        <div className="col-span-6 md:col-span-6 lg:col-span-2">
          <div className="grid4 col-span-2 text-left lg:text-right pt-5 lg:p-10 xl:p-16">
            <div className="col-span-4">
              <ul className="uppercase text-gray-200 hover:text-white">
                <li className="p-0 m-0">
                  <Link to="/cookies">{t("POLITICA DE COOKIES")}</Link>
                </li>
                {/* <li className="p-0">Política de privacidad</li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-6 p-5 lg:p-10">
          <small className="text-gray-100 font-spartan">
            © {new Date().getFullYear()}, {siteTitle} <br />
            {t("STAMINAWEB")}{" "}
            <a
              href="https://staminaweb.ru/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="StaminaWeb"
              className="underline hover:text-yellow-400"
            >
              StaminaWeb
            </a>
          </small>
        </div>
      </div>
    </>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
