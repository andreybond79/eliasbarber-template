import React, { useContext } from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
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
            El acceso a este Sitio Web puede implicar la utilización de cookies.
            Las cookies son pequeñas cantidades de información que se almacenan
            en el navegador utilizado por cada Usuario —en los distintos
            dispositivos que pueda utilizar para navegar— para que el servidor
            recuerde cierta información que posteriormente y únicamente el
            servidor que la implementó leerá. Las cookies facilitan la
            navegación, la hacen más amigable, y no dañan el dispositivo de
            navegación. Las cookies son procedimientos automáticos de recogida
            de información relativa a las preferencias determinadas por el
            Usuario durante su visita al Sitio Web con el fin de reconocerlo
            como Usuario, y personalizar su experiencia y el uso del Sitio Web,
            y pueden también, por ejemplo, ayudar a identificar y resolver
            errores. La información recabada a través de las cookies puede
            incluir la fecha y hora de visitas al Sitio Web, las páginas
            visionadas, el tiempo que ha estado en el Sitio Web y los sitios
            visitados justo antes y después del mismo. Sin embargo, ninguna
            cookie permite que esta misma pueda contactarse con el número de
            teléfono del Usuario o con cualquier otro medio de contacto
            personal. Ninguna cookie puede extraer información del disco duro
            del Usuario o robar información personal. La única manera de que la
            información privada del Usuario forme parte del archivo Cookie es
            que el usuario dé personalmente esa información al servidor. Las
            cookies que permiten identificar a una persona se consideran datos
            personales. Por tanto, a las mismas les será de aplicación la
            Política de Privacidad anteriormente descrita. En este sentido, para
            la utilización de las mismas será necesario el consentimiento del
            Usuario. Este consentimiento será comunicado, en base a una elección
            auténtica, ofrecido mediante una decisión afirmativa y positiva,
            antes del tratamiento inicial, removible y documentado.
          </p>
          <h3 className="py-5">Cookies propias</h3>
          <p>
            Son aquellas cookies que son enviadas al ordenador o dispositivo del
            Usuario y gestionadas exclusivamente por Elias barber Barcelona para
            el mejor funcionamiento del Sitio Web. La información que se recaba
            se emplea para mejorar la calidad del Sitio Web y su Contenido y su
            experiencia como Usuario. Estas cookies permiten reconocer al
            Usuario como visitante recurrente del Sitio Web y adaptar el
            contenido para ofrecerle contenidos que se ajusten a sus
            preferencias.
          </p>
          <h3 className="py-5">Cookies de terceros</h3>
          <p>
            Son cookies utilizadas y gestionadas por entidades externas que
            proporcionan a Elias barber Barcelona servicios solicitados por este
            mismo para mejorar el Sitio Web y la experiencia del usuario al
            navegar en el Sitio Web. Los principales objetivos para los que se
            utilizan cookies de terceros son la obtención de estadísticas de
            accesos y analizar la información de la navegación, es decir, cómo
            interactúa el Usuario con el Sitio Web. La información que se
            obtiene se refiere, por ejemplo, al número de páginas visitadas, el
            idioma, el lugar a la que la dirección IP desde el que accede el
            Usuario, el número de Usuarios que acceden, la frecuencia y
            reincidencia de las visitas, el tiempo de visita, el navegador que
            usan, el operador o tipo de dipositivo desde el que se realiza la
            visita. Esta información se utiliza para mejorar el Sitio Web, y
            detectar nuevas necesidades para ofrecer a los Usuarios un Contenido
            y/o servicio de óptima calidad. En todo caso, la información se
            recopila de forma anónima y se elaboran informes de tendencias del
            Sitio Web sin identificar a usuarios individuales. Puede obtener más
            información sobre las cookies, la información sobre la privacidad, o
            consultar la descripción del tipo de cookies que se utiliza, sus
            principales características, periodo de expiración, etc. en el
            siguiente(s) enlace(s):
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
            La(s) entidad(es) encargada(s) del suministro de cookies podrá(n)
            ceder esta información a terceros, siempre y cuando lo exija la ley
            o sea un tercero el que procese esta información para dichas
            entidades.
          </p>
          <h3 className="py-5">Cookies de redes sociales</h3>
          <p>
            Elias barber Barcelona incorpora plugins de redes sociales, que
            permiten acceder a las mismas a partir del Sitio Web. Por esta
            razón, las cookies de redes sociales pueden almacenarse en el
            navegador del Usuario. Los titulares de dichas redes sociales
            disponen de sus propias políticas de protección de datos y de
            cookies, siendo ellos mismos, en cada caso, responsables de sus
            propios ficheros y de sus propias prácticas de privacidad. El
            Usuario debe referirse a las mismas para informarse acerca de dichas
            cookies y, en su caso, del tratamiento de sus datos personales.
            Unicamente a título informativo se indican a continuación los
            enlaces en los que se pueden consultar dichas políticas de
            privacidad y/o de cookies:
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
          <h3 className="py-5">Deshabilitar, rechazar y eliminar cookies</h3>
          <p>
            El Usuario puede deshabilitar, rechazar y eliminar las cookies
            —total o parcialmente— instaladas en su dispositivo mediante la
            configuración de su navegador (entre los que se encuentran, por
            ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los
            procedimientos para rechazar y eliminar las cookies pueden diferir
            de un navegador de Internet a otro. En consecuencia, el Usuario debe
            acudir a las instrucciones facilitadas por el propio navegador de
            Internet que esté utilizando. En el supuesto de que rechace el uso
            de cookies —total o parcialmente— podrá seguir usando el Sitio Web,
            si bien podrá tener limitada la utilización de algunas de las
            prestaciones del mismo. Este documento de Política de Cookies ha
            sido creado mediante el generador de plantilla de política de
            cookies online el día <b>21/04/2021</b>.
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
