import * as S from "./styled.js"

export function Button({label, onClick}) {
  return (
    <S.Button onClick={onClick}>{label}</S.Button>
  )
}
