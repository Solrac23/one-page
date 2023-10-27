export default async function starWars(req, res) {
  const baseUrl = await fetch(`https://swapi.dev/api/people/?search=Luke`)

  const names = baseUrl.arrayBuffer

  console.log(names)

  return (
    <div>
      <p></p>
    </div>
  )
}
