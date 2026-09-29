import * as S from './CheckInSteps.styles'

interface CheckInStepsProps {
  title: string
  steps: string[]
  tinted?: boolean
}

/** Renders a numbered how-to list; used for both the website and app check-in flows. */
export function CheckInSteps({ title, steps, tinted = false }: CheckInStepsProps) {
  return (
    <S.Section $tinted={tinted}>
      <S.Title>{title}</S.Title>
      <S.List>
        {steps.map((step, index) => (
          <S.Step key={step}>
            <S.StepNumber aria-hidden="true">{index + 1}</S.StepNumber>
            <S.StepText>{step}</S.StepText>
          </S.Step>
        ))}
      </S.List>
    </S.Section>
  )
}
