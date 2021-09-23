import React from "react"
import { RiFacebookCircleFill } from "react-icons/ri"
import { RiInstagramFill } from "react-icons/ri"
import { RiAtLine } from "react-icons/ri"

const Socials = ({ theme }) => {
  function rotate(word, shift) {
    return word.replace(/[a-zA-Z]/g, function (c) {
      return String.fromCharCode(
        (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + shift) ? c : c - 26
      )
    })
  }
  return (
    <div className="flex pt-5">
      <a
        className={theme}
        href="LINK IS HERE"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <RiFacebookCircleFill className="text-4xl" />
      </a>
      <a
        className={theme}
        href="LINK IS HERE"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <RiInstagramFill className="text-4xl" />
      </a>
      <a
        className={theme}
        href={rotate("REVERSED EMAIL LINK IS HERE", 12)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <RiAtLine className="text-4xl" />
      </a>
    </div>
  )
}

export default Socials
