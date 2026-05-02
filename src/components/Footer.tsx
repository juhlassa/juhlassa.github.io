import { PrivacyPolicyLink } from '../components/PrivacyPolicyLink'
import { basicInfo } from '../util'

export function Footer() {
  const { email, telephone } = basicInfo

  return (
    <div className="footer">
      <span>
        Kysy lisää numerosta{' '}
        <a className="link" href={`tel:${telephone.replace(/\s/g, '')}`}>
          {telephone.replace(/\s/g, '\u00a0')}
        </a>
      </span>
      <span> tai sähköpostilla </span>
      <a className="link" href={`mailto:${email}`}>
        {email}
      </a>
      .
      <PrivacyPolicyLink />
    </div>
  )
}
