import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { RiScissors2Fill } from "react-icons/ri"
import scrollTo from "gatsby-plugin-smoothscroll"
// import Popup from "./Popup"

const Header = () => {
  const { originalPath } = useI18next()
  return (
    <>
      {/* <Popup /> */}
      <header className="shadow-xl sticky top-0 z-50">
        <div className="bg-indigo shadow flex justify-between p-0 sm:px-5 lg:px-10">
          <Link
            className="p-2 flex"
            to="#toppart"
            onClick={() => scrollTo("#toppart")}
            aria-label="Inicio"
          >
            <RiScissors2Fill className="text-gray-100 text-xl xl:text-2xl" />
            <RiScissors2Fill className="text-gray-100 text-xl xl:text-2xl transform rotate-180" />
          </Link>

          <ul className="text-white flex flex-wrap p-2">
            <li className="pb-0">
              <Link to={originalPath} language="es">
                <button className="langbuttons">ESP</button>
              </Link>
            </li>
            <li className="pb-0">
              <Link to={originalPath} language="ca">
                <button className="langbuttons">CAT</button>
              </Link>
            </li>
            <li className="pb-0">
              <Link to={originalPath} language="fr">
                <button className="langbuttons">FRA</button>
              </Link>
            </li>
            <li className="pb-0">
              <Link to={originalPath} language="en">
                <button className="langbuttons">ENG</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="barberstripe h-2 bg-white" />
      </header>
    </>
  )
}

export default Header
