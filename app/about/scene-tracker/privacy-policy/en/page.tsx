import type { Metadata } from "next";
import Link from "next/link";
import sceneStyles from "../../scene-tracker.module.css";
import styles from "../privacy-policy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Scene Tracker",
  description:
    "Learn what personal data Scene Tracker processes, why it is processed, how long it is retained, and how to exercise your rights.",
  alternates: {
    canonical: "https://etfactory.dev/about/scene-tracker/privacy-policy/en",
    languages: {
      "ko-KR": "https://etfactory.dev/about/scene-tracker/privacy-policy",
      "en-US": "https://etfactory.dev/about/scene-tracker/privacy-policy/en",
    },
  },
};

const sections = [
  ["overview", "1. Overview"],
  ["collection", "2. Purposes, data, and retention"],
  ["location", "3. Travel and location data"],
  ["children", "4. Children under 14"],
  ["third-party", "5. Third-party disclosure"],
  ["outsourcing", "6. Processors and overseas transfers"],
  ["deletion", "7. Deletion"],
  ["security", "8. Security measures"],
  ["rights", "9. Your rights"],
  ["contact", "10. Privacy contact"],
  ["changes", "11. Changes to this Policy"],
] as const;

const processingRows = [
  [
    "Member account",
    "Email address, password hash",
    "Identification and sign-in",
    "Until account deletion",
  ],
  [
    "Consent record",
    "Terms and Privacy Policy versions, consent time, confirmation that the member is at least 14",
    "Proof of consent",
    "Until account deletion",
  ],
  [
    "Authentication session",
    "Refresh-token hash; session expiry, revocation, and MFA verification times",
    "Sign-in continuity and security",
    "Until sign-out, account deletion, or a maximum of 30 days",
  ],
  [
    "Authentication action",
    "HMAC hash of verification/reset code, purpose, failed-attempt count, expiry and use time",
    "Email ownership verification and recovery",
    "Scheduled deletion within one hour after expiry",
  ],
  [
    "Administrator MFA",
    "Encrypted TOTP secret, recovery-code HMAC hashes, last-used counter",
    "Administrator protection",
    "Until account deletion or MFA re-enrollment",
  ],
  [
    "Security processing",
    "HMAC-derived request identifier and request count",
    "Brute-force and excessive-request prevention",
    "Scheduled deletion within one hour after the rate-limit window ends",
  ],
  [
    "Server-side visit record",
    "Place ID/name, region, visit date, optional note entered by the user",
    "Travel history",
    "Excluded immediately and permanently deleted within 30 days after record or account deletion",
  ],
  [
    "Filming-location submission",
    "Title, place, region, scene description, public evidence URL",
    "Moderation and publication",
    "Excluded immediately and permanently deleted within 30 days after withdrawal or account deletion",
  ],
  [
    "On-device location",
    "Latitude, longitude, accuracy, automatic visit determination while the app is in use",
    "Course-place proximity detection",
    "Processed only on the current device",
  ],
  [
    "Optional improvement sharing",
    "HMAC-pseudonymized random on-device identifier; date, event type and count; canonical title ID for a successful title search",
    "Service usage, active-device and return-use analysis",
    "Until sharing is withdrawn or 180 days from creation",
  ],
] as const;

export default function SceneTrackerPrivacyPolicyEnglishPage() {
  return (
    <div className={`${sceneStyles.page} ${styles.policyPage}`} lang="en">
      <header className={styles.header}>
        <Link
          href="/about/scene-tracker"
          className={styles.brand}
          aria-label="Scene Tracker project page"
        >
          <img src="/logo/page factory black.svg" alt="pageFactory" />
          <span aria-hidden="true" />
          <b>SCENE TRACKER</b>
        </Link>
        <div className={styles.headerActions}>
          <nav className={styles.languageSwitch} aria-label="Document language">
            <Link
              href="/about/scene-tracker/privacy-policy"
              className={styles.languageButton}
              hrefLang="ko"
            >
              한국어
            </Link>
            <span className={styles.languageButtonActive} aria-current="page">
              English
            </span>
          </nav>
          <Link href="/about/scene-tracker" className={styles.backLink}>
            Back to project <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="policy-title">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>
            PRIVACY POLICY · VERSION 2026-09-03.1
          </p>
          <h1 id="policy-title">Privacy Policy</h1>
          <p className={styles.heroCopy}>
            This Policy explains what information Scene Tracker processes, why
            it is needed, how long it is retained, and how you can exercise your
            rights.
          </p>
          <dl className={styles.policyMeta}>
            <div>
              <dt>Operator</dt>
              <dd>etfactory.dev · Free individual operation</dd>
            </div>
            <div>
              <dt>Published</dt>
              <dd>September 3, 2026</dd>
            </div>
            <div>
              <dt>Effective</dt>
              <dd>September 3, 2026</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className={styles.policyShell}>
        <aside className={styles.sidebar} aria-label="Privacy Policy contents">
          <p>CONTENTS</p>
          <nav>
            {sections.map(([id, title]) => (
              <a key={id} href={`#${id}`}>
                {title}
              </a>
            ))}
          </nav>
        </aside>

        <article className={styles.document}>
          <div
            className={styles.principles}
            aria-label="Core privacy principles"
          >
            <div>
              <span>01</span>
              <b>Only necessary data</b>
              <p>
                Registration uses only the minimum information needed for
                email-based authentication.
              </p>
            </div>
            <div>
              <span>02</span>
              <b>Location stays on device</b>
              <p>
                Current coordinates and automatic visit determinations are never
                sent to the operator server.
              </p>
            </div>
            <div>
              <span>03</span>
              <b>Optional analytics</b>
              <p>
                Improvement sharing is off by default and can be withdrawn at
                any time.
              </p>
            </div>
          </div>

          <section id="overview" className={styles.policySection}>
            <h2>1. Overview</h2>
            <p>
              This English text is a translation of the Korean Privacy Policy
              for user convenience. If an interpretation differs, the Korean
              version governs to the extent permitted by applicable law.
            </p>
            <p>
              The operator of Scene Tracker provides this Privacy Policy under
              the Personal Information Protection Act of the Republic of Korea.
              Scene Tracker is operated free of charge and on a non-commercial
              basis by an individual developer who is not registered as a
              business and uses <strong>etfactory.dev</strong> as the service
              name. Privacy inquiries are accepted at{" "}
              <a href="mailto:factory@etfactory.dev">factory@etfactory.dev</a>{" "}
              or <a href="https://etfactory.dev">etfactory.dev</a>.
              etfactory.dev is not currently a registered trade name or legal
              entity.
            </p>
            <p>
              The application server and self-operated PostgreSQL database are
              hosted in the AWS Lightsail Seoul Region by Amazon Web Services
              Korea LLC.
            </p>
          </section>

          <section id="collection" className={styles.policySection}>
            <h2>2. Purposes, data categories, and retention</h2>
            <div className={styles.tableWrap} tabIndex={0}>
              <table>
                <caption className={styles.srOnly}>
                  Personal data purposes, categories, and retention periods
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Data processed</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Retention</th>
                  </tr>
                </thead>
                <tbody>
                  {processingRows.map(
                    ([category, items, purpose, retention]) => (
                      <tr key={category}>
                        <th scope="row">{category}</th>
                        <td>{items}</td>
                        <td>{purpose}</td>
                        <td>{retention}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
            <p>
              Scene Tracker does not collect a real name, phone number, full
              date of birth, resident registration number, gender, postal
              address, payment information, or health information for account
              registration.
            </p>
            <p>
              At registration, Scene Tracker separately presents the purpose,
              required data, retention period, right to refuse, and the
              resulting limitation on email-account features.
            </p>
          </section>

          <section id="location" className={styles.policySection}>
            <h2>3. Travel data and location processing</h2>
            <h3>Data stored only on the device</h3>
            <p>
              Saved places, favorite titles, user-created courses, and travel
              preferences are stored only on the current device. Only manual
              visit records entered by a signed-in member are stored in the
              member account database for restoration across devices. Manual
              records created before sign-in are stored temporarily on the
              device and merged after sign-in.
            </p>
            <h3>Current location and automatic visits</h3>
            <p>
              When automatic visit recording is enabled, Scene Tracker checks
              latitude, longitude, and accuracy while the app is active. The
              device calculates the distance to saved course places and creates
              an on-device visit record when accuracy is within 100 meters and
              the device is within a 100-meter place radius.
            </p>
            <p>
              Current coordinates, accuracy, movement routes, and automatically
              detected visit records are not transmitted to the operator server
              and are not included in sign-in, backup, or account
              synchronization. Location checks stop when the app becomes
              inactive, and the app does not request background location
              permission. Search, saved places, courses, and manual visit
              records remain available without location permission.
            </p>
            <h3>External information and optional analytics</h3>
            <p>
              Nearby tourism and weather requests use only coordinates stored
              with a filming location or tourism place. The device&apos;s
              current coordinates are not included in requests to the operator
              server or content providers. Title search terms and travel
              conditions are processed only as needed to produce results. Email
              addresses, member IDs, and authentication tokens are not sent to
              Gemini, the Korea Tourism Organization, the Korea Meteorological
              Administration, or other content providers.
            </p>
            <p>
              Service-improvement sharing is off by default and is not a
              condition of service. Only after a user enables it does the app
              transmit app-open, successful-title-search, place-save, and
              course-creation events. The app creates a random identifier
              unrelated to an account, and the server transforms it with a
              purpose-separated HMAC to calculate daily feature usage, active
              devices, and return use.
            </p>
            <p>
              For a successful title search, Scene Tracker uses the canonical
              title ID instead of the original search text. Tourism search
              terms, email addresses, current location, saved-place names, and
              course names are not stored in analytics. Turning sharing off
              requests deletion of that device&apos;s pseudonymous totals; if
              offline, the app retries at the next server connection.
            </p>
            <h3>Filming-location submissions</h3>
            <p>
              A member&apos;s submission is linked to the account for
              moderation. For a submission marked as a residence, the detailed
              address and coordinates are not stored on the server and the place
              is not published as a visitable location. Evidence URLs must not
              contain non-public personal data belonging to the submitter or
              another person.
            </p>
          </section>

          <section id="children" className={styles.policySection}>
            <h2>4. Children under 14</h2>
            <p>
              Scene Tracker does not accept registrations from children under 14
              because it does not provide a legal-representative consent and
              verification process. The service does not collect a date of birth
              and only asks the user to confirm that they are at least 14.
            </p>
          </section>

          <section id="third-party" className={styles.policySection}>
            <h2>5. Disclosure to third parties</h2>
            <p>
              The operator does not disclose personal data to third parties as a
              rule. If disclosure becomes necessary, the operator will identify
              a legal basis and separately provide the recipient, purpose, data
              categories, retention period, right to refuse, and effect of
              refusal.
            </p>
            <p>
              The operator reviews contractual terms and safeguards so that
              processors and service providers apply privacy protections
              equivalent to or stronger than those required by this Policy and
              applicable law.
            </p>
          </section>

          <section id="outsourcing" className={styles.policySection}>
            <h2>6. Processors and overseas transfers</h2>
            <div className={styles.tableWrap} tabIndex={0}>
              <table>
                <caption className={styles.srOnly}>
                  Processors and processing details
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Processor</th>
                    <th scope="col">Service</th>
                    <th scope="col">Data</th>
                    <th scope="col">Retention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Amazon Web Services Korea LLC</th>
                    <td>
                      AWS Lightsail application and self-operated PostgreSQL
                      hosting
                    </td>
                    <td>
                      Account, authentication, manual visit, submission, and API
                      operation data
                    </td>
                    <td>
                      Applicable service retention; logical backups up to 30
                      days; latest seven automatic snapshots
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Vercel Inc.</th>
                    <td>
                      Public Privacy Policy and account-deletion page hosting
                    </td>
                    <td>
                      IP address, request URL, browser/device information,
                      request time, and response status
                    </td>
                    <td>
                      Hobby runtime logs available to the operator for one hour;
                      otherwise until the service/security purpose is fulfilled
                      or as required by law
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Plus Five Five, Inc. (Resend)</th>
                    <td>Transactional account email delivery</td>
                    <td>
                      Email address, email metadata, message body, and delivery
                      logs
                    </td>
                    <td>
                      During the contract and up to 90 days for customer-data
                      deletion after termination
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Amazon Web Services, Inc.</th>
                    <td>Resend hosting and email-delivery subprocessing</td>
                    <td>Data required for that hosting and delivery</td>
                    <td>
                      Under Resend&apos;s subprocessing agreement and applicable
                      law
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The operational database runs in a private Docker network on the
              same Lightsail Seoul instance and has no public database port.
              Access-restricted logical backups are deleted after 30 days, and
              the latest seven Lightsail automatic snapshots are retained.
              Deletion-pending status and retention periods are reapplied after
              restoration, and backups are used only for disaster recovery.
            </p>
            <p>
              The public Privacy Policy and account-deletion pages are provided
              through Vercel Hobby. Vercel Analytics and Speed Insights are
              disabled for every /about/scene-tracker route, and no Log Drain is
              used. Credentials entered into the deletion form are sent directly
              from the browser to the Lightsail Seoul API and are not routed
              through the Vercel application server.
            </p>
            <div className={styles.transferCard}>
              <h3>Resend overseas transfer</h3>
              <dl>
                <div>
                  <dt>Recipient</dt>
                  <dd>Plus Five Five, Inc. (Resend) · privacy@resend.com</dd>
                </div>
                <div>
                  <dt>Countries</dt>
                  <dd>United States and Japan</dd>
                </div>
                <div>
                  <dt>Data</dt>
                  <dd>
                    Recipient email address; sender, recipient, subject, send
                    time, delivery-status metadata; message body containing a
                    verification/reset code or security notice
                  </dd>
                </div>
                <div>
                  <dt>Purpose</dt>
                  <dd>
                    Delivery and status confirmation for account verification,
                    password reset, and account-security notices
                  </dd>
                </div>
                <div>
                  <dt>Timing and method</dt>
                  <dd>
                    Encrypted HTTPS API transfer whenever verification, reset,
                    or a security notice is requested
                  </dd>
                </div>
                <div>
                  <dt>Processing locations</dt>
                  <dd>
                    Routing and delivery in Tokyo (ap-northeast-1), Japan;
                    storage of email metadata, logs, and API records in the
                    United States
                  </dd>
                </div>
                <div>
                  <dt>Retention</dt>
                  <dd>
                    During the Resend contract and up to 90 days for deletion
                    after termination, unless a longer period is required by law
                  </dd>
                </div>
                <div>
                  <dt>Legal basis</dt>
                  <dd>
                    Overseas processing and storage necessary to enter into or
                    perform the member agreement under Article 28-8(1)(3) of the
                    Personal Information Protection Act, with disclosure in this
                    Policy
                  </dd>
                </div>
                <div>
                  <dt>Refusal and effect</dt>
                  <dd>
                    Do not register or request email recovery, or request
                    suspension/account deletion. Email-based features will be
                    unavailable, but public browsing remains available.
                  </dd>
                </div>
              </dl>
            </div>
            <div className={styles.transferCard}>
              <h3>Vercel public-page overseas processing</h3>
              <dl>
                <div>
                  <dt>Recipient</dt>
                  <dd>Vercel Inc. · privacy@vercel.com</dd>
                </div>
                <div>
                  <dt>Countries</dt>
                  <dd>
                    United States and countries where Vercel subprocessors
                    operate; requests from Korea may be served from the Seoul
                    edge
                  </dd>
                </div>
                <div>
                  <dt>Data</dt>
                  <dd>
                    IP address, request URL, browser/device information, request
                    time, response status, and request identifier
                  </dd>
                </div>
                <div>
                  <dt>Purpose</dt>
                  <dd>
                    Delivery, transport security, and troubleshooting of the
                    Privacy Policy and account-deletion pages
                  </dd>
                </div>
                <div>
                  <dt>Timing and method</dt>
                  <dd>
                    Encrypted HTTPS processing whenever a user accesses a public
                    page
                  </dd>
                </div>
                <div>
                  <dt>Retention</dt>
                  <dd>
                    Hobby runtime logs available to the operator for one hour;
                    otherwise until the service/security purpose is fulfilled or
                    as required by law
                  </dd>
                </div>
                <div>
                  <dt>Legal basis</dt>
                  <dd>
                    Overseas processing necessary to perform the member
                    agreement under Article 28-8(1)(3), with disclosure in this
                    Policy
                  </dd>
                </div>
                <div>
                  <dt>Refusal and effect</dt>
                  <dd>
                    Do not use the public pages. Account deletion remains
                    available in the app, and inquiries may be sent to
                    factory@etfactory.dev.
                  </dd>
                </div>
              </dl>
            </div>
            <p>
              Open and click tracking is disabled for account-security emails.
              Attachments, member IDs, travel conditions, current location,
              saved places, and courses are not included in email messages.
              Resend&apos;s current subprocessor list is available at{" "}
              <a href="https://resend.com/legal/subprocessors">
                resend.com/legal/subprocessors
              </a>
              .
            </p>
            <p>
              Gemini receives only a title and filming-location research
              request. Member email addresses, tokens, member IDs, current
              location, saved places, courses, and travel preferences are not
              transmitted to Gemini.
            </p>
          </section>

          <section id="deletion" className={styles.policySection}>
            <h2>7. Deletion</h2>
            <p>
              When a retention period ends or a purpose is fulfilled, electronic
              data is deleted in a manner designed to prevent recovery. On an
              account-deletion request, the email address, password hash, and
              MFA information are immediately deleted or replaced with
              irreversible random values, and sessions, authentication actions,
              and consent records are immediately deleted.
            </p>
            <p>
              The account, server-side visit records, original submissions,
              evidence, and moderation history are immediately excluded from
              general access and permanently deleted within 30 days. A
              deletion-pending account cannot be restored or used to sign in.
              Data subject to a statutory retention requirement is separated,
              retained for the required period, and then deleted.
            </p>
            <p>
              An independently verified filming-location fact may remain only as
              service-authored information after removing the submitter,
              original submission, and account association. Optional analytics
              totals are deleted after 180 days; withdrawing sharing deletes the
              corresponding device-HMAC totals earlier.
            </p>
          </section>

          <section id="security" className={styles.policySection}>
            <h2>8. Security measures</h2>
            <ul className={styles.checkList}>
              <li>One-way password hashing using scrypt</li>
              <li>
                Short-lived signed access tokens and rotating refresh tokens
              </li>
              <li>
                Refresh-token hashes stored on the server and invalidated at
                sign-out
              </li>
              <li>Authentication tokens stored in SecureStore</li>
              <li>Role-based administrator access controls</li>
              <li>HTTPS and separate production secrets</li>
              <li>Limits on failed sign-in and excessive requests</li>
              <li>Single-use email codes stored as HMAC hashes</li>
              <li>Administrator TOTP, recovery codes, and replay prevention</li>
              <li>PostgreSQL-backed HMAC rate limiting</li>
              <li>
                Purpose-separated HMAC processing for optional device
                identifiers
              </li>
              <li>No administrator access to unsubmitted drafts</li>
              <li>
                No detailed address or coordinates for residential submissions
              </li>
            </ul>
          </section>

          <section id="rights" className={styles.policySection}>
            <h2>9. Your rights and how to exercise them</h2>
            <p>
              Members may review account information, sign out, or delete their
              account in Account Management, and may edit or delete visit dates
              and notes in Visit History. A user who cannot access the app may
              request deletion at the{" "}
              <Link href="/about/scene-tracker/account-deletion">
                public account-deletion page
              </Link>{" "}
              by confirming the registered email address and current password.
            </p>
            <p>
              Requests to access, correct, delete, suspend processing, withdraw
              consent, or raise an objection may be sent to the privacy contact
              below and will not be made more difficult than account
              registration. Optional improvement sharing may be enabled or
              disabled in App Settings.
            </p>
          </section>

          <section id="contact" className={styles.policySection}>
            <h2>10. Privacy contact</h2>
            <dl className={styles.contactList}>
              <div>
                <dt>Operating status</dt>
                <dd>
                  Free, non-commercial service operated by an individual who is
                  not registered as a business
                </dd>
              </div>
              <div>
                <dt>Service name</dt>
                <dd>etfactory.dev</dd>
              </div>
              <div>
                <dt>Privacy office</dt>
                <dd>Scene Tracker Privacy Office</dd>
              </div>
              <div>
                <dt>Privacy email</dt>
                <dd>
                  <a href="mailto:factory@etfactory.dev">
                    factory@etfactory.dev
                  </a>
                </dd>
              </div>
              <div>
                <dt>Website</dt>
                <dd>
                  <a href="https://etfactory.dev">https://etfactory.dev</a>
                </dd>
              </div>
            </dl>
            <p>
              There is currently no registered business name, registration
              number, or business address. If monetization and business
              registration are introduced, the operator will publish the actual
              business information and notify users before the change takes
              effect.
            </p>
          </section>

          <section id="changes" className={styles.policySection}>
            <h2>11. Changes to this Policy</h2>
            <p>
              This Policy takes effect on September 3, 2026. Material changes
              will be announced in the app or through another appropriate notice
              before they take effect, and prior versions and revision history
              will be maintained.
            </p>
            <h3>Revision history</h3>
            <ul className={styles.historyList}>
              <li>
                <time dateTime="2026-09-03">2026.09.03</time>
                <span>
                  Finalized the App Store release version and provided an
                  English translation with the same substance.
                </span>
              </li>
              <li>
                <time dateTime="2026-08-26">2026.08.26</time>
                <span>
                  Reflected the self-operated PostgreSQL database and backup
                  policy on AWS Lightsail Seoul and Vercel Hobby public-page
                  processing.
                </span>
              </li>
              <li>
                <time dateTime="2026-08-24">2026.08.24</time>
                <span>
                  Disclosed Resend processing and overseas transfers,
                  non-commercial individual operation, public account deletion,
                  and permanent deletion within 30 days.
                </span>
              </li>
              <li>
                <time dateTime="2026-08-13">2026.08.13</time>
                <span>
                  Disclosed submissions, residential safeguards, authentication
                  security, optional pseudonymous analytics, and retention
                  rules.
                </span>
              </li>
              <li>
                <time dateTime="2026-08-08">2026.08.08</time>
                <span>
                  Disclosed on-device location processing and prohibited server
                  transfer and account synchronization.
                </span>
              </li>
            </ul>
          </section>

          <section className={`${styles.policySection} ${styles.references}`}>
            <h2>References</h2>
            <ul>
              <li>
                <a href="https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%EB%B2%95">
                  Personal Information Protection Act
                </a>
              </li>
              <li>
                <a href="https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1029334953">
                  PIPA Article 28-8: Overseas Transfer
                </a>
              </li>
              <li>
                <a href="https://resend.com/legal/dpa">
                  Resend Data Processing Addendum
                </a>
              </li>
              <li>
                <a href="https://vercel.com/legal/privacy-notice">
                  Vercel Privacy Notice
                </a>
              </li>
              <li>
                <a href="https://developer.apple.com/support/offering-account-deletion-in-your-app/">
                  Apple in-app account deletion requirements
                </a>
              </li>
            </ul>
            <p className={styles.legalFootnote}>
              This Policy applies to the currently confirmed operation and data
              flows. It will be reviewed and amended if applicable law or the
              service architecture changes. The location-information filing and
              terms requirements must be assessed against the actual deployed
              architecture.
            </p>
          </section>
        </article>
      </div>

      <footer className={styles.policyFooter}>
        <div>
          <p>SCENE TRACKER · PRIVACY POLICY</p>
          <span>Contact factory@etfactory.dev</span>
        </div>
        <Link href="/about/scene-tracker">View project page</Link>
      </footer>
    </div>
  );
}
