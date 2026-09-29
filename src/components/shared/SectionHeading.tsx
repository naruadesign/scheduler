import styled from 'styled-components'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  inverse?: boolean
  as?: 'h1' | 'h2'
}

const Wrapper = styled.div<{ $align: 'left' | 'center' }>`
  text-align: ${({ $align }) => $align};
  margin-bottom: 32px;
`

const Title = styled.h2<{ $inverse: boolean }>`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme, $inverse }) => ($inverse ? theme.colors.white : theme.colors.primaryDark)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 36px;
  }
`

const Subtitle = styled.p<{ $inverse: boolean }>`
  margin-top: 12px;
  font-size: 16px;
  color: ${({ theme, $inverse }) => ($inverse ? theme.colors.white : theme.colors.textSecondary)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
  }
`

export function SectionHeading({ title, subtitle, align = 'center', inverse = false, as }: SectionHeadingProps) {
  return (
    <Wrapper $align={align}>
      <Title as={as} $inverse={inverse}>{title}</Title>
      {subtitle && <Subtitle $inverse={inverse}>{subtitle}</Subtitle>}
    </Wrapper>
  )
}
