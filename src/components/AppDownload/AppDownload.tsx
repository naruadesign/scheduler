import { useId, useState, type FormEvent } from 'react'
import { Container } from '../shared'
import { appDownload } from '../../data/home'
import * as S from './AppDownload.styles'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function AppDownload() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')
  const inputId = useId()
  const errorId = useId()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus(EMAIL_PATTERN.test(email) ? 'success' : 'error')
  }

  return (
    <S.Section>
      <Container>
        <S.Grid>
          <div>
            <S.Eyebrow>{appDownload.title}</S.Eyebrow>
            <S.Heading>{appDownload.subtitle}</S.Heading>
            <S.Body>{appDownload.body}</S.Body>

            <S.Form onSubmit={handleSubmit} noValidate>
              <S.Field>
                <label htmlFor={inputId} className="sr-only">
                  {appDownload.emailLabel}
                </label>
                <S.Input
                  id={inputId}
                  type="email"
                  placeholder={appDownload.emailLabel}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={status === 'error'}
                  aria-describedby={status === 'error' ? errorId : undefined}
                />
                {status === 'error' && <S.ErrorText id={errorId}>{appDownload.emailError}</S.ErrorText>}
              </S.Field>
              <S.Badge as="button" type="submit">Send</S.Badge>
            </S.Form>
            {status === 'success' && <S.SuccessText role="status">{appDownload.success}</S.SuccessText>}

            <S.Badges>
              <S.Badge href="https://apps.apple.com" target="_blank" rel="noreferrer">App Store</S.Badge>
              <S.Badge href="https://play.google.com" target="_blank" rel="noreferrer">Google Play</S.Badge>
            </S.Badges>
          </div>
        </S.Grid>
      </Container>
    </S.Section>
  )
}
