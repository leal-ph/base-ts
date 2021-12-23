const meses = [
  "Janeiro",
  "Fevereiro",
  "Marco",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Septembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

export async function getTodayInfo(): Promise<Array<string>> {
  const data = new Date()
  const dia = String(data.getDate()).padStart(2, "0")
  const mes = String(data.getMonth() + 1).padStart(2, "0")
  const ano = data.getFullYear()

  return [dia, meses[parseInt(mes) - 1], ano.toString()]
}
