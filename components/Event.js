import BlockContent from '@sanity/block-content-to-react'

export default function Event({img, title, when, where, cost, description, costDescription}) {
  return (
    <article className="eventComponent">
      <div>
        <img src={`${img}`} />
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
        <div className="eventDivider"><hr /><svg className={`heart`} viewBox="0 0 32 29.6" fill="red">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg>
        <hr/></div> 
        <BlockContent
          blocks={description}
          className="eventDescription"
        />
        <p><sup>*</sup>{costDescription}</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdT56B8MIc5uu7VPYvwqWOyEjd_Jz28xGa2RKL4AJ-twYzZ7g/viewform" target="_blank">Registration Form</a>
      </section>
    </article>
  )
}