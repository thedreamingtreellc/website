export default function NewEvent({img, title, when, where, cost, description, costDescription}) {
  return (
    <article className="newEventComponent">
      <div>
        {/* <img src={img} /> */}
      </div>
      <section>
        <h2>{title}</h2>
        <table>
          <tr>
            <td>When</td>
            <td>{when}</td>
          </tr>
          <tr>
            <td>Where</td>
            <td>{where}</td>
          </tr>
          <tr>
            <td>Cost<sup>*</sup></td>
            <td>${cost}</td>
          </tr>
        </table>
      </section>
    </article>
  )
}