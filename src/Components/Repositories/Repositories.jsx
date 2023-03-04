import * as S from "./styled"

export function Repositories({title, description}) {
  return (
    <S.Repositories>
        <strong>{title}</strong>
        <p>{description}</p>
        <hr />
    </S.Repositories>
  )
}
