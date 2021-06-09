import client from "../client";
import Event from "../components/Event";
import ImageUrlBuilder from '@sanity/image-url'

export default function EventsPage({...info}) {

  const eventsArray = Object.values(info);

  // SANITY IMAGE BUILDER
  const builder = ImageUrlBuilder(client)

  // function to return the image url to pass to the image component
  function urlFor(source) {
    return builder.image(source)
  }

  const eventsComponents = eventsArray.map(
    (event) => {

    //converts the datestring to a real date
    const eventDate = new Date(event[0].when)
    //map function
    return <Event
        img={urlFor(event[0].image).url()}
        title={event[0].name}
        when={`${eventDate.toLocaleDateString()} at ${eventDate.toLocaleTimeString([],{hour: 'numeric', minute:"2-digit"})}`}
        where={event[0].where}
        cost={event[0].cost}
        costDescription={event[0].costDescription}
        description={event[0].description}
      />
  })
  

  return (
    <>
      {eventsComponents}
    </>
  )
}

export async function getServerSideProps(context) {
  // returns a list of all of the events
  const info = await client.fetch('*[_type == "event"]')
  return {
    props: { info }
  }
}