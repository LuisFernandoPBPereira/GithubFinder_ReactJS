import * as S from "./styled"

export function Input({name, placeholder, onChange}) {
  return (
    <S.Input name={name}
             placeholder={placeholder} 
             onChange={onChange}
    />
  )
}
