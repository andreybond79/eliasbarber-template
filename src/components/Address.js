import React from "react"
import Socials from "./Socials"
import { useTranslation } from "gatsby-plugin-react-i18next"

const AddressBar = () => {
  const { t } = useTranslation()

  return (
    <div className="p-5 lg:p-10 xl:p-16 langbuttons tracking-wider">
      <p className="pb-5 font-spartan">{t("ADDRESS")}</p>
      {/* <p className="pb-5 text-xs ltrTextReverse">moc.liamg@ssailiritahk</p> */}
      <a href="tel:631922847">TEL: 631922847</a>
      <Socials theme="socialsdark" />
    </div>
  )
}

export default AddressBar
