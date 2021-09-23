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
        <h2 className="header2">POLÍTICA DE COOKIES</h2>
        <section className="p-5 lg:p-10 xl:p-16">
          <h2 className="pb-5">{process.env.SITEURL}</h2>
          <p>
            L'accés a aquest lloc web pot implicar la utilització de cookies.
            Les cookies són petites quantitats d'informació que s'emmagatzemen
            en el navegador utilitzat per cada usuari -en els diferents
            dispositius que pugui utilitzar per navegar- perquè el servidor
            recordi certa informació que posteriorment i únicament el servidor
            que la va implementar llegirà. Les cookies faciliten la navegació,
            la fan més amigable, i no malmeten el dispositiu de navegació. Les
            cookies són procediments automàtics de recollida d'informació
            relativa a les preferències determinades per l'Usuari durant la seva
            visita a el Lloc Web per tal de reconèixer-lo com usuari, i
            personalitzar la seva experiència i l'ús del Lloc Web, i poden
            també, per exemple, ajudar a identificar i resoldre errors. La
            informació recollida a través de les cookies pot incloure la data i
            hora de visites a el Lloc Web, les pàgines visionades, el temps que
            ha estat en el Lloc Web i els llocs visitats just abans i després de
            la mateixa. No obstant això, cap galeta permet que aquesta mateixa
            pugui contactar-se amb el número de telèfon de l'Usuari o amb
            qualsevol altre mitjà de contacte personal. Cap cookie pot extreure
            informació del disc dur de l'Usuari o robar informació personal.
            L'única manera que la informació privada d'l'Usuari formi part de
            l'arxiu Cookie és que l'usuari doni personalment aquesta informació
            a servidor. Les cookies que permeten identificar una persona es
            consideren dades personals. Per tant, a les mateixes els serà
            d'aplicació la Política de Privacitat anteriorment descrita. En
            aquest sentit, per a la utilització de les mateixes serà necessari
            el consentiment de l'Usuari. Aquest consentiment s'ha de comunicar,
            d'acord amb una elecció autèntica, ofert mitjançant una decisió
            afirmativa i positiva, abans de l'tractament inicial, removible i
            documentat.
          </p>
          <h3 className="py-5">COOKIES PRÒPIES</h3>
          <p>
            Són aquelles cookies que són enviades a l'ordinador o dispositiu de
            l'Usuari i gestionades exclusivament per Elias barber Barcelona per
            al millor funcionament del Lloc Web. La informació que es recull
            s'empra per millorar la qualitat del Lloc Web i el seu contingut i
            la seva experiència com a Usuari. Aquestes cookies permeten
            reconèixer a l'Usuari com a visitant recurrent del Lloc Web i
            adaptar el contingut per oferir-continguts que es s'ajustin a les
            seves preferències.
          </p>
          <h3 className="py-5">COOKIES DE TERCERS</h3>
          <p>
            Són cookies utilitzades i gestionades per entitats externes que
            proporcionen a Elias barber Barcelona serveis sol·licitats per
            aquest mateix per millorar el lloc web i l'experiència de l'usuari a
            l'navegar en el Lloc Web. Els principals objectius per als quals
            s'utilitzen cookies de tercers són l'obtenció d'estadístiques
            d'accessos i analitzar la informació de la navegació, és a dir, com
            interactua l'usuari amb el Lloc Web. La informació que s'obté es
            refereix, per exemple, a el nombre de pàgines visitades, l'idioma,
            el lloc a què l'adreça IP des del qual accedeix l'Usuari, el nombre
            d'usuaris que accedeixen, la freqüència i reincidència de les
            visites, el temps de visita, el navegador que fan servir, l'operador
            o tipus de dipositivo des del qual es realitza la visita. Aquesta
            informació s'utilitza per millorar el Lloc Web, i detectar noves
            necessitats per oferir als Usuaris un Contingut i / o servei
            d'òptima qualitat. En tot cas, la informació es recopila de forma
            anònima i s'elaboren informes de tendències del Lloc Web sense
            identificar a usuaris individuals. Podeu obtenir més informació
            sobre les cookies, la informació sobre la privacitat, o consultar la
            descripció de l'tipus de cookies que s'utilitza, les seves
            principals característiques, període d'expiració, etc. en el següent
            (s) enllaç (s):
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
            La (s) entitat (és) encarregada (s) de l'subministrament de cookies
            podrà (n) cedir aquesta informació a tercers, sempre que ho exigeixi
            la llei o sigui un tercer el que processi aquesta informació per a
            aquestes entitats.
          </p>
          <h3 className="py-5">cookies de xarxes socials</h3>
          <p>
            Elias barber Barcelona incorpora connectors de xarxes socials, que
            permeten accedir-hi a partir del Lloc Web. Per aquesta raó, les
            cookies de xarxes socials poden emmagatzemar al navegador de
            l'Usuari. Els titulars d'aquestes xarxes socials disposen de les
            seves pròpies polítiques de protecció de dades i de cookies, sent
            ells mateixos, en cada cas, responsables dels seus propis fitxers i
            de les seves pròpies pràctiques de privacitat. L'Usuari ha de
            referir-se a les mateixes per a informar-se sobre aquestes cookies
            i, si escau, de l'tractament de les seves dades personals. Únicament
            a títol informatiu s'indiquen a continuació els enllaços en els
            quals es poden consultar aquestes polítiques de privacitat i / o de
            cookies:
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
          <h3 className="py-5">Desactivar, REBUTJAR I ELIMINAR COOKIES</h3>
          <p>
            L'usuari pot desactivar, rebutjar i eliminar les cookies -total o
            parcialment- instal·lades en el seu dispositiu mitjançant la
            configuració del seu navegador (entre els quals es troben, per
            exemple, Chrome, Firefox, Safari, Explorer). En aquest sentit, els
            procediments per rebutjar i eliminar les cookies poden diferir d'un
            navegador d'Internet a un altre. En conseqüència, l'Usuari ha d'anar
            a les instruccions facilitades pel propi navegador d'Internet que
            utilitzeu. En el cas que rebutgi l'ús de cookies -total o
            parcialment- podrà seguir utilitzant el Lloc Web, si bé podrà tenir
            limitada la utilització d'algunes de les prestacions de la mateixa.
            Aquest document de Política de Cookies ha estat creat mitjançant el
            generador de plantilla de política de cookies en línia el dia{" "}
            <b>2021.04.21</b>.
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
