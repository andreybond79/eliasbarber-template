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
        <h2 className="header2">COOKIES POLICY</h2>
        <section className="p-5 lg:p-10 xl:p-16">
          <h2 className="pb-5">{process.env.SITEURL}</h2>
          <p>
            Access to this Website may imply the use of cookies. Cookies are
            small amounts of information that are stored in the browser used by
            each User —in the different devices that they may use to navigate—
            so that the server remembers certain information that later and only
            the server that implemented it will read. Cookies facilitate
            navigation, make it more user-friendly, and do not damage the
            navigation device. Cookies are automatic procedures for collecting
            information regarding the preferences determined by the User during
            his visit to the Website in order to recognize him as a User, and
            personalize his experience and use of the Website, and may also, for
            example, help to identify and resolve errors. The information
            collected through cookies may include the date and time of visits to
            the Website, the pages viewed, the time spent on the Website and the
            sites visited just before and after it. However, no cookie allows it
            to contact the User's phone number or any other means of personal
            contact. No cookie can extract information from the User's hard
            drive or steal personal information. The only way that the User's
            private information is part of the Cookie file is for the user to
            personally give that information to the server. Cookies that allow a
            person to be identified are considered personal data. Therefore, the
            Privacy Policy described above will apply to them. In this sense,
            for the use of the same, the consent of the User will be necessary.
            This consent will be communicated, based on an authentic choice,
            offered by an affirmative and positive decision, before the initial
            treatment, removable and documented.
          </p>
          <h3 className="py-5">OWN COOKIES</h3>
          <p>
            They are those cookies that are sent to the User's computer or
            device and managed exclusively by Elias barber Barcelona for the
            best functioning of the Website. The information that is collected
            is used to improve the quality of the Website and its Content and
            your experience as a User. These cookies allow the User to be
            recognized as a recurring visitor to the Website and adapt the
            content to offer content that meets their preferences.
          </p>
          <h3 className="py-5">THIRD PARTY COOKIES</h3>
          <p>
            They are cookies used and managed by external entities that provide
            Elias barber Barcelona with services requested by it to improve the
            Website and the user experience when browsing the Website. The main
            purposes for which third-party cookies are used are to obtain access
            statistics and analyze navigation information, that is, how the User
            interacts with the Website. The information obtained refers, for
            example, to the number of pages visited, the language, the place
            where the IP address from which the User accesses, the number of
            Users who access, the frequency and recurrence of visits, the visit
            time, the browser they use, the operator or type of device from
            which the visit is made. This information is used to improve the
            Website, and detect new needs to offer Users a Content and / or
            service of the highest quality. In any case, the information is
            collected anonymously and trend reports on the Website are prepared
            without identifying individual users. You can obtain more
            information about cookies, information about privacy, or consult the
            description of the type of cookies used, their main characteristics,
            expiration period, etc. at the following link (s):
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
          The entity (s) in charge of supplying cookies may transfer this
          information to third parties, as long as it is required by law or it
          is a third party that processes this information for said entities.
          <h3 className="py-5">SOCIAL MEDIA COOKIES</h3>
          Elias barber Barcelona incorporates social media plugins, which allow
          access to them from the Website. For this reason, social network
          cookies can be stored in the User's browser. The owners of these
          social networks have their own data protection and cookie policies,
          being themselves, in each case, responsible for their own files and
          their own privacy practices. The User must refer to them to find out
          about said cookies and, where appropriate, the processing of their
          personal data. For informational purposes only, the links in which
          these privacy and / or cookie policies can be consulted are indicated
          below:
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
          <h3 className="py-5">DISABLE, REJECT AND DELETE COOKIES</h3>
          The User can disable, reject and delete the cookies - totally or
          partially - installed on his device through the configuration of his
          browser (among which are, for example, Chrome, Firefox, Safari,
          Explorer). In this sense, the procedures for rejecting and deleting
          cookies may differ from one Internet browser to another. Consequently,
          the User must refer to the instructions provided by the Internet
          browser that he is using. In the event that you reject the use of
          cookies - totally or partially - you may continue to use the Website,
          although the use of some of its features may be limited. This Cookie
          Policy document has been created using the online cookie policy
          template generator on <b>21/04/2021</b>.
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
