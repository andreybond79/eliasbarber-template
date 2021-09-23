import React from "react"
// import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import { useTranslation } from "gatsby-plugin-react-i18next"

import { FcClock } from "react-icons/fc"

import styled from "styled-components"
import topbarpicture from "../images/nuevo-horario-bar.webp"

const Warning = () => {
  const { t } = useTranslation()
  const startDay = new Date("Aug 22 2021")
  const finishDay = new Date("Aug 28 2021")
  const today = new Date()
  const showTopbar = Boolean(today >= startDay && today <= finishDay)

  return (
    showTopbar && (
      <>
        <TopBar className="bg-red-800 text-center py-1 lg:px-1 z-50 shadow">
          <div
            className="p-2 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span>
              <FcClocks className="text-gray-800" />
            </span>
            <span className="animate-bounce text-center flex-auto text-gray-800 text-xl xl:text-2xl font-oswald">
              {t("TOPBAR MESSAGE")}
            </span>
            <span>
              <FcClockFlipped className="text-gray-800" />
            </span>
          </div>
        </TopBar>
      </>
    )
  )
}

export default Warning

const TopBar = styled.div`
  background-image: url(${topbarpicture});
  background-repeat: no-repeat;
  background-size: cover;
`
const FcClocks = styled(FcClock)`
  font-size: 2rem;
  margin: 1rem;
`
const FcClockFlipped = styled(FcClock)`
  font-size: 2rem;
  margin: 1rem;
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
`
