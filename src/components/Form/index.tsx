import styles from "./Form.module.scss"

const Form = () => {
  const onSubmit = (event: React.FormEvent <HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    console.log(formData)
    console.log(event.target)
  }
  return (
  <form className={styles.Form} onSubmit={onSubmit}>
    <label htmlFor="name">Nome:</label>
    <input type="text" id="name" name="name"/>

    <label htmlFor="brand">Marca:</label>
    <input type="text" id="brand" name="brand"/>

    <label htmlFor="color">Cor:</label>
    <input type="text" id="color" name="color"/>

    <label htmlFor="year">Ano:</label>
    <input type="number" id="year" name="year"/>   

    <label htmlFor="plate">Placa:</label>
    <input type="text" id="plate" name="plate"/>

    <button type="submit">Enviar</button>
  </form>
  
  )
}

export default Form