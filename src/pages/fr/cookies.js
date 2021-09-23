import React, { useContext } from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { I18nextContext } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

const Cookies = () => {
  const { language } = useContext(I18nextContext)

  return (
    <Layout>
      <Seo lang={language} title="Cookies" />
      <div className="flex flex-col p-5 lg:p-10 xl:p-16">
        <h2 className="header2">POLITIQUE DE COOKIES</h2>
        <section className="p-5 lg:p-10 xl:p-16">
          <h2 className="pb-5">{process.env.SITEURL}</h2>
          <p>
            L'accès à ce site Web peut impliquer l'utilisation de cookies. Les
            cookies sont de petites quantités d'informations qui sont stockées
            dans le navigateur utilisé par chaque utilisateur - dans les
            différents appareils qu'ils peuvent utiliser pour naviguer - afin
            que le serveur se souvienne de certaines informations que plus tard
            et seul le serveur qui les a implémentées lira. Les cookies
            facilitent la navigation, la rendent plus conviviale et
            n'endommagent pas l'appareil de navigation. Les cookies sont des
            procédures automatiques de collecte d'informations concernant les
            préférences déterminées par l'utilisateur lors de sa visite sur le
            site Web afin de le reconnaître en tant qu'utilisateur, et de
            personnaliser son expérience et l'utilisation du site Web, et
            peuvent également, par exemple, aider à identifier et résoudre les
            erreurs. Les informations collectées via les cookies peuvent inclure
            la date et l'heure des visites sur le site Web, les pages
            consultées, le temps passé sur le site Web et les sites visités
            juste avant et après celui-ci. Cependant, aucun cookie ne lui permet
            de contacter le numéro de téléphone de l'Utilisateur ou tout autre
            moyen de contact personnel. Aucun cookie ne peut extraire des
            informations du disque dur de l'Utilisateur ou voler des
            informations personnelles. La seule façon dont les informations
            privées de l'utilisateur font partie du fichier cookie est que
            l'utilisateur donne personnellement ces informations au serveur. Les
            cookies qui permettent d'identifier une personne sont considérés
            comme des données personnelles. Par conséquent, la politique de
            confidentialité décrite ci-dessus s'appliquera à eux. En ce sens,
            pour son utilisation, le consentement de l'utilisateur sera
            nécessaire. Ce consentement sera communiqué, sur la base d'un choix
            authentique, offert par une décision affirmative et positive, avant
            le traitement initial, démontable et documenté.
          </p>
          <h3 className="py-5">Propres cookies</h3>
          <p>
            Ce sont ces cookies qui sont envoyés à l'ordinateur ou à l'appareil
            de l'utilisateur et gérés exclusivement par Elias barber Barcelona
            pour le meilleur fonctionnement du site Web. Les informations
            collectées sont utilisées pour améliorer la qualité du site Web et
            de son contenu et votre expérience en tant qu'utilisateur. Ces
            cookies permettent à l'Utilisateur d'être reconnu comme visiteur
            récurrent du Site et d'adapter le contenu pour proposer un contenu
            répondant à ses préférences.
          </p>
          <h3 className="py-5">COOKIES DE TIERS</h3>
          <p>
            Ce sont des cookies utilisés et gérés par des entités externes qui
            fournissent à Elias barber Barcelona les services demandés par
            celle-ci pour améliorer le site Web et l'expérience utilisateur lors
            de la navigation sur le site Web. Les principaux objectifs pour
            lesquels les cookies tiers sont utilisés sont d'obtenir des
            statistiques d'accès et d'analyser les informations de navigation,
            c'est-à-dire comment l'utilisateur interagit avec le site Web. Les
            informations obtenues se réfèrent, par exemple, au nombre de pages
            visitées, à la langue, au lieu où l'adresse IP à partir de laquelle
            l'utilisateur accède, au nombre d'utilisateurs qui accèdent, à la
            fréquence et à la récurrence des visites, à l'heure de la visite, au
            navigateur ils utilisent, l'opérateur ou le type d'appareil à partir
            duquel la visite est effectuée. Ces informations sont utilisées pour
            améliorer le site Web et détecter de nouveaux besoins pour offrir
            aux utilisateurs un contenu et / ou un service de la plus haute
            qualité. Dans tous les cas, les informations sont collectées de
            manière anonyme et des rapports de tendances sur le site Web sont
            préparés sans identification des utilisateurs individuels. Vous
            pouvez obtenir plus d'informations sur les cookies, des informations
            sur la confidentialité, ou consulter la description du type de
            cookies utilisés, leurs principales caractéristiques, leur délai
            d'expiration, etc. au (x) lien (s) suivant (s):
          </p>
          <ul className="py-5">
            <li>
              <b>Google Analytics</b>:{" "}
              <a
                href="https://developers.google.com/analytics/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-700"
              >
                https://developers.google.com/analytics/
              </a>
            </li>
          </ul>
          <p>
            La ou les entités chargées de fournir les cookies peuvent transférer
            ces informations à des tiers, pour autant que cela soit requis par
            la loi ou que ce soit un tiers qui traite ces informations pour
            lesdites entités.
          </p>
          <h3 className="py-5">COOKIES DES MÉDIAS SOCIAUX</h3>
          <p>
            Elias barber Barcelona intègre des plugins de réseaux sociaux, qui
            permettent d'y accéder à partir du site Web. Pour cette raison, les
            cookies des réseaux sociaux peuvent être stockés dans le navigateur
            de l'Utilisateur. Les propriétaires de ces réseaux sociaux ont leurs
            propres politiques de protection des données et de cookies, étant
            eux-mêmes, dans chaque cas, responsables de leurs propres fichiers
            et de leurs propres pratiques de confidentialité. L'Utilisateur doit
            s'y référer pour connaître lesdits cookies et, le cas échéant, le
            traitement de ses données personnelles. À titre informatif
            uniquement, les liens dans lesquels ces politiques de
            confidentialité et / ou de cookies peuvent être consultées sont
            indiqués ci-dessous:
          </p>
          <ul className="py-5">
            <li>
              <b>Facebook</b>:{" "}
              <a
                href="https://www.facebook.com/policies/cookies/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-700"
              >
                https://www.facebook.com/policies/cookies/
              </a>
            </li>
            <li>
              <b>Instagram</b>:{" "}
              <a
                href="https://help.instagram.com/1896641480634370?ref=ig"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-700"
              >
                https://help.instagram.com/1896641480634370?ref=ig
              </a>
            </li>
          </ul>
          <h3 className="py-5">DÉSACTIVER, REJETER ET SUPPRIMER LES COOKIES</h3>
          <p>
            L'Utilisateur peut désactiver, rejeter et supprimer les cookies -
            totalement ou partiellement - installés sur son appareil via les
            paramètres de son navigateur (qui incluent, par exemple, Chrome,
            Firefox, Safari, Explorer). En ce sens, les procédures de rejet et
            de suppression des cookies peuvent différer d'un navigateur Internet
            à l'autre. En conséquence, l'Utilisateur doit se référer aux
            instructions fournies par le navigateur Internet qu'il utilise. Dans
            le cas où vous rejetez l'utilisation de cookies - totalement ou
            partiellement - vous pouvez continuer à utiliser le site Web, bien
            que vous puissiez avoir une utilisation limitée de certaines de ses
            fonctionnalités. Ce document de politique de cookies a été créé à
            l'aide du générateur de modèles de politique de cookies en ligne le
            <b> 21/04/2021</b>.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default Cookies

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
