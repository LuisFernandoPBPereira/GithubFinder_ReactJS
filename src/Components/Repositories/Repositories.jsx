import * as S from "./styled"

export function Repositories({title, description, href}) {
  return (
    <S.Repositories>
      <a href={href}>
        <strong>{title}</strong>
        <p>{description}</p>
        <hr />
      </a>
    </S.Repositories>
  )
}
